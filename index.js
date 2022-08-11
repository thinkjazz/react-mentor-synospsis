import React from 'react';
import ReactDOM from 'react-dom';
import MentorBio from './Components/MentorBio.jsx';
import MentorHelp from './Components/MentorHelp.jsx';
import { Card, Space } from 'antd';

ReactDOM.render(
  <div>
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card>
        <MentorBio />
      </Card>

      <Card>
        <MentorHelp />
      </Card>
    </Space>
  </div>,
  document.getElementById('container')
);
