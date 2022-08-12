import React from 'react';
import 'antd/dist/antd.css';
import '../assets/style.css';
import { PageHeader, Row, Tag, Typography, Divider, List } from 'antd';
import { CompassOutlined, UserOutlined, CodeTwoTone } from '@ant-design/icons';
const { Paragraph, Title, Text, Link } = Typography;

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
      <Title level={3}>С чем могу помочь 🧠</Title>

      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text> ●</Typography.Text> {item}
          </List.Item>
        )}
      />
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
    <Tag color="blue">Newbie</Tag>
    <Tag color="red">Trainee</Tag>
    <Tag color="magenta">Junior</Tag>
    <Tag color="green">Middle</Tag>
  </PageHeader>
);

export default MentorHelp;
