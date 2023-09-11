import { DataTrainingEntity } from "entities/dataTraingin.entity";
import { KknRequestEntity } from "entities/kkn.entity";
import { ResponseEntity } from "entities/response.entity";

interface KnnSettingStore {
    knnData: Array<DataTrainingEntity> | []

    getAllKnn(): Promise<ResponseEntity<Array<DataTrainingEntity>> | void>
    createKnn(body: KknRequestEntity): Promise<ResponseEntity<void> | void>
}

export type { KnnSettingStore };
