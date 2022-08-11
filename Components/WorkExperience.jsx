import React from 'react';
import '../assets/style.css';
import 'antd/dist/antd.css';
import { ClockCircleFilled } from '@ant-design/icons';
import { PageHeader, Row, Tag, Avatar, Typography, List } from 'antd';
const { Paragraph, Title, Text, Link } = Typography;

const work = [
  {
    title: 'Yandex',
    position: 'Руководитель группы разработки интерфейсов',
  },
  {
    title: 'Google',
    position: 'Разработчик интерфейсов',
  },
  {
    title: 'Yahoo',
    position: 'Разработчик',
  },
  {
    title: 'Facebook',
    position: 'Разработчик стажер UI',
  },
];

const content = (
  <>
    <Paragraph>
      <Title level={3}>👨‍💻Опыт работы</Title>

      <List
        itemLayout="horizontal"
        dataSource={work}
        renderItem={(job) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://randomuser.me/api/portraits/lego/6.jpg" />
              }
              title={job.title}
              description={[
                <Tag icon={<ClockCircleFilled />} color="blue">
                  August 2018 — по настоящее время
                </Tag>,
                <Tag color="gold">{job.position}</Tag>,
                <Paragraph>
                  Хуи пинал. В Яндексе очень большая инфраструктура и у нас есть
                  свои внутренние сервисы для организации работы. Один из таких
                  - Яндекс. Вики база знаний всей компании.{' '}
                </Paragraph>,
              ]}
            />
          </List.Item>
        )}
      />
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

const WorkExperience = () => (
  <PageHeader className="site-page-header" tags={[]} extra={[]}>
    <Content>{content}</Content>
  </PageHeader>
);

export default WorkExperience;
