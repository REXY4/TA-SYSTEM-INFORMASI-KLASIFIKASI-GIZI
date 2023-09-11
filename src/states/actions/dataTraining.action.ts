import { DataTraingingRequestEntity } from "entities/dataTraingin.entity";
import { Dispatch } from "redux";
import DataTrainingRepositories from "repositories/dataTraining.repositories";
import { DataTrainingActionType } from "states/action-type/dataTraining-action-types";
import { SettingActionType } from "states/action-type/setting.action.type";

const createDataTraining = (data: DataTraingingRequestEntity) => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_LOADING_PAGE,
        payload: true
    })
    try {
        const response = await DataTrainingRepositories.createDataTraining(data);
        if (response.statusCode == 200) {
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

const getAllDataTraining = () => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_LOADING_PAGE,
        payload: true
    })
    try {
        const response = await DataTrainingRepositories.getAllDataTraining();
        console.log(response)
        if (response.statusCode == 200) {
            dispatch({
                type: SettingActionType.SETTING_LOADING_PAGE,
                payload: false
            })
            dispatch({
                type: DataTrainingActionType.DATA_TRAINGIN_GET_ALL,
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


const DataTrainingAction = {
    createDataTraining, getAllDataTraining

}

export { DataTrainingAction }