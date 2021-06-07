import actions from './actions';

const {
  AXIOS_ADD_BEGIN,
  AXIOS_ADD_SUCCESS,
  AXIOS_ADD_ERR,

  AXIOS_UPLOAD_BEGIN,
  AXIOS_UPLOAD_SUCCESS,
  AXIOS_UPLOAD_ERR,

  AXIOS_READ_BEGIN,
  AXIOS_READ_SUCCESS,
  AXIOS_READ_ERR,

  AXIOS_UPDATE_BEGIN,
  AXIOS_UPDATE_SUCCESS,
  AXIOS_UPDATE_ERR,

  AXIOS_DELETE_BEGIN,
  AXIOS_DELETE_SUCCESS,
  AXIOS_DELETE_ERR,

  AXIOS_SINGLE_DATA_BEGIN,
  AXIOS_SINGLE_DATA_SUCCESS,
  AXIOS_SINGLE_DATA_ERR,
} = actions;

const initialState = {
  data: [],
  url: null,
  fileLoading: false,
  loading: false,
  error: null,
};

const initialStateSingle = {
  data: null,
  loading: false,
  error: null,
};

const axiosCrudReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case AXIOS_UPLOAD_BEGIN:
      return {
        ...state,
        fileLoading: true,
      };

    case AXIOS_UPLOAD_SUCCESS:
      return {
        ...state,
        url: data,
        error: false,
        fileLoading: false,
      };

    case AXIOS_UPLOAD_ERR:
      return {
        ...state,
        error: err,
        fileLoading: false,
      };

    case AXIOS_ADD_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case AXIOS_ADD_SUCCESS:
      return {
        ...state,
        data,
        error: false,
        loading: false,
      };

    case AXIOS_ADD_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case AXIOS_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case AXIOS_READ_SUCCESS:
      return {
        ...state,
        data,
        error: false,
        loading: false,
      };

    case AXIOS_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case AXIOS_DELETE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case AXIOS_DELETE_SUCCESS:
      return {
        ...state,
        error: false,
        data,
        loading: false,
      };

    case AXIOS_DELETE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case AXIOS_UPDATE_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case AXIOS_UPDATE_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
      };

    case AXIOS_UPDATE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

const axiosSingleCrudReducer = (state = initialStateSingle, action) => {
  const { type, data, err } = action;
  switch (type) {
    case AXIOS_SINGLE_DATA_BEGIN:
      return {
        ...initialStateSingle,
        loading: true,
      };

    case AXIOS_SINGLE_DATA_SUCCESS:
      return {
        ...initialStateSingle,
        data,
        error: false,
        loading: false,
      };

    case AXIOS_SINGLE_DATA_ERR:
      return {
        ...initialStateSingle,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export { axiosCrudReducer, axiosSingleCrudReducer };
