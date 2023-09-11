import { DataTraingingRequestEntity } from 'entities/dataTraingin.entity';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTrainingAction } from 'states/actions/dataTraining.action';
import { DataTrainingStoreState } from 'states/reducers/dataTraining.reducers';
import { DataTrainingStore } from 'states/setting-stores/dataTraining.setting.store';
import { AppRootState } from 'states/stores';

const trainingSelector = (state: AppRootState) => state.training;

const DataTrainingUseCase = (): DataTrainingStore => {
    const { dataTraining } = useSelector<
        AppRootState,
        DataTrainingStoreState
    >(trainingSelector)
    const dispatch = useDispatch();
    const createDataTraining = useCallback((body: DataTraingingRequestEntity) => DataTrainingAction.createDataTraining(body)(dispatch), [dispatch])
    const getAllDataTraining = useCallback(() => DataTrainingAction.getAllDataTraining()(dispatch), [dispatch])
    return {
        dataTraining,

        createDataTraining,
        getAllDataTraining,
    }
}

export default DataTrainingUseCase;