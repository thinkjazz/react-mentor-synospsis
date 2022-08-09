import React from 'react';
import 'antd/dist/antd.css';
import '../assets/style.css';
import { PageHeader, Row, Tag, Typography } from 'antd';
import { CompassOutlined, UserOutlined, CodeTwoTone } from '@ant-design/icons';
const { Paragraph, Title, Divider, List, Text, Link } = Typography;

const data = [
  'Интересно поработать с тестовыми фреймворками на Typescript.',
  'Проведу ревью кода или проекта, оценю риски, помогу с внедрением документации.',
  'Поделюсь опытом тестирования и автоматизация API, Firmware, Web.',
  'Могу помочь с подготовкой и оценкой резюме, собеседованиями, оценкой ROI тестирования.',
  'С удовольствием проконсультирую небольшие компании и стартапы по внедрению и улучшению тестирования.',
  'Помогаю разобраться в тайм-менеджменте',
  'Могу помочь в организации процессов внутри проекта',
  'Помогу познакомиться и внедрить custdev',
];

const content = (
  <>
    <Paragraph>
      <Title level={3}>С чем могу помочь</Title>
    </Paragraph>
    <Paragraph>
      Глубоко изучил весь процесс разработки ПО, поработав на различных позициях
      (Support, Frontend, Fullstack, Аналитик, PM, Teamlead) как на стороне
      исполнителя, так и на стороне заказчика. Работал как с огромными
      enterprise-проектами, так и создавал небольшие проекты с нуля.
    </Paragraph>
  </>
);

const Content = ({ children }) => (
  <Row>
    <div
      style={{
        flex: 1,
      }}
    >
      {children}
    </div>
  </Row>
);

const MentorHelp = () => (
  <PageHeader className="site-page-header" tags={[]} extra={[]}>
    <Content>{content}</Content>
    <Tag color="blue">TypeScript</Tag>
    <Tag color="yellow">Javascript</Tag>
    <Tag color="green">Vue</Tag>
    <Tag color="blue">React</Tag>
    <Tag color="red">Angular</Tag>
    <Tag color="volcano">Svelte</Tag>
    <Tag color="default">Управление командой</Tag>
    <Tag color="default">Процессы разработки и тестирования</Tag>
    <Tag color="default">Прохождение собеседований</Tag>
    <Tag color="default">Мотивация команды</Tag>
    <Tag color="default">Управление продуктом</Tag>
    <Tag color="default">Customer development</Tag>
    <Tag color="default">Управление проектами</Tag>
    <Tag color="default">Распределённая команда</Tag>
    <Tag color="default">Управление знаниями в команде</Tag>
  </PageHeader>
);

export default MentorHelp;
