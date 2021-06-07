import { notification } from 'antd';
import actions from './actions';
import { DataService } from '../../../config/dataService/dataService';

const addNotificationSuccess = () => {
  notification.success({
    message: 'Your Record has been Submited',
  });
};

const addNotificationError = err => {
  notification.error({
    message: err,
  });
};

const deleteNotificationSuccess = () => {
  notification.success({
    message: 'Your Record has been Deleted',
  });
};

const deleteNotificationError = err => {
  notification.error({
    message: err,
  });
};

const updateNotificationSuccess = () => {
  notification.success({
    message: 'Your Record has been updated',
  });
};

const updateNotificationError = err => {
  notification.error({
    message: err,
  });
};

const {
  axiosAddBegin,
  axiosAddSuccess,
  axiosAddErr,

  axiosReadBegin,
  axiosReadSuccess,
  axiosReadErr,

  axiosUpdateBegin,
  axiosUpdateSuccess,
  axiosUpdateErr,

  axiosDeleteBegin,
  axiosDeleteSuccess,
  axiosDeleteErr,

  axiosSingleDataBegin,
  axiosSingleDataSuccess,
  axiosSingleDataErr,

  axiosUploadBegin,
  axiosUploadSuccess,
  axiosUploadErr,
} = actions;

const axiosDataSubmit = data => {
  return async dispatch => {
    try {
      await dispatch(axiosAddBegin());
      const response = await DataService.post('/create', data);
      await dispatch(axiosAddSuccess(response.data.data));
      await addNotificationSuccess();
    } catch (err) {
      await dispatch(axiosAddErr(err));
      await addNotificationError(err);
    }
  };
};

const axiosDataRead = () => {
  return async dispatch => {
    try {
      await dispatch(axiosReadBegin());
      const query = await DataService.get('/view-all');
      await dispatch(axiosReadSuccess(query.data.data));
    } catch (err) {
      await dispatch(axiosReadErr(err));
    }
  };
};

const axiosCrudGetData = () => {
  return async dispatch => {
    try {
      await dispatch(axiosReadBegin());
      const query = await DataService.get('/view-all');
      await dispatch(axiosReadSuccess(query.data.data));
    } catch (err) {
      await dispatch(axiosReadErr(err));
    }
  };
};

const axiosDataSearch = searchItem => {
  return async dispatch => {
    try {
      await dispatch(axiosReadBegin());
      if (searchItem !== '') {
        const query = await DataService.get(`/search/${searchItem}`);
        await dispatch(axiosReadSuccess(query.data.data));
      } else {
        try {
          const query = await DataService.get('/view-all');
          await dispatch(axiosReadSuccess(query.data.data));
        } catch (err) {
          await dispatch(axiosReadErr(err));
        }
      }
    } catch (err) {
      await dispatch(axiosReadErr(err));
    }
  };
};

const axiosDataUpdate = (id, data) => {
  return async dispatch => {
    try {
      await dispatch(axiosUpdateBegin());
      await DataService.post(`/update/${id}`, data);
      await dispatch(axiosUpdateSuccess());
      updateNotificationSuccess();
    } catch (err) {
      await dispatch(axiosUpdateErr(err));
      updateNotificationError(err);
    }
  };
};

const axiosDataDelete = ({ id, getData }) => {
  return async dispatch => {
    try {
      await dispatch(axiosDeleteBegin());
      const data = await DataService.get(`/delete/${id}`);
      await dispatch(axiosDeleteSuccess(data));
      await getData();
      deleteNotificationSuccess();
    } catch (err) {
      await dispatch(axiosDeleteErr(err));
      deleteNotificationError(err);
    }
  };
};

const axiosDataSingle = id => {
  return async dispatch => {
    try {
      await dispatch(axiosSingleDataBegin());
      const query = await DataService.get(`/view/${id}`);
      await dispatch(axiosSingleDataSuccess(query.data.data));
    } catch (err) {
      await dispatch(axiosSingleDataErr(err));
    }
  };
};

const axiosFileUploder = imageAsFile => {
  const data = new FormData();
  data.append('image', imageAsFile);

  return async dispatch => {
    try {
      await dispatch(axiosUploadBegin());
      const query = await DataService.post('/image-upload', data, { 'Content-Type': 'multipart/form-data' });
      dispatch(axiosUploadSuccess(`img/basics/${query.data}`));
    } catch (err) {
      await dispatch(axiosUploadErr(err));
    }
  };
};

const axiosFileClear = () => {
  return async dispatch => {
    try {
      await dispatch(axiosUploadBegin());
      dispatch(axiosUploadSuccess(null));
    } catch (err) {
      await dispatch(axiosUploadErr(err));
    }
  };
};

export {
  axiosDataRead,
  axiosDataSearch,
  axiosDataSubmit,
  axiosFileUploder,
  axiosDataDelete,
  axiosCrudGetData,
  axiosDataSingle,
  axiosDataUpdate,
  axiosFileClear,
};
