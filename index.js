import React from 'react';
import ReactDOM from 'react-dom';
import MentorBio from './Components/MentorBio.jsx';
import MentorHelp from './Components/MentorHelp.jsx';
import { Card } from 'antd';

ReactDOM.render(
  <div>
    <Card>
      <MentorBio />
    </Card>
    <Card>
      <MentorHelp />
    </Card>
  </div>,
  document.getElementById('container')
);
