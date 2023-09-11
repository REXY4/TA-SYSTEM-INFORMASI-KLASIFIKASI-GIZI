import { KknRequestEntity } from "entities/kkn.entity";
import { Dispatch } from "redux";
import KnnRepositories from "repositories/knn.repositories";
import { KnnActionType } from "states/action-type/knn.action.type";
import { SettingActionType } from "states/action-type/setting.action.type";


const createKnn = (body: KknRequestEntity) => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_LOADING_PAGE,
        payload: true
    })
    try {
        const response = await KnnRepositories.createKnn(body);
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
            message: "Menambahkan Data Knn Gagal!",
            status: 0,
            open: true
        })
    }
}

const getAllDataKnn = () => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_LOADING_PAGE,
        payload: true
    })
    try {
        const response = await KnnRepositories.getAllDataKnn();
        if (response.statusCode == 200) {
            dispatch({
                type: SettingActionType.SETTING_LOADING_PAGE,
                payload: false
            })
            dispatch({
                type: KnnActionType.KNN_GET_ALL_DATA,
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


const KnnAction = {
    createKnn, getAllDataKnn

}

export { KnnAction };
