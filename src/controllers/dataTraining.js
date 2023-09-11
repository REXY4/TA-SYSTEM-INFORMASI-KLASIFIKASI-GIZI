const { DataTraining } = require("../../models");
const ReadXl = require("../helpers/readxl");
const path = require("path");
const fileXl = `../../file/dataTraining.xlsx`

const create = async (req, res) => {
    try {
        const createData = await DataTraining.create(req.body);
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
        const findAll = await DataTraining.findAll({
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
        const findAll = await DataTraining.destroy({
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

const DataTrainingController = {
    create, getAll, deleteData
}

module.exports = DataTrainingController;