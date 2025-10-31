import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { google } from "googleapis";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const credentials = JSON.parse(fs.readFileSync("credentials.json"));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// export both
export { sheets };
