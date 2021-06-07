const actions = {
  
  GET_PROJECTS_BEGIN: 'GET_PROJECTS_BEGIN',
  GET_PROJECTS_SUCCESS: 'GET_PROJECTS_SUCCESS',
  GET_PROJECTS_ERR: 'GET_PROJECTS_ERR',

  CREATE_PROJECT_BEGIN: 'CREATE_PROJECTS_BEGIN',
  CREATE_PROJECT_SUCCESS: 'CREATEPROJECTS_SUCCESS',
  CREATE_PROJECT_ERR: 'CREATE_PROJECTS_ERR',

  DELETE_PROJECT_BEGIN: 'DELETE_PROJECT_BEGIN',
  DELETE_PROJECT_SUCCESS: 'DELETE_PROJECT_SUCCESS',
  DELETE_PROJECT_ERR: 'DELETE_PROJECT_ERR',

  SINGLE_PROJECT_BEGIN: 'SINGLE_PROJECT_BEGIN',
  SINGLE_PROJECT_SUCCESS: 'SINGLE_PROJECT_SUCCESS',
  SINGLE_PROJECT_ERR: 'SINGLE_PROJECT_ERR',

  FILTER_PROJECT_BEGIN: 'FILTER_PROJECT_BEGIN',
  FILTER_PROJECT_SUCCESS: 'FILTER_PROJECT_SUCCESS',
  FILTER_PROJECT_ERR: 'FILTER_PROJECT_ERR',

  SORTING_PROJECT_BEGIN: 'SORTING_PROJECT_BEGIN',
  SORTING_PROJECT_SUCCESS: 'SORTING_PROJECT_SUCCESS',
  SORTING_PROJECT_ERR: 'SORTING_PROJECT_ERR',

  getProjectBegin: () => {
    return {
      type: actions.GET_PROJECTS_BEGIN,
    };
  },

  getProjectSuccess: data => {
    return {
      type: actions.GET_PROJECTS_SUCCESS,
      payload: data,
    };
  },

  getProjectErr: err => {
    return {
      type: actions.GET_PROJECTS_ERR,
      err,
    };
  },

  createProjectBegin: () => {
    return {
      type: actions.CREATE_PROJECT_BEGIN,
    };
  },

  createProjectSuccess: data => {
    return {
      type: actions.CREATE_PROJECT_SUCCESS,
      payload: data,
    };
  },

  createProjectErr: err => {
    return {
      type: actions.CREATE_PROJECT_ERR,
      err,
    };
  },

  deleteProjectBegin: () => {
    return {
      type: actions.DELETE_PROJECT_BEGIN,
    };
  },

  deleteProjectSuccess: data => {
    return {
      type: actions.DELETE_PROJECT_SUCCESS,
      payload: data,
    };
  },

  deleteProjectErr: err => {
    return {
      type: actions.DELETE_PROJECT_ERR,
      err,
    };
  },

  singleProjectBegin: () => {
    return {
      type: actions.SINGLE_PROJECT_BEGIN,
    };
  },

  singleProjectSuccess: data => {
    return {
      type: actions.SINGLE_PROJECT_SUCCESS,
      payload: data,
    };
  },

  singleProjectErr: err => {
    return {
      type: actions.SINGLE_PROJECT_ERR,
      err,
    };
  },

  filterProjectBegin: () => {
    return {
      type: actions.FILTER_PROJECT_BEGIN,
    };
  },

  filterProjectSuccess: data => {
    return {
      type: actions.FILTER_PROJECT_SUCCESS,
      payload: data,
    };
  },

  filterProjectErr: err => {
    return {
      type: actions.FILTER_PROJECT_ERR,
      err,
    };
  },

  sortingProjectBegin: () => {
    return {
      type: actions.SORTING_PROJECT_BEGIN,
    };
  },

  sortingProjectSuccess: data => {
    return {
      type: actions.SORTING_PROJECT_SUCCESS,
      payload: data,
    };
  },

  sortingProjectErr: err => {
    return {
      type: actions.SORTING_PROJECT_ERR,
      err,
    };
  },
};

export default actions;
