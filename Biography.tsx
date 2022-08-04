import React from 'react';
import { PageHeader, Row, Tag, Typography } from 'antd';

const { Paragraph } = Typography;

const content = (
  <>
    <Paragraph>
      Опыт работы в IT - более 10 лет. Успешно прошёл несколько десятков
      собеседований и сам провёл более сотни, проверил множество тестовых
      заданий.
    </Paragraph>
    <Paragraph>
      Глубоко изучил весь процесс разработки ПО, поработав на различных позициях
      (Support, Frontend, Fullstack, Аналитик, PM, Teamlead) как на стороне
      исполнителя, так и на стороне заказчика. Работал как с огромными
      enterprise-проектами, так и создавал небольшие проекты с нуля.
    </Paragraph>
  </>
);

const Content: React.FC<{
  children: React.ReactNode;
  extraContent: React.ReactNode;
}> = ({ children }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
  </Row>
);

const App: React.FC = () => (
  <PageHeader
    title="Ройч Бартмосс"
    className="site-page-header"
    subTitle="Night City (USA) +10:00 UTC"
    tags={[
      <Tag color="blue">TypeScript</Tag>,
      <Tag color="yellow">Javascript</Tag>,
      <Tag color="green">Vue</Tag>,
      <Tag color="blue">React</Tag>,
    ]}
    extra={[]}
    avatar={{
      src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
    }}
  >
    <Content>{content}</Content>
  </PageHeader>
);

export default App;
