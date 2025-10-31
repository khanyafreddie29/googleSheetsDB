import QRCode from 'qrcode';

// list of exmaple employees into the database
const generateEmployeeQR = [
    {id: "EMPOO1", name: "Khanya"}
] 

generateEmployeeQR.forEach((emp) => {
  const data = emp.id; // you could also use JSON.stringify(emp)
  QRCode.toFile(`./qrcodes/${emp.id}.png`, data, function (err) {
    if (err) throw err;
    console.log(`✅ QR for ${emp.name} saved as ${emp.id}.png`);
  });
});