import { combineReducers } from 'redux';
import { readMessageReducer } from './message/reducers';
import { readNotificationReducer } from './notification/reducers';
import authReducer from './authentication/reducers';
import { projectReducer, SingleProjectReducer } from './project/reducers';
import { listFileReducer, selectImageReducer } from './file/reducers';
import chartContentReducer from './chartContent/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import { userReducer } from './users/reducers';
import { headerSearchReducer } from './headerSearch/reducers';
import { statsReducer } from './stats/reducers';

const rootReducers = combineReducers({
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  projects: projectReducer,
  project: SingleProjectReducer,
  files: listFileReducer,
  selImage: selectImageReducer,
  chartContent: chartContentReducer,
  users: userReducer,
  auth: authReducer,
  stats: statsReducer,
  ChangeLayoutMode,
});

export default rootReducers;
