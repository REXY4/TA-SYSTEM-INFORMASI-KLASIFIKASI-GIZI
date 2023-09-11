import { DataTrainingEntity } from "entities/dataTraingin.entity";
import { ResponseEntity } from "entities/response.entity";
import { SvmRequestEntity } from "entities/svm.entity";
import { MapResponse } from "helpers/MapResponse";
import SvmService from "services/svm.service";

const createSvm = async (body: SvmRequestEntity): Promise<ResponseEntity<void>> => MapResponse(
    await SvmService.CreateSvm(body)
)

const getAllDataSvm = async (): Promise<ResponseEntity<Array<DataTrainingEntity>>> => MapResponse(
    await SvmService.getAllDataSvm()
)

const SvmRepositories = {
    createSvm,
    getAllDataSvm
}

export default SvmRepositories;