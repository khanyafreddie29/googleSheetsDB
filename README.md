# googleSheetsDB

# Google Sheets as a Database Experiment
A practical experiment demonstrating how to use Google Sheets as a lightweight backend database for web applications. This repository contains working examples of reading from and writing to Google Sheets using various methods.

## 🎯 Project Purpose
* To explore and document practical approaches for using Google Sheets as a simple, accessible database solution for:
* Prototyping web applications quickly
* Creating admin panels that non-technical users can manage
* Building data collection forms with automatic spreadsheet storage
* Small-scale projects where a full database is unnecessary

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

##🚀 Features
*Full CRUD Operations on attendance records stored in Google Sheets
*QR Code Integration Generate codes for events, students, or sessions
*RESTful API Structured backend with clear separation of concerns
Proper error handling and rate limiting
*Scalable Architecture MVC-like pattern (Models, Controllers, Routes)

## 🛠️ Tech Stack
Runtime: Node.js
Sheets Integration: google-spreadsheet library
QR Generation: qr-image or similar packag
Web Framework: Express.js
Environment Management: dotenv (recommended)

## ⚙️ Prerequisites
Node.js (v14 or higher)
A Google Cloud Platform project
Google Sheets API enabled
Service Account credentials (JSON key file)

## ⚠️ Important Notes
Never commit your actual credentials.json or .env file
Google Sheets API has usage limits (approx. 500 requests per 100 seconds)
For production use with high traffic, implement caching and request queuing
Consider adding data validation in the controller layer

> **💡 Note:** This project is an educational implementation. While Google Sheets works well for prototypes and low-traffic applications, consider traditional databases (PostgreSQL, MongoDB) for production systems with complex queries or high-volume data.
