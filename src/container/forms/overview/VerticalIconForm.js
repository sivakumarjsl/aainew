import React from 'react';
import { Form, Input, Button } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { VerticalFormStyleWrap } from './Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';

const VerticalIconForm = () => {
  return (
    <BasicFormWrapper>
      <VerticalFormStyleWrap>
        <Cards title="Vertical Form With Icons">
          <Form name="login" layout="vertical">
            <Form.Item name="name" initialValue="Duran Clayton" label="Name">
              <Input prefix={<FeatherIcon icon="user" size={14} />} />
            </Form.Item>
            <Form.Item name="email" initialValue="username@email.com" label="Email Address">
              <Input prefix={<FeatherIcon icon="mail" size={14} />} placeholder="Enter Email" />
            </Form.Item>
            <Form.Item name="password" initialValue="1234567" label="Password">
              <Input.Password prefix={<FeatherIcon icon="lock" size={14} />} />
            </Form.Item>
            <div className="sDash_form-action">
              <Button className="btn-signin" htmlType="submit" type="light" size="large">
                Cancel
              </Button>
              <Button className="btn-signin" type="primary" size="large">
                Save
              </Button>
            </div>
          </Form>
        </Cards>
      </VerticalFormStyleWrap>
    </BasicFormWrapper>
  );
};

export { VerticalIconForm };
