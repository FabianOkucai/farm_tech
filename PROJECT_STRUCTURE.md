# Farmtech Academy - Project Structure Overview

## 📋 Project Summary

**Farmtech Academy** is a modern training hub and e-commerce platform bridging traditional farming and high-tech agriculture, specializing in quality poultry supplies and agricultural education.

## 🗂️ Clean Project Structure

```
Farmtech_Academy/
├── .vscode/               # VS Code configuration
│   └── launch.json        # Chrome debugger config
├── docs/                  # Documentation
│   └── PROJECT INNOVATION.pdf
├── src/
│   ├── frontend/          # Web application
│   │   ├── index.html     # Main website (FIXED)
│   │   ├── styles.css     # Responsive styling
│   │   └── script.js      # Interactive features
│   ├── backend/           # Future server implementation
│   │   └── README.md      # Backend roadmap
│   └── assets/            # Media files
│       ├── pictures.jpg
│       └── README.md
├── .gitignore             # Updated for web projects
├── LICENSE
└── README.md
```

## ✅ Cleanup Actions Performed

1. **Deleted:**
   - `.github/workflows/jekyll-docker.yml` - Jekyll not used
   - `scripts/` directory - Empty, not needed

2. **Fixed:**
   - `index.html` - Was empty/corrupted, now fully functional
   - `.gitignore` - Replaced Android config with web project config

3. **Kept:**
   - `.vscode/` - Useful for Chrome debugging
   - `backend/` - Placeholder for future development
   - All frontend files - Core website functionality

## 🎯 Core Features

### Products & Services:
- 🌾 Organic Chicken Feed
- 🥚 Fresh Table Eggs
- 💊 Health Supplements
- 🏠 Nesting Boxes
- 💉 Vaccinations
- 🐣 Day-Old Chicks

### Contact Information:
- **Location:** Biashara Street, Nairobi, Kenya
- **Phone:** +254 723852270
- **Email:** sales@farmtechacademy.com

## 🚀 Quick Start

```bash
# Open the website
cd src/frontend
open index.html  # or double-click the file
```

## 📝 Future Development (Backend)

Planned features in `src/backend/`:
- Order management system
- Inventory tracking
- Customer database
- Payment processing integration

## 🔧 Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Styling:** CSS Grid, Flexbox, CSS Variables
- **Backend:** To be implemented (Node.js/Python recommended)

---
Last Updated: February 12, 2026
