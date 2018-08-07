import React from 'react';
import { Row, Col } from 'antd';

const Menu = () => (
  <div id="MenuDash">
    <Row type="flex" justify="center" align="top">
      <Col md={2} xs={24}>
        <a href='#/notFound'>
          <div id="box">
            SIMULE
        </div>
        </a>
      </Col>
      <Col md={5} xs={24}>
        <a href='#/form'>
          <div id="box">
            PREENCHA O CADASTRO
        </div>
        </a>
      </Col>
      <Col md={4} xs={24}>
        <a href='#/notFound'>
          <div id="box">
            REVISE SEU PEDIDO
        </div>
        </a>
      </Col>
      <Col md={4} xs={24}>
        <a href='#/notFound'>
          <div id="box">
            FINALIZE O PEDIDO
        </div>
        </a>
      </Col>
    </Row>
  </div>
);

export default Menu;
