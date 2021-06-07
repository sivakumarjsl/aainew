const actions = {
  AXIOS_ADD_BEGIN: 'AXIOS_ADD_BEGIN',
  AXIOS_ADD_SUCCESS: 'AXIOS_ADD_SUCCESS',
  AXIOS_ADD_ERR: 'AXIOS_ADD_ERR',

  AXIOS_READ_BEGIN: 'AXIOS_READ_BEGIN',
  AXIOS_READ_SUCCESS: 'AXIOS_READ_SUCCESS',
  AXIOS_READ_ERR: 'AXIOS_READ_ERR',

  AXIOS_UPDATE_BEGIN: 'AXIOS_UPDATE_BEGIN',
  AXIOS_UPDATE_SUCCESS: 'AXIOS_UPDATE_SUCCESS',
  AXIOS_UPDATE_ERR: 'AXIOS_UPDATE_ERR',

  AXIOS_DELETE_BEGIN: 'AXIOS_DELETE_BEGIN',
  AXIOS_DELETE_SUCCESS: 'AXIOS_DELETE_SUCCESS',
  AXIOS_DELETE_ERR: 'AXIOS_DELETE_ERR',

  AXIOS_SINGLE_DATA_BEGIN: 'AXIOS_SINGLE_DATA_BEGIN',
  AXIOS_SINGLE_DATA_SUCCESS: 'AXIOS_SINGLE_DATA_SUCCESS',
  AXIOS_SINGLE_DATA_ERR: 'AXIOS_SINGLE_DATA_ERR',

  AXIOS_UPLOAD_BEGIN: 'AXIOS_UPLOAD_BEGIN',
  AXIOS_UPLOAD_SUCCESS: 'AXIOS_UPLOAD_SUCCESS',
  AXIOS_UPLOAD_ERR: 'AXIOS_UPLOAD_ERR',

  axiosUploadBegin: () => {
    return {
      type: actions.AXIOS_UPLOAD_BEGIN,
    };
  },

  axiosUploadSuccess: data => {
    return {
      type: actions.AXIOS_UPLOAD_SUCCESS,
      data,
    };
  },

  axiosUploadErr: err => {
    return {
      type: actions.AXIOS_UPLOAD_ERR,
      err,
    };
  },

  axiosAddBegin: () => {
    return {
      type: actions.AXIOS_ADD_BEGIN,
    };
  },

  axiosAddSuccess: data => {
    return {
      type: actions.AXIOS_ADD_SUCCESS,
      data,
    };
  },

  axiosAddErr: err => {
    return {
      type: actions.AXIOS_ADD_ERR,
      err,
    };
  },

  axiosReadBegin: () => {
    return {
      type: actions.AXIOS_READ_BEGIN,
    };
  },

  axiosReadSuccess: data => {
    return {
      type: actions.AXIOS_READ_SUCCESS,
      data,
    };
  },

  axiosReadErr: err => {
    return {
      type: actions.AXIOS_READ_ERR,
      err,
    };
  },

  axiosUpdateBegin: () => {
    return {
      type: actions.AXIOS_UPDATE_BEGIN,
    };
  },

  axiosUpdateSuccess: data => {
    return {
      type: actions.AXIOS_UPDATE_SUCCESS,
      data,
    };
  },

  axiosUpdateErr: err => {
    return {
      type: actions.AXIOS_UPDATE_ERR,
      err,
    };
  },

  axiosDeleteBegin: () => {
    return {
      type: actions.AXIOS_DELETE_BEGIN,
    };
  },

  axiosDeleteSuccess: data => {
    return {
      type: actions.AXIOS_DELETE_SUCCESS,
      data,
    };
  },

  axiosDeleteErr: err => {
    return {
      type: actions.AXIOS_DELETE_ERR,
      err,
    };
  },

  axiosSingleDataBegin: () => {
    return {
      type: actions.AXIOS_SINGLE_DATA_BEGIN,
    };
  },

  axiosSingleDataSuccess: data => {
    return {
      type: actions.AXIOS_SINGLE_DATA_SUCCESS,
      data,
    };
  },

  axiosSingleDataErr: err => {
    return {
      type: actions.AXIOS_SINGLE_DATA_ERR,
      err,
    };
  },
};

export default actions;
