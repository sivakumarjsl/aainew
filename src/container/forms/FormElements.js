import React from 'react';
import { Row, Col, Form, Input, Button, Select, Upload, message, Radio, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { GridForm } from './overview/GridForm';
import { SizedForm } from './overview/SizedForm';
import { InputForm } from './overview/InputForm';
import { CheckListWrap } from './overview/Style';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { Option } = Select;
const { TextArea } = Input;
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const FormElements = () => {
  function onChange() {}
  return (
    <>
      <PageHeader
        ghost
        title="Form Elements"
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
            <GridForm />
          </Col>
          <Col lg={12} xs={24}>
            <SizedForm />
            <InputForm />
          </Col>
          <Col lg={12} xs={24}>
            <Cards title="Text Input" className="mb-25">
              <Form name="sDash_textarea" layout="vertical">
                <Form.Item name="basic-textarea" label="Basic Textarea">
                  <TextArea />
                </Form.Item>
                <Form.Item name="unresizable-textarea" label="Unresizable Textarea">
                  <TextArea className="sDash_unresizable" />
                </Form.Item>
              </Form>
            </Cards>
            <Cards title="Select" className="mb-25">
              <Form name="sDash_select" layout="vertical">
                <Form.Item name="basic-select" label="Basic Select">
                  <Select size="large" className="sDash_fullwidth-select">
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="disabled-select" label="Disabled Basic Select">
                  <Select size="large" className="sDash_fullwidth-select" disabled>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="multi-select" initialValue={['1', '2']} label="Multiple Select">
                  <Select size="large" mode="multiple" className="sDash_fullwidth-select">
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="disabled-multi-select" initialValue={['1', '2']} label="Disabled Multiple Select">
                  <Select size="large" mode="multiple" className="sDash_fullwidth-select" disabled>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Cards>
            <Cards title="File Browser" className="sDash_upload-form mb-25">
              <Form name="sDash_upload" layout="vertical">
                <Upload className="sDash_upload-basic" {...props}>
                  <span className="sDash_upload-text">Select File</span>
                  <Link to="#" className="sDash_upload-browse">
                    Browse
                  </Link>
                </Upload>
              </Form>
            </Cards>
            <CheckListWrap className="mb-25">
              <Cards title="Checkboxes and Radios">
                <div className="sDash_check-list-wrap">
                  <ul className="sDash_check-list sDash_check-list--left">
                    <li>
                      <Checkbox onChange={onChange}>Checkbox</Checkbox>
                    </li>
                    <li>
                      <Checkbox onChange={onChange} checked>
                        Checked
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox onChange={onChange} disabled>
                        Disabled Unchecked
                      </Checkbox>
                    </li>
                    <li>
                      <Checkbox onChange={onChange} checked disabled>
                        Disabled Checked
                      </Checkbox>
                    </li>
                  </ul>
                  <ul className="sDash_check-list sDash_check-list--right">
                    <li>
                      <Radio>Uncheck</Radio>
                    </li>
                    <li>
                      <Radio checked>Checked</Radio>
                    </li>
                    <li>
                      <Radio disabled>Disabled Unchecked</Radio>
                    </li>
                    <li>
                      <Radio checked disabled>
                        Disabled Checked
                      </Radio>
                    </li>
                  </ul>
                </div>
              </Cards>
            </CheckListWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default FormElements;
