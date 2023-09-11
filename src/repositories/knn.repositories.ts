import { DataTrainingEntity } from "entities/dataTraingin.entity";
import { KknRequestEntity } from "entities/kkn.entity";
import { ResponseEntity } from "entities/response.entity";
import { MapResponse } from "helpers/MapResponse";
import KnnService from "services/knn.service";

const createKnn = async (body: KknRequestEntity): Promise<ResponseEntity<void>> => MapResponse(
    await KnnService.CreateKnn(body)
)

const getAllDataKnn = async (): Promise<ResponseEntity<Array<DataTrainingEntity>>> => MapResponse(
    await KnnService.getAllDataKnn()
)

const KnnRepositories = {
    createKnn,
    getAllDataKnn
}

export default KnnRepositories;