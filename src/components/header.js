import React, { Component } from "react";
import { PageHeader } from "antd";

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
        marginRight: 8,
        height: 30
      }}
      src={src}
      alt="Аватар"
    />
    {text}
  </a>
);

class MyHeader extends Component {
  render() {
    return (
      <div>
        <PageHeader
          title="НСИ"
          extra={[
            <IconLink
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              text="Волкова Анна"
            />
          ]}
        />
      </div>
    );
  }
}

export default MyHeader;
