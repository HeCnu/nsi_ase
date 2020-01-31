import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, List, Tabs, Modal } from "antd";
import "./../styles.css";

import MyHeader from "./header";
import { Link } from "react-router-dom";

import requests_all from "./../requests_all.json";
import requests_cur from "./../requests_cur.json";

import ModalMessages from "./modalMessages";

const { Header, Content } = Layout;
const { TabPane } = Tabs;
const { confirm } = Modal;

function showConfirm(nameS, textS) {
  confirm({
    title: "",
    content: <ModalMessages />,
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {}
  });
}

function callback(key) {
  console.log(key);
}

class ExpertProfile extends Component {
  state = {
    visible: false
  };

  showModal = title => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log("Инфо было записано!");

    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log("Отмена");
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Layout>
        <Header className="header" style={{ background: "#555" }}>
          <MyHeader />
        </Header>
        <Layout>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Tabs
              defaultActiveKey="1"
              onChange={callback}
              tabPosition="left"
              type="card"
            >
              <TabPane tab="На рассмотрении" key="1">
                <List
                  itemLayout="horizontal"
                  dataSource={requests_cur}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <Link onClick={this.showModal}>{item.title}</Link>
                        }
                        description={item.description}
                        style={{
                          backgroundColor: item.color
                        }}
                      />
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane tab="Все запросы" key="2">
                <List
                  itemLayout="horizontal"
                  dataSource={requests_all}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <Link onClick={this.showModal}>{item.title}</Link>
                        }
                        description={item.description}
                        style={{
                          backgroundColor: item.color
                        }}
                      />
                    </List.Item>
                  )}
                />
              </TabPane>
              <TabPane tab="Выгрузки" key="3">
                <List
                  itemLayout="horizontal"
                  dataSource={requests_all}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={<Link>{item.title}</Link>}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </TabPane>
            </Tabs>
            <Modal
              title="Запрос № 3"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
              cancelText="Отменить"
              okText="Отправить"
            >
              <ModalMessages />
            </Modal>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default ExpertProfile;
