import { DataTrainingEntity } from "entities/dataTraingin.entity";
import { ResponseEntity } from "entities/response.entity";
import { SvmRequestEntity } from "entities/svm.entity";

interface SvmSettingStore {
    svmData: Array<DataTrainingEntity> | []

    getAllSvm(): Promise<ResponseEntity<Array<DataTrainingEntity>> | void>
    createSvm(body: SvmRequestEntity): Promise<ResponseEntity<void> | void>
}

export type { SvmSettingStore };
