import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../styled';

const SizedForm = () => {
  return (
    <BasicFormWrapper className="mb-25">
      <Cards title="Sizes">
        <Form name="sDash_sized-form" layout="horizontal">
          <Row gutter={30}>
            <Col xs={24}>
              <Form.Item name="size-large" label="Large Input">
                <Input size="large" placeholder="size='large'" />
              </Form.Item>
              <Form.Item name="size-default" className="small-input" label="Default Input">
                <Input placeholder="size='Default'" />
              </Form.Item>
              <Form.Item className="mb-25" name="size-small" label="Small Input">
                <Input size="small" placeholder="size='Small'" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Cards>
    </BasicFormWrapper>
  );
};

export { SizedForm };
