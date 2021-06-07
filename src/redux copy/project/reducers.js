import actions from './actions';

const {
  
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERR,

  DELETE_PROJECT_BEGIN,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_ERR,

  CREATE_PROJECT_BEGIN,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERR,

  SINGLE_PROJECT_BEGIN,
  SINGLE_PROJECT_SUCCESS,
  SINGLE_PROJECT_ERR,

  FILTER_PROJECT_BEGIN,
  FILTER_PROJECT_SUCCESS,
  FILTER_PROJECT_ERR,

  SORTING_PROJECT_BEGIN,
  SORTING_PROJECT_SUCCESS,
  SORTING_PROJECT_ERR,
} = actions;

const initialStateFilter = {
  data: [],
  loading: false,
  error: null,
};

const projectReducer = (state = initialStateFilter, action) => {
  const { type, payload, err } = action;
  switch (type) {
    case GET_PROJECTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case GET_PROJECTS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case FILTER_PROJECT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FILTER_PROJECT_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case FILTER_PROJECT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      case CREATE_PROJECT_BEGIN:
        return {
          ...state,
          loading: true,
        };
      case CREATE_PROJECT_SUCCESS:
        return {
          ...state,
          data: [...state.data,  payload], 
          loading: false,
        };
      case CREATE_PROJECT_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };
    case SORTING_PROJECT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SORTING_PROJECT_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case SORTING_PROJECT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      case DELETE_PROJECT_BEGIN:
        return {
          ...state,
          loading: true,
        };
      case DELETE_PROJECT_SUCCESS:
        return {
          ...state,
          data: state.data.filter(function(item) {
            return item.id !== payload;
          }),
          loading: false,
        };
      case DELETE_PROJECT_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };
    default:
      return state;
  }
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const SingleProjectReducer = (state = initialState, action) => {
  const { type, payload, err } = action;
  switch (type) {
    case SINGLE_PROJECT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case SINGLE_PROJECT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { SingleProjectReducer, projectReducer };
