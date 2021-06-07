import actions from './actions';
import axios from 'axios';
import { tokenConfig } from '../authentication/actionCreator';


const { getFilesBegin, getFilesSuccess, getFilesErr, addFileBegin, addFileSuccess, addFileErr, setImageBegin, setImageSuccess, setImageErr } = actions;

const getFileList = () => (dispatch, getState) => {
    dispatch(getFilesBegin());

    axios
      .get('http://127.0.0.1:8000/api/files', tokenConfig(getState))
      .then((res) => {
        dispatch(getFilesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getFilesErr(err.response));
      });
};


const getFileById = (id) => (dispatch, getState) => {
  dispatch(setImageBegin());

  axios
    .get(`http://127.0.0.1:8000/api/files/${id}`, tokenConfig(getState))
    .then((res) => {
      console.log(res.data)
      dispatch(setImageSuccess(res.data));
    })
    .catch((err) => {
      dispatch(setImageErr(err.response));
    });
};


const addFileImage = (frm_data) => (dispatch, getState) => {
  dispatch(addFileBegin());
  // Get token from state
  const token = getState().auth.token;
  // Headers
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  axios.post('http://127.0.0.1:8000/api/files/', frm_data, config)
      .then(res => {
        dispatch(addFileSuccess(res.data))
      })
      .catch((err) => {
        dispatch(addFileErr(err.response));
      });
};

export { getFileList, addFileImage, getFileById };
