import { Card } from 'antd';
import React from 'react';

const MentorPrice = () => (
  <div className="site-card-border-less-wrapper">
    <Card
      title="Стоимость занятий"
      bordered={false}
      style={{
        width: 250,
      }}
    >
      <p>Часовое занятие с ментором 1871₽/ час</p>
      <p>Пробные 15 минут Бесплатно</p>
      <p>Дополнительные услуги Разбор проекта по запросу</p>
    </Card>
  </div>
);
export default MentorPrice;
