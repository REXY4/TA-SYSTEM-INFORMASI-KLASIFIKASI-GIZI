const { Knn } = require("../../models");
const { TestKNN } = require("../helpers/knn");


const create = async (req, res) => {
    try {
        const createData = await Knn.create({
            nama: req.body.nama,
            usia: req.body.usia,
            gender: req.body.gender,
            berat: req.body.berat,
            tinggi: req.body.tinggi,
            klasifikasi: await TestKNN([req.body.usia, req.body.berat, req.body.tinggi], 1)
        });
        res.status(200).send({
            status: 1,
            statusCode: 200,
            message: "Data Training berhasil di tambahkan !",
            data: createData,
        })
    } catch (err) {
        res.status(500).send({
            status: 0,
            statusCode: 500,
            message: err.message,
        })
    }
}

const getAll = async (req, res) => {
    try {
        const findAll = await Knn.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });
        res.status(200).send({
            status: 1,
            statusCode: 200,
            message: "Data Training berhasil di tambahkan !",
            data: findAll,
        })
    } catch (err) {
        res.status(500).send({
            status: 0,
            statusCode: 500,
            message: err.message,
        })
    }
}

const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const findAll = await Knn.destroy({
            where: { id: id }
        });
        res.status(200).send({
            status: 1,
            statusCode: 200,
            message: "Delete Data Success !",
            data: findAll,
        })
    } catch (err) {
        res.status(500).send({
            status: 0,
            statusCode: 500,
            message: err.message,
        })
    }
}

const KnnController = {
    create, getAll, deleteData
}

module.exports = KnnController;