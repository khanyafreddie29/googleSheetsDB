export default class Attendance {
  constructor(employeeId, lat, lng, status) {
    this.employeeId = employeeId;
    this.lat = lat;
    this.lng = lng;
    this.status = status;
  }
};