import React from 'react';
import { Row, Col, Button } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { HorizontalForm } from './overview/HorizontalForm';
import { HorizontalIconForm } from './overview/HorizontalIconForm';
import { VerticalForm } from './overview/VerticalForm';
import { VerticalIconForm } from './overview/VerticalIconForm';
import { MultiColumnForm } from './overview/MultiColumnForm';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const FormLayout = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Form Layouts"
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
          <Col lg={12} xs={24}>
            <HorizontalForm />
          </Col>
          <Col lg={12} xs={24}>
            <HorizontalIconForm />
          </Col>
          <Col lg={12} xs={24}>
            <VerticalForm />
          </Col>
          <Col lg={12} xs={24}>
            <VerticalIconForm />
          </Col>
          <Col xs={24}>
            <MultiColumnForm />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default FormLayout;
