import React from 'react';
import { Row, Col, Card, Form, Input } from 'antd';
import { BasicFormWrapper } from '../../styled';

const GridForm = () => {
  return (
    <BasicFormWrapper className="mb-25">
      <Card title="Form Group in Grid">
        <Form name="sDash_grid-form" layout="horizontal">
          <Row gutter={30}>
            <Col md={8} xs={24} className="mb-25">
              <Form.Item name="grid-3-1">
                <Input placeholder="One of Three Columns" label="One of Three Columns" />
              </Form.Item>
            </Col>
            <Col md={8} xs={24} className="mb-25">
              <Form.Item name="grid-3-2">
                <Input placeholder="One of Three Columns" label="One of Three Columns" />
              </Form.Item>
            </Col>
            <Col md={8} xs={24} className="mb-25">
              <Form.Item name="grid-3-3">
                <Input placeholder="One of Three Columns" label="One of Three Columns" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col md={6} xs={24} className="mb-25">
              <Form.Item name="grid-4-1">
                <Input placeholder="One of Four Columns" label="One of Four Columns" />
              </Form.Item>
            </Col>
            <Col md={6} xs={24} className="mb-25">
              <Form.Item name="grid-4-2">
                <Input placeholder="One of Four Columns" label="One of Four Columns" />
              </Form.Item>
            </Col>
            <Col md={6} xs={24} className="mb-25">
              <Form.Item name="grid-4-3">
                <Input placeholder="One of Four Columns" label="One of Four Columns" />
              </Form.Item>
            </Col>
            <Col md={6} xs={24} className="mb-25">
              <Form.Item name="grid-4-4">
                <Input placeholder="One of Four Columns" label="One of Four Columns" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col md={12} xs={24} className="mb-25">
              <Form.Item name="grid-2-1">
                <Input placeholder="One of Two Columns" label="One of Two Columns" />
              </Form.Item>
            </Col>
            <Col md={12} xs={24} className="mb-25">
              <Form.Item name="grid-2-2">
                <Input placeholder="One of Two Columns" label="One of Two Columns" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </BasicFormWrapper>
  );
};

export { GridForm };
