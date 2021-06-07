import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { KnowledgebaseTopWrap } from '../style';

const GeneralKnowledgeTop = () => {
  return (
    <KnowledgebaseTopWrap>
      <div className="sDash_knowledgetop">
        <div className="sDash_knowledgetop__search--form">
          <Form name="login" layout="vertical">
            <div className="sDash_knowledgetop__formInner">
              <Form.Item>
                <Select defaultValue="All Products">
                  <Select.Option value="email">Email</Select.Option>
                  <Select.Option value="message">Message</Select.Option>
                  <Select.Option value="event">Event</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className="sDash_search-input">
                <Input placeholder="Search anything" />
              </Form.Item>
              <Form.Item>
                <Button className="btn-search" htmlType="submit" type="primary" size="large">
                  Search
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </KnowledgebaseTopWrap>
  );
};

export default GeneralKnowledgeTop;
