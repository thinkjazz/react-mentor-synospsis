import React from 'react';
import ReactDOM from 'react-dom';
import MentorBio from './Components/MentorBio.jsx';
import { Card } from 'antd';

ReactDOM.render(
  <Card>
    <MentorBio />
  </Card>,
  document.getElementById('container')
);
