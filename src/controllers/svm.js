const { Svm } = require("../../models");
const ReadXl = require("../helpers/readxl");
const path = require("path");
const { TestSvm } = require("../helpers/svm");
const fileXl = `../../file/dataTraining.xlsx`

const create = async (req, res) => {
    try {
        const createData = await Svm.create({
            nama: req.body.nama,
            usia: req.body.usia,
            gender: req.body.gender,
            berat: req.body.berat,
            tinggi: req.body.tinggi,
            klasifikasi: await TestSvm([req.body.berat, req.body.tinggi])
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
        const findAll = await Svm.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });
        res.status(200).send({
            status: 1,
            statusCode: 200,
            message: "Get All Data Svm !",
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
        const findAll = await Svm.destroy({
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

const SvmController = {
    create, getAll, deleteData
}

module.exports = SvmController;