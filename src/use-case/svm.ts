import { SvmRequestEntity } from 'entities/svm.entity';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SvmAction } from 'states/actions/svm.action';
import { SvmStoreState } from 'states/reducers/svm.reducers';
import { SvmSettingStore } from 'states/setting-stores/svm.setting.store';
import { AppRootState } from 'states/stores';

const trainingSelector = (state: AppRootState) => state.svm;

const SvmUseCase = (): SvmSettingStore => {
    const { svmData } = useSelector<
        AppRootState,
        SvmStoreState
    >(trainingSelector)
    const dispatch = useDispatch();
    const createSvm = useCallback((body: SvmRequestEntity) => SvmAction.createSvm(body)(dispatch), [dispatch])
    const getAllSvm = useCallback(() => SvmAction.getAllDataSvm()(dispatch), [dispatch])
    return {
        svmData,

        createSvm,
        getAllSvm,
    }
}

export default SvmUseCase;