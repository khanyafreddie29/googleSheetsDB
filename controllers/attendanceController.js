
import { sheets } from "../config/googleSheets.js";

const spreadsheetId = "1AnlUcdHB8SQpUyzIbgn7gnk019MRq2fHtIsTnoeY2xA";
// unique sheet ID - the url

// 🟢 Add new attendance record with a duplicate check
const recordAttendance = async (req, res) => {
  try {
    const { employee_id, latitude, longitude, status } = req.body;
// receives data from the frontend

    if (!employee_id || !latitude || !longitude || !status) {
      return res.status(400).send("❌ Missing required fields");
    } 
    // if any data inputs are missing then completes error handling

    const now = new Date();
    // now is the current date using the js method Date()
    const dateOnly = now.toISOString().split("T")[0];
    // 
  const timestamp = now.toLocaleString(); 

    // fetch all data to check for duplicates
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "AttendanceData!A:E",
    });
    // range ::
    // checks for everything in google sheets from colummns A TO E
    // reads all current records or data

    const rows = response.data.values || [];
    const [headers, ...data] = rows;

    // check for duplicates (same employee, same day, same status)
    const hasDuplicate = data.some((row) => {
      const [empId, time, , , stat] = row;
      // checks if the record has the same employee_id, date and status
      // if is then  returns a message of the same/ duplicate entry
      if (!empId || !time) return false;
      const existingDate = new Date(time).toISOString().split("T")[0];
      return empId === employee_id && existingDate === dateOnly && stat === status;
    });

    if (hasDuplicate) {
      return res.status(400).send(`⚠️ Duplicate entry: ${employee_id} already has a ${status} today.`);
    }

    // append a new record --  if there are no duplicate entries 
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "AttendanceData!A:E",
      valueInputOption: "RAW",
      // valueInptOption - what kind of data is being used or added
      // no configuration changes to the data,using it is as
      requestBody: {
        values: [[employee_id, timestamp, latitude.toString(), longitude.toString(), status]],
      },
    });

    console.log(`✅ ${status} for ${employee_id} recorded at ${timestamp}`);
    res.send(`✅ ${status} recorded successfully!`);
  } catch (err) {
    console.error("❌ Error recording attendance:", err);
    res.status(500).send("Failed to record attendance.");
  }
};

// 🟣 Fetch all attendance records
const getAttendance = async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "AttendanceData!A:E",
    });

    const rows = response.data.values || [];
    if (rows.length === 0) return res.json([]);

    const [headers, ...data] = rows;
    const result = data.map((row) =>
      headers.reduce((obj, key, i) => {
        obj[key] = row[i] || "";
        return obj;
      }, {})
    );

    res.json(result);
  } catch (err) {
    console.error("❌ Error fetching attendance:", err);
    res.status(500).send("Could not fetch attendance data.");
  }
};

// 🗑 Delete an employee's record
const deleteAttendance = async (req, res) => {
  try {
    const { employee_id, date, status } = req.body;

    if (!employee_id || !date || !status) {
      return res.status(400).send("❌ Missing required fields");
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "AttendanceData!A:E",
    });

    const rows = response.data.values || [];
    if (rows.length <= 1) return res.status(404).send("No data to delete.");

    const [headers, ...data] = rows;

    // Filter out matching record
    const newData = data.filter((row) => {
      const [empId, time, , , stat] = row;
      if (!empId || !time) return true;
      const rowDate = new Date(time).toISOString().split("T")[0];
      return !(empId === employee_id && rowDate === date && stat === status);
    });

    // Rewrite remaining data
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: "AttendanceData!A2",
      valueInputOption: "RAW",
      requestBody: { values: newData },
    });

    console.log(`🗑 Deleted ${status} record for ${employee_id} on ${date}`);
    res.send(`✅ Record deleted for ${employee_id} on ${date}`);
  } catch (err) {
    console.error("❌ Error deleting record:", err);
    res.status(500).send("Failed to delete attendance record.");
  }
};

export { recordAttendance, getAttendance, deleteAttendance };