import actions from './actions';

const {
  taskReadBegin,
  taskReadSuccess,
  taskReadErr,
  starUpdateBegin,
  starUpdateSuccess,
  starUpdateErr,
  completeUpdateBegin,
  completeUpdateSuccess,
  completeUpdateErr,
} = actions;

const taskAddData = data => {
  return async dispatch => {
    try {
      dispatch(taskReadBegin());
      dispatch(taskReadSuccess(data));
    } catch (err) {
      dispatch(taskReadErr(err));
    }
  };
};

const onStarUpdate = (data, id) => {
  return async dispatch => {
    try {
      dispatch(starUpdateBegin());

      data.map(item => {
        if (item.id === id) {
          const fav = item;
          if (fav.favourite) {
            item.favourite = false;
          } else {
            fav.favourite = true;
          }
        }
        return dispatch(starUpdateSuccess(data));
      });
    } catch (err) {
      dispatch(starUpdateErr(err));
    }
  };
};

const onCompleteUpdate = (data, id) => {
  return async dispatch => {
    try {
      dispatch(completeUpdateBegin());

      data.map(item => {
        if (item.id === id) {
          const complete = item;
          if (complete.completed) {
            item.completed = false;
          } else {
            complete.completed = true;
          }
        }
        return dispatch(completeUpdateSuccess(data));
      });
    } catch (err) {
      dispatch(completeUpdateErr(err));
    }
  };
};

const ontaskDelete = data => {
  return async dispatch => {
    try {
      dispatch(taskReadBegin());
      dispatch(taskReadSuccess(data));
    } catch (err) {
      dispatch(taskReadErr(err));
    }
  };
};

const ontaskEdit = data => {
  return async dispatch => {
    try {
      dispatch(taskReadBegin());
      dispatch(taskReadSuccess(data));
    } catch (err) {
      dispatch(taskReadErr(err));
    }
  };
};

export { taskAddData, onStarUpdate, ontaskDelete, onCompleteUpdate, ontaskEdit };
