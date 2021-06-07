const actions = {
  TASK_READ_BEGIN: 'TASK_READ_BEGIN',
  TASK_READ_SUCCESS: 'TASK_READ_SUCCESS',
  TASK_READ_ERR: 'TASK_READ_ERR',

  TASK_STAR_UPDATE_BEGIN: 'TASK_STAR_UPDATE_BEGIN',
  TASK_STAR_UPDATE_SUCCESS: 'TASK_STAR_UPDATE_SUCCESS',
  TASK_STAR_UPDATE_ERR: 'TASK_STAR_UPDATE_ERR',

  TASK_COMPLETE_UPDATE_BEGIN: 'TASK_COMPLETE_UPDATE_BEGIN',
  TASK_COMPLETE_UPDATE_SUCCESS: 'TASK_COMPLETE_UPDATE_SUCCESS',
  TASK_COMPLETE_UPDATE_ERR: 'TASK_COMPLETE_UPDATE_ERR',

  starUpdateBegin: () => {
    return {
      type: actions.TASK_STAR_UPDATE_BEGIN,
    };
  },

  starUpdateSuccess: data => {
    return {
      type: actions.TASK_STAR_UPDATE_SUCCESS,
      data,
    };
  },

  starUpdateErr: err => {
    return {
      type: actions.TASK_STAR_UPDATE_ERR,
      err,
    };
  },
  completeUpdateBegin: () => {
    return {
      type: actions.TASK_STAR_UPDATE_BEGIN,
    };
  },

  completeUpdateSuccess: data => {
    return {
      type: actions.TASK_STAR_UPDATE_SUCCESS,
      data,
    };
  },

  completeUpdateErr: err => {
    return {
      type: actions.TASK_STAR_UPDATE_ERR,
      err,
    };
  },
  taskReadBegin: () => {
    return {
      type: actions.TASK_READ_BEGIN,
    };
  },

  taskReadSuccess: data => {
    return {
      type: actions.TASK_READ_SUCCESS,
      data,
    };
  },

  taskReadErr: err => {
    return {
      type: actions.TASK_READ_ERR,
      err,
    };
  },
  taskDeleteBegin: () => {
    return {
      type: actions.TASK_DELETE_BEGIN,
    };
  },

  taskDeleteSuccess: data => {
    return {
      type: actions.TASK_DELETE_SUCCESS,
      data,
    };
  },

  taskDeleteErr: err => {
    return {
      type: actions.TASK_DELETE_ERR,
      err,
    };
  },
};

export default actions;
