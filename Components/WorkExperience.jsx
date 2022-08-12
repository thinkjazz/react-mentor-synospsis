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
    logo: 'https://yastatic.net/s3/home-static/_/37/37a02b5dc7a51abac55d8a5b6c865f0e.png',
  },
  {
    title: 'Google',
    position: 'Разработчик интерфейсов',
    logo: 'https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png',
  },
  {
    title: 'Yahoo',
    position: 'Разработчик',
    logo: 'https://cdn-icons-png.flaticon.com/512/179/179345.png?w=360',
  },
  {
    title: 'Facebook',
    position: 'Разработчик стажер UI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png',
  },
];

const content = (
  <>
    <Paragraph>
      <Title level={3}>Опыт работы</Title>

      <List
        itemLayout="horizontal"
        dataSource={work}
        renderItem={(job) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={job.logo} />
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
                  - Яндекс. Вики база знаний всей компании.
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
