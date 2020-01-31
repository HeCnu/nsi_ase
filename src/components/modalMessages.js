import React, { Component } from "react";
import { Input, Layout, Button } from "antd";

const { Content } = Layout;

class ModalMessages extends Component {
  render() {
    return (
      <div className="modalComponent">
        <Content>
          <div className="message">
            <p className="from">
              Здравствуйте, не могу найти инфо по процессорам Intel Core i7-7350
            </p>
          </div>

          <div className="message">
            <p className="to">Хорошо, я сейчас все внимательно проверю</p>
          </div>

          <div className="message">
            <p className="to">
              Да, действительно такой информации нет, поэтому мы занесли ее в
              базу, можете найти ее на странице поиска
            </p>
          </div>

          <div className="message">
            <p className="from">Нашел, спасибо!</p>
          </div>

          <div className="message">
            <p className="to">Спасибо за обращение!</p>
          </div>

          <div>
            <Input className="send" placeholder="Введите текст..." />
            <Button className="send">→</Button>
          </div>

          <Button className="messageFooter">ЗАПРОС РЕШЁН</Button>
        </Content>
      </div>
    );
  }
}

export default ModalMessages;
