/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Row, Col, Form, Input, DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import { HorizontalFormStyleWrap } from './Style';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';

const InputForm = () => {
  return (
    <BasicFormWrapper>
      <HorizontalFormStyleWrap className="sDash_input-form">
        <Cards title="Basic Inputs">
          <Form name="input-form" layout="horizontal">
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="input-text">Text</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-text">
                  <Input placeholder="Duran Clayton" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="email">Email Address</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-email">
                  <Input placeholder="username@email.com" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="input-url">URL</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-url">
                  <Input placeholder="https://strikingdash-react-admin-dashboard-template" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="input-phone">Phone</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-phone">
                  <Input placeholder="017123456789" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="pass">Password</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-pass">
                  <Input.Password placeholder="Enter Password" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="input-number">Number</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-number">
                  <Input placeholder="123" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="input-date">Date</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-date">
                  <DatePicker />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="input-month">Month</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-month">
                  <DatePicker picker="month" />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="input-time">Time</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-time" initialValue={moment('00:00:00', 'HH:mm:ss')}>
                  <TimePicker />
                </Form.Item>
              </Col>
            </Row>
            <Row align="middle">
              <Col md={6} xs={24}>
                <label htmlFor="input-color">Color</label>
              </Col>
              <Col md={18} xs={24}>
                <Form.Item name="input-color">
                  <div className="sDash_color-picker">
                    <Input type="color" value="#5F63F2" />
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Cards>
      </HorizontalFormStyleWrap>
    </BasicFormWrapper>
  );
};

export { InputForm };
