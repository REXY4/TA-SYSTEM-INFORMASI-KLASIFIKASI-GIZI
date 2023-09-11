import { SvmRequestEntity } from "entities/svm.entity";
import { Dispatch } from "redux";
import SvmRepositories from "repositories/svm.repositories";
import { SettingActionType } from "states/action-type/setting.action.type";
import { SvmActionType } from "states/action-type/svm.action.type";

const createSvm = (body: SvmRequestEntity) => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_LOADING_PAGE,
        payload: true
    })
    try {
        const response = await SvmRepositories.createSvm(body);
        if (response.statusCode == 200) {
            dispatch({
                type: SettingActionType.SETTING_SET_ALERT,
                message: response.message,
                status: response.status,
                open: true
            })
            dispatch({
                type: SettingActionType.SETTING_LOADING_PAGE,
                payload: false
            })
        } else {
            dispatch({
                type: SettingActionType.SETTING_SET_ALERT,
                message: response.message,
                status: response.status,
                open: true
            });
            dispatch({
                type: SettingActionType.SETTING_LOADING_PAGE,
                payload: false
            })
        }
    } catch (error) {
        dispatch({
            type: SettingActionType.SETTING_SET_ALERT,
            message: "Menambahkan Data Svm Gagal!",
            status: 0,
            open: true
        })
    }
}


const getAllDataSvm = () => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_LOADING_PAGE,
        payload: true
    })
    try {
        const response = await SvmRepositories.getAllDataSvm();
        if (response.statusCode == 200) {
            dispatch({
                type: SettingActionType.SETTING_LOADING_PAGE,
                payload: false
            })
            dispatch({
                type: SvmActionType.SVM_GET_ALL_DATA,
                payload: response.data
            })
        } else {
            dispatch({
                type: SettingActionType.SETTING_LOADING_PAGE,
                payload: false
            })
            dispatch({
                type: SettingActionType.SETTING_SET_ALERT,
                message: response.message,
                status: response.status,
                open: true
            });
        }
    } catch (err) {
        dispatch({
            type: SettingActionType.SETTING_LOADING_PAGE,
            payload: false
        })
        dispatch({
            type: SettingActionType.SETTING_SET_ALERT,
            message: "Tambah data training gagal !",
            status: 0
        })
    }
}


const SvmAction = {
    createSvm, getAllDataSvm

}

export { SvmAction };
