// @flow

import type { ThunkAction } from 'redux';

const SET_LOADING: 'SET_LOADING' = 'SET_LOADING';

type SetLoadingAction = {
  type: typeof SET_LOADING,
  status: boolean,
};

function setLoading(status: boolean = true) {
  return {
    type: SET_LOADING,
    status,
  };
}

// redux-thunk example
function handleSetLoading(status: boolean = true): ThunkAction {
  return dispatch => {
    dispatch(setLoading(status));
    return Promise.resolve();
  };
}

export { handleSetLoading, setLoading, SET_LOADING };
export type { SetLoadingAction };
