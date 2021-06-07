import actions from './actions';

const { UPDATE_ALGO_STATS } = actions;

const initialState = {
  data: {
    processed: 0,
    expected: 0,
    last: 0,
  },
  loading: false,
  error: null,
};

const statsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_ALGO_STATS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    default:
      return state;
  };
};

export { statsReducer };