import { DataTraingingRequestEntity, DataTrainingEntity } from "entities/dataTraingin.entity";
import { ResponseEntity } from "entities/response.entity";

interface DataTrainingStore {
    dataTraining: Array<DataTrainingEntity> | []

    getAllDataTraining(): Promise<ResponseEntity<Array<DataTrainingEntity>> | void>
    createDataTraining(body: DataTraingingRequestEntity): Promise<ResponseEntity<void> | void>
}

export type { DataTrainingStore }