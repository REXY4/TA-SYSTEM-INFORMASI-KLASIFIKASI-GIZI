import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import AuthAction from "states/actions/auth.action";
import { AuthStoreState } from "states/reducers/aut.reducers";
import { AuthSettingStore } from "states/setting-stores/auth.setting.store";
import { AppRootState } from "states/stores"

const authSelector = (state: AppRootState) => state.user;

const AuthUseCase = (): AuthSettingStore => {
    const { isLogin, user, token } = useSelector<
        AppRootState,
        AuthStoreState>
        (authSelector)
    const dispatch = useDispatch();

    const login = useCallback((email: string, password: string) => AuthAction.login(email, password)(dispatch), [dispatch])
    const logout = useCallback(() => AuthAction.logout()(dispatch), [dispatch])

    return {
        isLogin,
        user,
        token,
        login,
        logout
    }
}

export default AuthUseCase;