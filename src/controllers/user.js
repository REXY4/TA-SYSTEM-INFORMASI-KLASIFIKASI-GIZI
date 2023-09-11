const { Users } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create = async (req, res) => {
    try {
        const schema = joi.object({
            name: joi.string().min(3).max(20).required(),
            username: joi.string().min(3).max(20).required(),
            email: joi.string().email().min(3).max(20).required(),
            password: joi.string().min(8).required()
        })
        const findUser = await Users.findOne({
            where: { username: req.body.username }
        });
        if (findUser) {
            return res.status(400).send({
                status: 0,
                statusCode: 400,
                message: "User sudah terdaftar!"
            })
        }
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).send({
                status: 0,
                statusCode: 400,
                message: error.details[0].message
            })
        }
        const saltRound = 10;
        const passwordHash = await bcrypt.hash(req.body.password, saltRound);
        const createData = await Users.create({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: passwordHash,
        });
        res.status(200).send({
            status: 0,
            statusCode: 200,
            message: "create user success!",
            data: createData
        })
    } catch (error) {
        res.status(500).send({
            status: 0,
            statusCode: 500,
            message: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const findUser = await Users.findOne({
            where: { username: username },
        });
        if (!findUser) {
            return res.status(400).send({
                status: 0,
                statusCode: 400,
                message: "User tidak di temukan !"
            })
        }
        const isValid = await bcrypt.compare(password, findUser.password);
        if (!isValid) {
            return res.status(400).send({
                status: 0,
                statusCode: 400,
                message: "Email & Password dont match!"
            })
        }
        const token = jwt.sign({ id: findUser.id }, process.env.SECRET_KEY);
        const findAgain = await Users.findOne({
            where: { id: findUser.id },
            attributes: {
                exclude: ["createdAt", "updatedAt", "password"]
            }
        })
        res.status(200).send({
            status: 0,
            statusCode: 200,
            message: "Login Success !",
            data: {
                ...findAgain.get({ plain: true }),
                token
            },
        })
    } catch (err) {
        res.status(500).send({
            status: 0,
            statusCode: 500,
            message: err.message
        })
    }
}


const UserController = {
    create, login
}

module.exports = UserController;