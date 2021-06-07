import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { HorizontalFormStyleWrap } from './Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';

const HorizontalForm = () => {
  return (
    <BasicFormWrapper>
      <HorizontalFormStyleWrap>
        <Cards title="Horizontal Form">
          <Form name="horizontal-form" layout="horizontal">
            <Row align="middle">
              <Col lg={8} md={9} xs={24}>
                <label htmlFor="name">Name</label>
              </Col>
              <Col lg={16} md={15} xs={24}>
                <Form.Item name="name" initialValue="Duran Clayton">
                  <Input placeholder="Enter Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col lg={8} md={9} xs={24}>
                <label htmlFor="email">Email Address</label>
              </Col>
              <Col lg={16} md={15} xs={24}>
                <Form.Item name="email" initialValue="username@email.com">
                  <Input placeholder="Enter Email" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col lg={8} md={9} xs={24}>
                <label htmlFor="password">Password</label>
              </Col>
              <Col lg={16} md={15} xs={24}>
                <Form.Item name="password" initialValue="1234567">
                  <Input.Password placeholder="Enter Password" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 16, offset: 8 }} md={{ span: 15, offset: 9 }} xs={{ span: 24, offset: 0 }}>
                <div className="sDash_form-action">
                  <Button className="btn-signin" htmlType="submit" type="light" size="large">
                    Cancel
                  </Button>
                  <Button className="btn-signin" type="primary" size="large">
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Cards>
      </HorizontalFormStyleWrap>
    </BasicFormWrapper>
  );
};

export { HorizontalForm };
