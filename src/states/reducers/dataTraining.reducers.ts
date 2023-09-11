import { AnyAction } from "redux";
import { DataTrainingActionType } from "states/action-type/dataTraining-action-types";
import { DataTrainingStore } from "states/setting-stores/dataTraining.setting.store";


type DataTrainingStoreState = Omit<
    DataTrainingStore,
    "getAllDataTraining" |
    "createDataTraining"
>

const INITIAL_STATE: DataTrainingStoreState = {
    dataTraining: []
};

const DataTrainginReducers = (state: DataTrainingStoreState = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case DataTrainingActionType.DATA_TRAINGIN_GET_ALL:
            console.log("ini check reducer", action.payload)
            return {
                ...state,
                dataTraining: action.payload
            }
        default:
            return state
    }
};

export default DataTrainginReducers;
export type { DataTrainingStoreState };
