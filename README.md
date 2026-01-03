# googleSheetsDB

# Google Sheets as a Database Experiment
A practical experiment demonstrating how to use Google Sheets as a lightweight backend database for web applications. This repository contains working examples of reading from and writing to Google Sheets using various methods.

## 🎯 Project Purpose
* To explore and document practical approaches for using Google Sheets as a simple, accessible database solution for:
* Prototyping web applications quickly
* Creating admin panels that non-technical users can manage
* Building data collection forms with automatic spreadsheet storage
* Small-scale projects where a full database is unnecessary

## 🔧 Technical Implementation
This experiment covers integration methods:

Google Sheets API (Recommended)
* Authenticated access using Service Account or OAuth 2.0
* Full CRUD operations (Create, Read, Update, Delete)
* Proper error handling and rate limiting

## 📁 Project Structure
config/
└── googleSheets.js      # Configuration & initialization for Google Sheets API
controllers/
└── attendanceController.js # Business logic (handles data processing)
models/
└── attendanceModel.js   # Data layer (direct Sheets interaction)
routes/
└── attendanceRoutes.js  # API endpoint definitions
utils/
└── generateQR.js        # QR code generation utility
index.js                 # Main application entry point
package.json             # Dependencies and scripts
README.md                # This file
