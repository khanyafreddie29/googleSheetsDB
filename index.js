import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import recordAttendance from './routes/attendanceRoutes.js';

const app = express();;
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api', recordAttendance)

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));