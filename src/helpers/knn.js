const { DataTraining } = require("../../models");
const KNN = require('ml-knn');

const TestKNN = async (testData, k) => {
    const findTraining = await DataTraining.findAll();
    let trainingData = [];
    let labels = [];

    // Menyiapkan data pelatihan dari database
    await findTraining.map((item) => {
        trainingData.push([item.usia, item.berat, item.tinggi]);
        labels.push(item.klasifikasi == "Gizi Baik" ? 1 : item.klasifikasi == "Gizi Kurang" ? 0 : item.klasifikasi === "Gizi Berlebih" ? 2 : 3);
    });

    // Membuat model k-NN dengan nilai k yang diberikan
    const knn = new KNN(trainingData, labels, { k });

    // Melakukan prediksi dengan model k-NN
    const predictedLabel = knn.predict([testData]);

    function getStatusGizi(label) {
        switch (label) {
            case 0:
                return "Gizi Kurang";
            case 1:
                return "Gizi Baik";
            case 2:
                return "Gizi Berlebih";
            default:
                return "Tidak Ditemukan";
        }
    }

    // Mengembalikan status gizi yang diprediksi
    return getStatusGizi(predictedLabel[0]);
    // return knn.toJSON()
}

module.exports = { TestKNN };
