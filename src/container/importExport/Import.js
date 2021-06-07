import React, { useState } from 'react';
import { Row, Col, Upload, message } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, ImportStyleWrap } from '../styled';
import { Button } from '../../components/buttons/buttons';
import Heading from '../../components/heading/heading';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { Dragger } = Upload;
const Import = () => {
  const [state, setState] = useState({
    file: null,
    list: null,
    submitValues: {},
  });

  const fileUploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        setState({ ...state, file: info.file, list: info.fileList });
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    listType: 'picture',
    defaultFileList: [],
    showUploadList: {
      showRemoveIcon: true,
      removeIcon: <FeatherIcon icon="trash-2" onClick={e => console.log(e, 'custom removeIcon event')} />,
    },
  };
  return (
    <>
      <PageHeader
        title="Import"
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
          <Col sm={24} xs={24}>
            <ImportStyleWrap>
              <div className="sDash_import-box">
                <Row gutter={15}>
                  <Col xs={24}>
                    <div className="sDash_import-inner">
                      <Dragger {...fileUploadProps}>
                        <p className="ant-upload-drag-icon">
                          <FeatherIcon icon="upload" size={50} />
                        </p>
                        <Heading as="h4" className="ant-upload-text">
                          <span> Drop File</span>
                          <span className="ant-upload-hint">
                            or <span>Browse</span>
                          </span>
                        </Heading>
                      </Dragger>
                    </div>
                  </Col>
                </Row>
              </div>
            </ImportStyleWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Import;
