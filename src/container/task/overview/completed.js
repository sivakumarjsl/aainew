import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox, Input, Form, Modal } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Button } from '../../../components/buttons/buttons';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { BasicFormWrapper } from '../../styled';
import { TaskListWrap } from '../style';
import { onStarUpdate, ontaskDelete, onCompleteUpdate, ontaskEdit } from '../../../redux/task/actionCreator';

const Completed = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const task = useSelector(state => state.Task.data);
  const [state, setState] = useState({
    visible: false,
    taskEditId: '',
    editableItem: {},
  });

  const showModal = (id, item) => {
    setState({
      ...state,
      taskEditId: id,
      visible: true,
      editableItem: item,
    });
  };

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const { taskEditId, editableItem, visible } = state;
  const handleTaskDelete = id => {
    const value = task.filter(item => item.id !== id);
    dispatch(ontaskDelete(value));
  };

  const onEditHandle = (data, id) => {
    const updatedData = task.map(item => {
      if (item.id === id) {
        // eslint-disable-next-line no-param-reassign
        item = data;
        return item;
      }
      return item;
    });
    setState({
      ...state,
      visible: false,
    });
    dispatch(ontaskEdit(updatedData));
  };
  useEffect(() => {
    if (visible) {
      form.setFieldsValue(editableItem);
    }
  }, [form, editableItem, visible]);
  return (
    <TaskListWrap className="mb-30">
      <div className="sDash_tasklist-wrap">
        <div className="sDash_tasklist-head">
          <h2 className="sDash_task-list-title">Task Lists</h2>
        </div>
        <div className="sDash_tasklist-body">
          {task.filter(item => item.completed).length > 0 ? (
            <ul className="sDash_tasks">
              {task
                .sort((a, b) => b.id - a.id)
                .filter(item => item.completed)
                .map((value, i) => {
                  return (
                    <li className="sDash_tasks-item" key={i}>
                      <div className="sDash_tasks-item__content">
                        <div className="sDash_tasks-item__title">
                          <Checkbox
                            checked={!!value.completed}
                            onChange={() => dispatch(onCompleteUpdate(task, value.id))}
                          >
                            {value.title}
                          </Checkbox>
                        </div>
                        <div className="sDash_tasks-item__text">
                          <p>{value.description}</p>
                        </div>
                      </div>
                      <div className="sDash_tasks-item__action">
                        <Link
                          to="#"
                          className={`${value.favourite ? 'task-favourite active' : 'task-favourite'}`}
                          onClick={() => dispatch(onStarUpdate(task, value.id))}
                        >
                          <FeatherIcon icon="star" size={14} />
                        </Link>
                        <Dropdown
                          content={
                            <>
                              <Link to="#" onClick={() => showModal(value.id, value)}>
                                <FeatherIcon icon="edit" size={14} />
                                <span>Edit</span>
                              </Link>
                              <Link to="#" onClick={() => handleTaskDelete(value.id)}>
                                <FeatherIcon icon="trash-2" size={14} />
                                <span>Delete</span>
                              </Link>
                            </>
                          }
                        >
                          <Link to="#">
                            <FeatherIcon icon="more-vertical" size={18} />
                          </Link>
                        </Dropdown>
                      </div>
                    </li>
                  );
                })}
            </ul>
          ) : (
            <div className="sDash_empty-task">
              <span>Sorry! No Completed Task Found :(</span>
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Edit Task"
        className="sDash_addTask-modal"
        type={state.modalType}
        visible={state.visible}
        footer={null}
        onCancel={handleCancel}
        forceRender
      >
        <div className="sDash_addTask-modal-inner">
          {task
            .filter(item => item.id === taskEditId)
            .map((value, i) => {
              return (
                <BasicFormWrapper key={i}>
                  <Form form={form} name="add-task" onFinish={eData => onEditHandle(eData, value.id)}>
                    <Form.Item hidden="true" name="id" initialValue={value.id} />
                    <Form.Item rules={[{ required: true, message: 'Please add a Title' }]} initialValue={value.title}>
                      <Input placeholder="Title" />
                    </Form.Item>

                    <Form.Item initialValue={value.description}>
                      <Input.TextArea rows={4} placeholder="Add Description" />
                    </Form.Item>
                    <Form.Item hidden="true" name="favourite" initialValue={value.favourite}>
                      <Input />
                    </Form.Item>
                    <Form.Item hidden="true" name="completed" initialValue={value.completed}>
                      <Input />
                    </Form.Item>
                    <div className="sDash-modal-actions">
                      <Button size="small" type="white" key="cancel" outlined onClick={handleCancel}>
                        Cancel
                      </Button>
                      <Button htmlType="submit" size="small" type="primary" key="submit">
                        Edit
                      </Button>
                    </div>
                  </Form>
                </BasicFormWrapper>
              );
            })}
        </div>
      </Modal>
    </TaskListWrap>
  );
};

export default Completed;
