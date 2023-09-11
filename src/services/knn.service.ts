import axios from "axios";
import { KknRequestEntity } from "entities/kkn.entity";

const CreateKnn = async (body: KknRequestEntity) => {
    const config = {
        headers: {
            "Content-Type": "Application/Json",
            Authorization: `Bearer ${sessionStorage.getItem("_token")}`,

        }
    };
    const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_ADMIN}/knn`, {
        nama: body.nama,
        usia: parseInt(body.usia),
        gender: body.gender,
        berat: parseFloat(body.berat),
        tinggi: parseFloat(body.tinggi),
    }, config);
    return response.data;
}

const getAllDataKnn = async () => {
    const config = {
        headers: {
            "Content-Type": "Application/Json",
            Authorization: `Bearer ${sessionStorage.getItem("_token")}`,
            "ngrok-skip-browser-warning": "69420"
        }
    };
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_ADMIN}/knn`, config);
    return response.data;
}

const KnnService = {
    CreateKnn, getAllDataKnn
}

export default KnnService;