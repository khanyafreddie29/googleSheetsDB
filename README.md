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
```google-sheets-attendance/
├── config/
│   └── googleSheets.js           # Google Sheets API configuration and setup
├── controllers/
│   └── attendanceController.js   # Handles business logic for attendance operations
├── models/
│   └── attendanceModel.js        # Data layer for Google Sheets interactions
├── routes/
│   └── attendanceRoutes.js       # Express routes for attendance API endpoints
├── utils/
│   └── generateQR.js             # QR code generation utility functions
├── index.js                      # Main application entry point (Express server)
├── package.json                  # npm dependencies and project metadata
├── package-lock.json             # Exact dependency tree lockfile
└── README.md                     # Project documentation (this file)```

##🚀 Features
*Full CRUD Operations on attendance records stored in Google Sheets
*QR Code Integration Generate codes for events, students, or sessions
*RESTful API Structured backend with clear separation of concerns
Proper error handling and rate limiting
*Scalable Architecture MVC-like pattern (Models, Controllers, Routes)

## 🛠️ Tech Stack
*Runtime: Node.js
*Sheets Integration: google-spreadsheet library
*QR Generation: qr-image or similar package
*Web Framework: Express.js
*Environment Management: dotenv (recommended)

## ⚙️ Prerequisites
*Node.js (v14 or higher)
*A Google Cloud Platform project
*Google Sheets API enabled
*Service Account credentials (JSON key file)

## ⚠️ Important Notes
*Never commit your actual credentials.json or .env file
*Google Sheets API has usage limits (approx. 500 requests per 100 seconds)
*For production use with high traffic, implement caching and request queuing
*Consider adding data validation in the controller layer(middleware)

> **💡 Note:** This project is an educational implementation. While Google Sheets works well for prototypes and low-traffic applications, consider traditional databases (PostgreSQL, MongoDB) for production systems with complex queries or high-volume data.
