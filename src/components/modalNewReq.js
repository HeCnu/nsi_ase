import React, { Component } from "react";
import { Input, Layout } from "antd";

const { Content } = Layout;
const { TextArea } = Input;

class ModalNewReq extends Component {
  render() {
    return (
      <div className="modalComponent">
        <Content>
          <TextArea rows={4} id="textReq" />
        </Content>
      </div>
    );
  }
}

export default ModalNewReq;
