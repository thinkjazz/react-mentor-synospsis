import React from 'react';
import ReactDOM from 'react-dom';
import MentorBio from './Components/MentorBio.jsx';
import MentorHelp from './Components/MentorHelp.jsx';
import WorkExperience from './Components/WorkExperience.jsx';
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
      <Card>
        <WorkExperience />
      </Card>
    </Space>
  </div>,
  document.getElementById('container')
);
