import actions from './actions';

const { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR, LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR, REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_ERR, USER_LOADED, USER_LOADING, AUTH_ERR } = actions;

const initState = {
  // login: Cookies.get('logedIn'),
  loading: false,
  error: null,
  isAuthenticated: null,
  user: null,
  token: localStorage.getItem('token'),
};

/**
 *
 * @todo impure state mutation/explaination
 */
const AuthReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case USER_LOADING:
    case LOGIN_BEGIN:
    case REGISTER_BEGIN:
    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: data,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', data.token);
      return {
        ...state,
        ...data,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT_SUCCESS:
    case LOGIN_ERR:
    case LOGOUT_ERR:
    case REGISTER_ERR:
    case AUTH_ERR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};
export default AuthReducer;
