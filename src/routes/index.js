const express = require("express");
const UserController = require("../controllers/user");
const DataTrainingController = require("../controllers/dataTraining");
const SvmController = require("../controllers/svm");
const KnnController = require("../controllers/knn");
const router = express.Router();

router.post("/register", UserController.create);
router.post("/login", UserController.login);
router.post("/training", DataTrainingController.create);
router.get("/training", DataTrainingController.getAll);
router.delete("/training/:id", DataTrainingController.deleteData);
router.post("/svm", SvmController.create);
router.get("/svm", SvmController.getAll);
router.delete("/svm/:id", SvmController.deleteData);
router.post("/knn", KnnController.create);
router.get("/knn", KnnController.getAll);
router.delete("/knn/:id", KnnController.deleteData);

module.exports = router;