import React from 'react';
import 'antd/dist/antd.css';
import '../assets/style.css';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Card, Tag, Space, Typography, Button } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const MentorPhotoBlock = () => (
  <Card
    hoverable
    style={{
      width: 250,
    }}
    cover={
      <img
        alt="example"
        src="https://i1.sndcdn.com/avatars-000288873036-ix0cdf-t500x500.jpg"
      />
    }
  >
    <Meta
      title={<Text type="success">Бесплатное занятие</Text>}
      description={[
        <div>
          <Button type="primary" block>
            Оставить заявку
          </Button>
          <Button block>Бесплатное занятие</Button>
        </div>,
      ]}
    />
  </Card>
);

export default MentorPhotoBlock;
