import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { FormValidationWrap, VerticalFormStyleWrap } from './overview/Style';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const FormValidation = () => {
  const validateMessages = {
    types: {
      city: '',
      state: '',
      zip: '',
      checkbox: '',
    },
  };
  function onChange() {}
  const [form] = Form.useForm();
  return (
    <>
      <PageHeader
        ghost
        title="Form Validation"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <Cards title="Custom Styles">
                  <Form name="sDash_validation-form" form={form} layout="vertical" validateMessages={validateMessages}>
                    <Row gutter={30}>
                      <Col md={8} xs={24}>
                        <Form.Item
                          name="f-name"
                          label="First Name"
                          rules={[{ required: true, message: 'First Name required!' }]}
                        >
                          <Input placeholder="First Name" />
                        </Form.Item>
                      </Col>
                      <Col md={8} xs={24}>
                        <Form.Item
                          name="l-name"
                          label="Last Name"
                          rules={[{ required: true, message: 'Last Name required!' }]}
                        >
                          <Input placeholder="Last Name" />
                        </Form.Item>
                      </Col>
                      <Col md={8} xs={24}>
                        <Form.Item
                          name="username"
                          label="Username"
                          rules={[{ required: true, message: 'Username required!' }]}
                        >
                          <Input placeholder="Username" />
                        </Form.Item>
                      </Col>
                      <Col md={12} xs={24}>
                        <Form.Item name="city" label="City" rules={[{ type: 'city' }]}>
                          <Input placeholder="City" />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24}>
                        <Form.Item name="state" label="State" rules={[{ type: 'state' }]}>
                          <Input placeholder="State" />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24}>
                        <Form.Item name="zip-code" label="Zip" rules={[{ type: 'zip' }]}>
                          <Input placeholder="Zip" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <div className="sDash_agree-check">
                      <Form.Item rules={[{ type: 'checkbox' }]}>
                        <Checkbox onChange={onChange}>Agree to terms and conditions</Checkbox>
                      </Form.Item>
                    </div>
                    <div className="sDash_form-action mt-20">
                      <Button htmlType="submit" type="primary" size="large">
                        Submit Form
                      </Button>
                    </div>
                  </Form>
                </Cards>
              </VerticalFormStyleWrap>
            </FormValidationWrap>
          </Col>

          <Col xs={24}>
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <Cards title="Server Side">
                  <Form name="sDash_vertical-form" layout="vertical">
                    <Row gutter={30}>
                      <Col md={8} xs={24} className="mb-20">
                        <Form.Item
                          name="f-name2"
                          label="First Name"
                          initialValue="Duran"
                          validateStatus="success"
                          help="Looks good!"
                        >
                          <Input placeholder="First Name" />
                        </Form.Item>
                      </Col>
                      <Col md={8} xs={24} className="mb-20">
                        <Form.Item
                          name="l-name2"
                          label="Last Name"
                          initialValue="Clayton"
                          validateStatus="success"
                          help="Looks good!"
                        >
                          <Input placeholder="Last Name" />
                        </Form.Item>
                      </Col>
                      <Col md={8} xs={24} className="mb-20">
                        <Form.Item name="username2" label="Username" validateStatus="error">
                          <Input placeholder="Username" />
                        </Form.Item>
                      </Col>
                      <Col md={12} xs={24} className="mb-20">
                        <Form.Item name="city2" label="City" help="Please provide a valid city." validateStatus="error">
                          <Input placeholder="City" />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24} className="mb-20">
                        <Form.Item
                          name="state2"
                          label="State"
                          help="Please provide a valid state."
                          validateStatus="error"
                        >
                          <Input placeholder="State" />
                        </Form.Item>
                      </Col>
                      <Col md={6} xs={24} className="mb-20">
                        <Form.Item
                          name="zip-code2"
                          label="Zip"
                          help="Please provide a valid zip."
                          validateStatus="error"
                        >
                          <Input placeholder="Zip" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <div className="sDash_agree-check mb-20">
                      <Form.Item help="You must agree before submitting." validateStatus="error">
                        <Checkbox onChange={onChange}>Agree to terms and conditions</Checkbox>
                      </Form.Item>
                    </div>
                    <Row>
                      <Col xs={24}>
                        <Form.Item name="password" validateStatus="error">
                          <Input placeholder="Password" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <div className="sDash_form-action">
                      <Button type="primary" size="large">
                        Submit Form
                      </Button>
                    </div>
                  </Form>
                </Cards>
              </VerticalFormStyleWrap>
            </FormValidationWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default FormValidation;
