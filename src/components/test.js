import React, { Component } from "react";
import "antd/dist/antd.css";
import { PageHeader, Layout, List, Avatar, Tabs } from "antd";
import "./../styles.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

const { Header, Content } = Layout;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const data = [
  {
    key: "1",
    title: "John Brown",
    age: 30,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team"
  },
  {
    key: "2",
    title: "Jim Green",
    age: 40,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team"
  },
  {
    key: "3",
    title: "Joe Black",
    age: 35,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team"
  },
  {
    key: "4",
    title: "Disabled User",
    age: 99,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team"
  }
];

const IconLink = ({ src, text }) => (
  <a
    style={{
      marginRight: 16,
      display: "flex",
      alignItems: "center"
    }}
  >
    <img
      style={{
        marginRight: 8
      }}
      src={src}
      alt="Аватар"
    />
    {text}
  </a>
);

const ExpertProfileReq = () => {
  <Content
    style={{
      background: "#fff",
      padding: 24,
      margin: 0,
      minHeight: 280
    }}
  >
    <Tabs defaultActiveKey="1" onChange={callback} tabPosition="left">
      <TabPane tab="Tab 1" key="1">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </TabPane>
    </Tabs>
  </Content>;
};

class ExpertProfile extends Component {
  render() {
    return (
      <Layout>
        <Header className="header" style={{ background: "#555" }}>
          <PageHeader title="НСИ" extra={[<IconLink text="Волкова Анна" />]} />
        </Header>
        <BrowserRouter>
          <div>
            <Link to="/expertProfileReq">Запросы</Link>
            <Link to="/expertProfileHistory">История выгрузок</Link>

            <Route path="/expertProfileReq" component={ExpertProfileReq} />
          </div>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default ExpertProfile;
