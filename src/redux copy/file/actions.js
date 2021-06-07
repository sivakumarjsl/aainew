const actions = {

  ADD_FILE_BEGIN: 'ADD_FILE_BEGIN',
  ADD_FILE_SUCCESS: 'ADD_FILE_SUCCESS',
  ADD_FILE_ERR: 'ADD_FILE_ERR',
  
  GET_FILES_BEGIN: 'GET_FILES_BEGIN',
  GET_FILES_SUCCESS: 'GET_FILES_SUCCESS',
  GET_FILES_ERR: 'GET_FILES_ERR',

  SET_IMAGE_BEGIN: 'SET_IMAGE_BEGIN',
  SET_IMAGE_SUCCESS: 'SET_IMAGE_SUCCESS',
  SET_IMAGE_ERR: 'SET_IMAGE_ERR',

  getFilesBegin: () => {
    return {
      type: actions.GET_FILES_BEGIN,
    };
  },

  getFilesSuccess: data => {
    return {
      type: actions.GET_FILES_SUCCESS,
      payload: data,
    };
  },

  getFilesErr: err => {
    return {
      type: actions.GET_FILES_ERR,
      err,
    };
  },
  
  addFileBegin: () => {
    return {
      type: actions.ADD_FILE_BEGIN,
    };
  },

  addFileSuccess: data => {
    return {
      type: actions.ADD_FILE_SUCCESS,
      payload: data,
    };
  },

  addFileErr: err => {
    return {
      type: actions.ADD_FILE_ERR,
      err,
    };
  },
  
  setImageBegin: () => {
    return {
      type: actions.SET_IMAGE_BEGIN,
    };
  },

  setImageSuccess: data => {
    return {
      type: actions.SET_IMAGE_SUCCESS,
      payload: data,
    };
  },

  setImageErr: err => {
    return {
      type: actions.SET_IMAGE_ERR,
      err,
    };
  },

};

export default actions;
