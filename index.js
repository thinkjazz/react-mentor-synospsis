import React from 'react';
import ReactDOM from 'react-dom';
import Biography from './Components/MentorBio.jsx';
import { Card } from 'antd';

ReactDOM.render(
  <Card>
    <Biography />
  </Card>,
  document.getElementById('container')
);
