// @flow

import { SET_LOADING } from '../actions/loading';
import type { SetLoadingAction } from '../actions/loading';

function loading(state: boolean = false, action: SetLoadingAction) {
  switch (action.type) {
    case SET_LOADING:
      return action.status;
    default:
      return state;
  }
}

export default loading;
