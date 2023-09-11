import axios from "axios";
import { DataTraingingRequestEntity } from "entities/dataTraingin.entity";

const createDataTraining = async (body: DataTraingingRequestEntity) => {
    const config = {
        headers: {
            "Content-Type": "Application/Json",
            Authorization: `Bearer ${sessionStorage.getItem("_token")}`,
        }
    };
    const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_ADMIN}/training`, {
        nama: body.nama,
        usia: parseInt(body.usia),
        gender: body.gender,
        berat: parseFloat(body.berat),
        tinggi: parseFloat(body.tinggi),
        klasifikasi: body.klasifikasi
    }, config);
    return response.data;
}

const getAllDataTraining = async () => {
    const config = {
        headers: {
            "Content-Type": "Application/Json",
            Authorization: `Bearer ${sessionStorage.getItem("_token")}`,
            "ngrok-skip-browser-warning": "69420"
        }
    };
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_ADMIN}/training`, config);
    return response.data;
}

const DataTrainginService = {
    createDataTraining, getAllDataTraining
}

export default DataTrainginService;