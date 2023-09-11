import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingAction } from 'states/actions/setting.store.action';
import { SettingStoreState } from 'states/reducers/setting.reducers';
import { SettingStore } from 'states/setting-stores/setting.store';
import { AppRootState } from 'states/stores';

const settingSelector = (state: AppRootState) => state.setting;

const SettingUseCase = (): SettingStore => {
    const { isLoading, limit, count, page, search, email, alert } = useSelector<
        AppRootState,
        SettingStoreState
    >(settingSelector)
    const dispatch = useDispatch();
    const setLoading = useCallback((loading: boolean) => SettingAction.setLoading(loading)(dispatch), [dispatch])
    const setPageData = useCallback((page: number, limit: number) => SettingAction.setPageData(page, limit)(dispatch), [dispatch])
    const setAlert = useCallback((message: string, open: boolean, status: number) => SettingAction.setAlert(message, open, status)(dispatch), [dispatch])

    return {
        isLoading,
        limit,
        count,
        page,
        search,
        email,
        alert,

        setPageData,
        setLoading,
        setAlert
    }
}

export default SettingUseCase;