import { AnyAction } from "redux";
import { SvmActionType } from "states/action-type/svm.action.type";
import { SvmSettingStore } from "states/setting-stores/svm.setting.store";


type SvmStoreState = Omit<
    SvmSettingStore,
    "getAllSvm" |
    "createSvm"
>

const INITIAL_STATE: SvmStoreState = {
    svmData: []
};

const SvmReducers = (state: SvmStoreState = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case SvmActionType.SVM_GET_ALL_DATA:
            return {
                ...state,
                svmData: action.payload
            }
        default:
            return state
    }
};

export default SvmReducers;
export type { SvmStoreState };
