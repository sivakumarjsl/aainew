const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERR: 'LOGIN_ERR',

  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERR: 'LOGOUT_ERR',

  REGISTER_BEGIN: 'REGISTER_BEGIN',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_ERR: 'REGISTER_ERR',

  USER_LOADING: 'REGISTER_BEGIN',
  USER_LOADED: 'USER_LOADED',
  AUTH_ERR: 'REGISTER_ERR',

  loginBegin: () => {
    return {
      type: actions.LOGIN_BEGIN,
    };
  },

  loginSuccess: data => {
    return {
      type: actions.LOGIN_SUCCESS,
      data,
    };
  },

  loginErr: err => {
    return {
      type: actions.LOGIN_ERR,
      err,
    };
  },

  logoutBegin: () => {
    return {
      type: actions.LOGOUT_BEGIN,
    };
  },

  logoutSuccess: data => {
    return {
      type: actions.LOGOUT_SUCCESS,
      data,
    };
  },

  logoutErr: err => {
    return {
      type: actions.LOGOUT_ERR,
      err,
    };
  },

  registerBegin: () => {
    return {
      type: actions.REGISTER_BEGIN,
    };
  },

  registerSuccess: data => {
    return {
      type: actions.REGISTER_SUCCESS,
      data,
    };
  },

  registerErr: err => {
    return {
      type: actions.REGISTER_ERR,
      err,
    };
  },

  userLoading: () => {
    return {
      type: actions.USER_LOADING,
    };
  },
  userLoaded: data => {
    return {
      type: actions.USER_LOADED,
      data,
    };
  },

  authErr: err => {
    return {
      type: actions.AUTH_ERR,
      err,
    };
  },
};

export default actions;
