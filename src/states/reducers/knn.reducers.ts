import { AnyAction } from "redux";
import { KnnActionType } from "states/action-type/knn.action.type";
import { KnnSettingStore } from "states/setting-stores/knn.setting.store";


type KnnStoreState = Omit<
    KnnSettingStore,
    "getAllKnn" |
    "createKnn"
>

const INITIAL_STATE: KnnStoreState = {
    knnData: []
};

const KnnReducers = (state: KnnStoreState = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case KnnActionType.KNN_GET_ALL_DATA:
            return {
                ...state,
                knnData: action.payload
            }
        default:
            return state
    }
};

export default KnnReducers;
export type { KnnStoreState };
