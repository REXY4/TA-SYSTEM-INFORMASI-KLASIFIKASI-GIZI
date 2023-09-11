import { AnyAction } from "redux";
import { SettingActionType } from "states/action-type/setting.action.type";
import { SettingStore } from "states/setting-stores/setting.store";


type SettingStoreState = Omit<
    SettingStore,
    "setLoading" |
    "setPageData" |
    "setAlert"
>

const INITIAL_STATE: SettingStoreState = {
    isLoading: false,
    page: 0,
    count: 0,
    limit: 0,
    search: "",
    email: "",
    alert: {
        message: "",
        status: 0,
        open: false
    }
};

const SettingReducers = (state: SettingStoreState = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case SettingActionType.SETTING_LOADING_PAGE:
            return {
                ...state,
                isLoading: action.payload
            }
        case SettingActionType.SETTING_RESPONSE_PAGE:
            return {
                ...state,
                count: action.count
            }
        case SettingActionType.SETTING_SET_RESPONSE_PAGE:
            return {
                ...state,
                limit: action.limit,
                page: action.page,
            }
        case SettingActionType.SETTING_SET_ALERT:
            return {
                ...state,
                alert: {
                    message: action.message,
                    status: action.status,
                    open: action.open
                }
            }
        default:
            return state
    }
};

export default SettingReducers;
export type { SettingStoreState }