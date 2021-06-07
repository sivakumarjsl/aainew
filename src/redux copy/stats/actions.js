const actions = {

  UPDATE_ALGO_STATS: 'UPDATE_ALGO_STATS',

  updateAlgoStats: data => {
    return {
      type: actions.UPDATE_ALGO_STATS,
      payload: data,
    };
  },

};

export default actions;
