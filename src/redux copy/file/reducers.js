import actions from './actions';

const { GET_FILES_BEGIN, GET_FILES_SUCCESS, GET_FILES_ERR, ADD_FILE_BEGIN, ADD_FILE_SUCCESS, ADD_FILE_ERR, SET_IMAGE_BEGIN, SET_IMAGE_SUCCESS, SET_IMAGE_ERR } = actions;

const initialFileState = {
  data: {
    userimage: 'http://127.0.0.1:8000/media/static/noimage.png',
    rawimage: '',
    maskimage: '', 
  },
  loading: false,
  error: null,
};

const selectImageReducer = (state = initialFileState, action) => {
  const { type, payload, err } = action;
  switch (type) {
    case SET_IMAGE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SET_IMAGE_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case SET_IMAGE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }

}

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const listFileReducer = (state = initialState, action) => {
  const { type, payload, err } = action;
  switch (type) {
    case GET_FILES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_FILES_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case GET_FILES_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      case ADD_FILE_BEGIN:
        return {
          ...state,
          loading: true,
        };
      case ADD_FILE_SUCCESS:
        return {
          ...state,
          data: [...state.data,  payload], 
          loading: false,
        };
      case ADD_FILE_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };
    default:
      return state;
  }
};

export { listFileReducer, selectImageReducer };
