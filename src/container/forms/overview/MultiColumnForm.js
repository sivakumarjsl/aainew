import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';

const MultiColumnForm = () => {
  return (
    <BasicFormWrapper className="mb-25">
      <Cards title="Multiple Column">
        <Form name="multi-form" layout="horizontal">
          <Row gutter={30}>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="sDash_f-name">
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item name="sDash_city">
                <Input placeholder="City" />
              </Form.Item>
              <Form.Item name="sDash_company">
                <Input placeholder="Company" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="sDash_l-name">
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item name="sDash_country">
                <Input placeholder="Country" />
              </Form.Item>
              <Form.Item name="sDash_email">
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={24}>
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
    </BasicFormWrapper>
  );
};

export { MultiColumnForm };
