import { combineReducers } from "redux";
import UserReducers from './aut.reducers';
import SettingReducers from "./setting.reducers";
import DataTrainginReducers from "./dataTraining.reducers";
import SvmReducers from "./svm.reducers";
import KnnReducers from "./knn.reducers";

const reducer = combineReducers({
    user: UserReducers,
    setting: SettingReducers,
    training: DataTrainginReducers,
    svm: SvmReducers,
    knn: KnnReducers
});

export default reducer;

