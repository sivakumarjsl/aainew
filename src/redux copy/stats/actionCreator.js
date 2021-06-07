import actions from './actions';

const { updateAlgoStats } = actions;

const updateStatistics = (stat_data) => (dispatch) =>{  
  console.log(stat_data);
  dispatch(updateAlgoStats(stat_data));
}


export { updateStatistics };