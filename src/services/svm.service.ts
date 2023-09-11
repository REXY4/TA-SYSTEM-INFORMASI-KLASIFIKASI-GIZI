import axios from "axios";
import { SvmRequestEntity } from "entities/svm.entity";

const CreateSvm = async (body: SvmRequestEntity) => {
    const config = {
        headers: {
            "Content-Type": "Application/Json",
            Authorization: `Bearer ${sessionStorage.getItem("_token")}`,

        }
    };

    const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_ADMIN}/svm`, {
        nama: body.nama,
        usia: parseInt(body.usia),
        gender: body.gender,
        berat: parseFloat(body.berat),
        tinggi: parseFloat(body.tinggi),
    }, config);
    return response.data;
}

const getAllDataSvm = async () => {
    const config = {
        headers: {
            "Content-Type": "Application/Json",
            Authorization: `Bearer ${sessionStorage.getItem("_token")}`,
            "ngrok-skip-browser-warning": "69420"
        }
    };
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_ADMIN}/svm`, config);
    return response.data;
}

const SvmService = {
    CreateSvm, getAllDataSvm
}

export default SvmService;