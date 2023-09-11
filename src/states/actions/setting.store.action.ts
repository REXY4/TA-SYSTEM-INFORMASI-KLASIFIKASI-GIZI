import { Dispatch } from "redux";
import { SettingActionType } from "states/action-type/setting.action.type";

const setLoading = (loading: boolean) => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_LOADING_PAGE,
        payload: loading,
    })
}

const setPageData = (page: number, limit: number) => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_SET_RESPONSE_PAGE,
        page: page,
        limit: limit
    })
}

const setAlert = (message: string, open: boolean, status: number) => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_SET_ALERT,
        message: message,
        open,
        status,
    })
}

const SettingAction = {
    setLoading,
    setPageData,
    setAlert,
}

export { SettingAction }