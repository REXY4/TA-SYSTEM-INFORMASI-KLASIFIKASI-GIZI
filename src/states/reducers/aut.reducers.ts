import { AnyAction } from "redux";
import { AuthActionType } from "states/action-type/auth.action-type";
import { AuthSettingStore } from "states/setting-stores/auth.setting.store";


type AuthStoreState = Omit<
    AuthSettingStore,
    "login" |
    "logout"
>

const INITIAL_STATE: AuthStoreState = {
    isLogin: false,
    user: null,
    token: ""
};

const UserReducers = (state: AuthStoreState = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case AuthActionType.AUTH_LOGIN:
            sessionStorage.setItem("_token", action.payload.token);
            return {
                ...state,
                isLogin: true,
                user: action.payload,
                token: action.payload.token
            }
        case AuthActionType.AUTH_LOGOUT:
            sessionStorage.clear();
            return {
                ...state,
                isLogin: false,
                user: null,
                token: ""
            }
        default:
            return state
    }
};

export default UserReducers;
export type { AuthStoreState }