import {combineReducers} from 'redux';

import {app} from './appReducer';
import {info} from './infoReducer';

const Reducers = combineReducers({
  app,
  info,
});

export default Reducers;
