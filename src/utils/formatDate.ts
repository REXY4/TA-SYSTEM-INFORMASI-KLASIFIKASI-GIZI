export const formatDatePrimary = (inputDate: string) => {

    // Membuat objek Date dari string tanggal
    const date = new Date(inputDate);

    // Mendapatkan komponen tanggal, bulan, dan tahun dari objek Date
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Month is zero-based
    const year = date.getUTCFullYear();

    // Membentuk string dengan format yang diinginkan (DD-MM-YYYY)
    const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
    return formattedDate;
}