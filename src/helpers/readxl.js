const XLSX = require('xlsx');
const path = require('path');

// Nama file Excel yang akan Anda baca
const ReadDataXl = async (excelFileName) => {
    // Ganti dengan nama file Excel Anda
    // Path lengkap ke file Excel
    const excelFilePath = path.join(__dirname, excelFileName);
    // Baca file Excel
    const workbook = XLSX.readFile(excelFilePath);
    // Ambil nama sheet pertama dalam file Excel
    const sheetName = workbook.SheetNames[0];
    // Ambil data dari sheet
    const worksheet = workbook.Sheets[sheetName];
    // Konversi data sheet menjadi objek JavaScript
    const excelData = XLSX.utils.sheet_to_json(worksheet);
    return excelData;
}


const ReadXl = {
    ReadDataXl
}

module.exports = ReadXl;
