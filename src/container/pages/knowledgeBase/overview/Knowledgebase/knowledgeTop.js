import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { Link } from 'react-router-dom';
import { KnowledgebaseTopWrap } from '../../style';

const KnowledgeBaseTop = () => {
  return (
    <KnowledgebaseTopWrap>
      <div className="sDash_knowledgetop">
        <h2 className="sDash_knowledgetop__title">Hi, How can we help?</h2>
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
        <div className="sDash_knowledgetop__popular--topics">
          <ul>
            <li>
              <span className="popular-topics-title">Popular topics:</span>
            </li>
            <li>
              <Link to="#">Message formatting</Link>
            </li>
            <li>
              <Link to="#">Notifications</Link>
            </li>
            <li>
              <Link to="#">Change password</Link>
            </li>
          </ul>
        </div>
      </div>
    </KnowledgebaseTopWrap>
  );
};

export default KnowledgeBaseTop;
