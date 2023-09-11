import { Dispatch } from "redux";
import AuthRepositories from "repositories/auth.repositories";
import { AuthActionType } from "states/action-type/auth.action-type";
import { SettingActionType } from "states/action-type/setting.action.type";

const login = (email: string, password: string) => async (dispatch: Dispatch) => {
    dispatch({ type: SettingActionType.SETTING_LOADING_PAGE, payload: true });
    try {
        const response = await AuthRepositories.login(email, password);
        if (response.statusCode === 200) {
            // dispatch({ type: SettingActionType.SETTING_LOADING_PAGE, payload: false });
            dispatch({
                type: AuthActionType.AUTH_LOGIN,
                payload: response.data.token
            })
            window.location.href = "/dashboard"
        } else {
            dispatch({ type: SettingActionType.SETTING_LOADING_PAGE, payload: false });
        }
    } catch (err) {
        dispatch({ type: SettingActionType.SETTING_LOADING_PAGE, payload: false });
    }
}

const logout = () => async (dispatch: Dispatch) => {
    dispatch({
        type: SettingActionType.SETTING_LOADING_PAGE,
        payload: true
    })
    dispatch({
        type: AuthActionType.AUTH_LOGOUT,
    });
    window.location.href = "/auth/login"
}



const AuthAction = {
    login, logout
}

export default AuthAction;

