import React from 'react';
import ReactDOM from 'react-dom';
import Biography from './Biography.jsx';
import { Card } from 'antd';

ReactDOM.render(
  <Card>
    <Biography />{' '}
  </Card>,
  document.getElementById('container')
);
