import actions from './actions';
import axios from 'axios';
import { tokenConfig } from '../authentication/actionCreator';


const {
  
  getProjectBegin,
  getProjectSuccess,
  getProjectErr,

  createProjectBegin,
  createProjectSuccess,
  createProjectErr,

  deleteProjectBegin,
  deleteProjectSuccess,
  deleteProjectErr,

  singleProjectBegin,
  singleProjectSuccess,
  singleProjectErr,

  filterProjectBegin,
  filterProjectSuccess,
  filterProjectErr,

  sortingProjectBegin,
  sortingProjectSuccess,
  sortingProjectErr,
} = actions;

const getProjects = () => (dispatch, getState) => {
  
  dispatch(getProjectBegin());

  axios
    .get('http://127.0.0.1:8000/api/projects', tokenConfig(getState))
    .then((res) => {
      dispatch(getProjectSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProjectErr(err.response));
    });
};

const addProject = (proj_data) => (dispatch, getState) => {
  console.log(proj_data)
  dispatch(createProjectBegin());

  axios
    .post('http://127.0.0.1:8000/api/projects/', proj_data, tokenConfig(getState))
    .then((res) => {
      dispatch(createProjectSuccess(res.data));
    })
    .catch((err) => {
      dispatch(createProjectErr(err.response));
    });
};

const delProject = paramsId => (dispatch, getState) => {
  
  dispatch(deleteProjectBegin());

  axios
    .delete('http://127.0.0.1:8000/api/projects/' + paramsId, tokenConfig(getState))
    .then((res) => {
      dispatch(deleteProjectSuccess(paramsId));
    })
    .catch((err) => {
      dispatch(deleteProjectErr(err.response));
    });

};

const filterSinglePage = paramsId => (dispatch, getState) => {
  
  dispatch(singleProjectBegin());

  axios
    .get('http://127.0.0.1:8000/api/projects/' + paramsId, tokenConfig(getState))
    .then((res) => {
      dispatch(singleProjectSuccess(res.data));
    })
    .catch((err) => {
      dispatch(singleProjectErr(err.response));
    });

};

const filterProjectByStatus = status => (dispatch, getState) => {
  
  dispatch(filterProjectBegin());

  axios
  .get('http://127.0.0.1:8000/api/projects', tokenConfig(getState))
  .then((res) => {
    
    const data = res.data.filter(project => {
      if (status !== 'all') {
        return project.status === status;
      }
      return res.data;
    });
    dispatch(filterProjectSuccess(data));
  })
  .catch((err) => {
    dispatch(filterProjectErr(err.response));
  });
};

const sortingProjectByCategory = sortBy => (dispatch, getState) => {
  
  dispatch(sortingProjectBegin());

  axios
  .get('http://127.0.0.1:8000/api/projects', tokenConfig(getState))
  .then((res) => {
    
    const data = res.data.sort((a, b) => {
      return b[sortBy] - a[sortBy];
    });
    dispatch(sortingProjectSuccess(data));
  })
  .catch((err) => {
    dispatch(sortingProjectErr(err.response));
  });

};

export { getProjects, addProject, delProject, filterSinglePage, filterProjectByStatus, sortingProjectByCategory };
