export default function Footer() {
    return (
        <footer className="bg-white text-primary text-center py-20 mt-20 border-t border-black/5">
            <p className="opacity-80 text-text-main text-sm font-medium tracking-wide">
                &copy; {new Date().getFullYear()} Farmtech Academy. Redefining Modern Agriculture.
            </p>
        </footer>
    );
}
