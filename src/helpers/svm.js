const { DataTraining } = require("../../models");
const SVM = require('ml-svm');
const { Matrix, } = require('ml-matrix');


const TestSvm = async (testData) => {
    const findTraining = await DataTraining.findAll();
    let trainingData = [];
    await findTraining.map((item) => {
        trainingData.push({
            features: [item.berat, item.tinggi],
            label: item.klasifikasi == "Gizi Baik" ? 1 : item.klasifikasi == "Gizi Kurang" ? -1 : 0
        })
    });
    // const trainingData = [
    //     { features: [1, 5, 50], label: 0 }, // Contoh data balita 1 (fitur: [usia, berat badan, tinggi badan], label: 0)
    //     { features: [2, 6, 55], label: 1 }, // Contoh data balita 2 (fitur: [usia, berat badan, tinggi badan], label: 1)
    //     // Tambahkan lebih banyak data pelatihan di sini
    // ];

    // Memisahkan fitur dan label
    const features = trainingData.map((sample) => sample.features);
    const labels = trainingData.map((sample) => sample.label);

    // Membuat model SVM
    const clf = new SVM(
        {
            C: 1.0, // Parameter C
            tol: 0.001, // Toleransi
            maxPasses: 10, // Maksimum iterasi
            kernel: 'rbf', // Gunakan 'rbf' untuk RBF
            kernelOptions: {
                sigma: 0.5, // Parameter sigma untuk kernel RBF
            }
        });
    // C: 0.01,
    // tol: 10e-4,
    // maxPasses: 10,
    // maxIterations: 10000,
    // kernel: 'rbf',
    // kernelOptions: {
    //     sigma: 0.5
    // }
    // });
    // Melatih model SVM dengan data pelatihan
    const X = new Matrix(features);
    const y = labels; // Gunakan array biasa untuk label
    clf.train(X, y);

    // Data yang akan diuji (gantilah dengan data yang sesuai)
    // Contoh data balita yang akan diuji

    // Melakukan prediksi dengan model SVM
    const predictedLabel = clf.predict(new Matrix([testData]));

    function getStatusGizi(label) {
        switch (label) {
            case -1:
                return "Gizi Kurang";
            case 1:
                return "Gizi Baik";
            // case 2:
            //     return "Gizi Berlebih";
            default:
                return "Tidak Ditemukan";
        }
    }
    // return getStatusGizi(predictedLabel[0])
    return getStatusGizi(predictedLabel[0]);
}

module.exports = { TestSvm }