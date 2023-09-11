import { KknRequestEntity } from 'entities/kkn.entity';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KnnAction } from 'states/actions/knn.action';
import { KnnStoreState } from 'states/reducers/knn.reducers';
import { KnnSettingStore } from 'states/setting-stores/knn.setting.store';
import { AppRootState } from 'states/stores';

const trainingSelector = (state: AppRootState) => state.knn;

const KnnUseCase = (): KnnSettingStore => {
    const { knnData } = useSelector<
        AppRootState,
        KnnStoreState
    >(trainingSelector)
    const dispatch = useDispatch();
    const createKnn = useCallback((body: KknRequestEntity) => KnnAction.createKnn(body)(dispatch), [dispatch])
    const getAllKnn = useCallback(() => KnnAction.getAllDataKnn()(dispatch), [dispatch])
    return {
        knnData,

        createKnn,
        getAllKnn,
    }
}

export default KnnUseCase;