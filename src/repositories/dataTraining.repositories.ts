import { DataTraingingRequestEntity, DataTrainingEntity } from "entities/dataTraingin.entity";
import { ResponseEntity } from "entities/response.entity";
import { MapResponse } from "helpers/MapResponse";
import DataTrainginService from "services/dataTraining.service";

const createDataTraining = async (body: DataTraingingRequestEntity): Promise<ResponseEntity<void>> => MapResponse(
    await DataTrainginService.createDataTraining(body)
)

const getAllDataTraining = async (): Promise<ResponseEntity<Array<DataTrainingEntity>>> => MapResponse(
    await DataTrainginService.getAllDataTraining()
)

const DataTrainingRepositories = {
    createDataTraining,
    getAllDataTraining
}

export default DataTrainingRepositories;