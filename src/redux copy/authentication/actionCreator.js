import actions from './actions';
import axios from 'axios';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr, registerBegin, registerSuccess, registerErr, userLoaded, userLoading, authErr } = actions;

const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch(userLoading());

  axios
    .get('http://localhost:3000/api/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch(userLoaded(res.data));
    })
    .catch((err) => {
      dispatch(authErr(err.response));
    });
};

const login = (username, password) => (dispatch) => {
  console.log('loginpass', username, password)

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  dispatch(loginBegin());  
  axios
    .post('http://localhost:3000/api/auth/login', body, config)
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginErr(err.response));
    });
};


const register = ({name, username, password, email }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({name, username, email, password });

  dispatch(registerBegin());  
  axios
    .post('http://127.0.0.1:8000/api/auth/register', body, config)
    .then((res) => {
      dispatch(registerSuccess(res.data));
    })
    .catch((err) => {
      dispatch(registerErr(err.response.data));
    });
};

const logOut = () => (dispatch, getState) => {
  dispatch(logoutBegin());
  axios
    .post('http://127.0.0.1:8000/api/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch(logoutSuccess(null));
    })
    .catch((err) => {
      dispatch(logoutErr(err.response));
    });
};

const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};

export { login, logOut, register, loadUser, tokenConfig };
