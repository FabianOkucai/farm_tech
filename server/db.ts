import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { products, liveStock } from './data';

let dbInstance: any = null;

export async function getDb() {
    if (dbInstance) return dbInstance;

    dbInstance = await open({
        filename: './server/database.sqlite',
        driver: sqlite3.Database
    });

    await dbInstance.exec(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            desc TEXT,
            btn TEXT
        );

        CREATE TABLE IF NOT EXISTS livestock (
            id TEXT PRIMARY KEY,
            breed TEXT,
            age TEXT,
            price TEXT,
            purpose TEXT,
            stock TEXT,
            image TEXT,
            specs_yield TEXT,
            specs_maturity TEXT,
            specs_temperament TEXT,
            guarantee TEXT
        );
        DROP TABLE IF EXISTS users;
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            phone TEXT UNIQUE,
            password TEXT,
            fullname TEXT
        );
    `);

    // Seed Data if Empty
    const productsCount = await dbInstance.get('SELECT count(*) as count FROM products');
    if (productsCount.count === 0) {
        console.log('🌱 Seeding database with initial data...');
        for (const p of products) {
            await dbInstance.run(
                'INSERT INTO products (title, desc, btn) VALUES (?, ?, ?)',
                [p.title, p.desc, p.btn]
            );
        }
        for (const l of liveStock) {
            await dbInstance.run(
                `INSERT INTO livestock (
                    id, breed, age, price, purpose, stock, image, 
                    specs_yield, specs_maturity, specs_temperament, guarantee
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    l.id, l.breed, l.age, l.price, l.purpose, l.stock, l.image,
                    l.specs.yield, l.specs.maturity, l.specs.temperament, l.guarantee
                ]
            );
        }
    }

    return dbInstance;
}
