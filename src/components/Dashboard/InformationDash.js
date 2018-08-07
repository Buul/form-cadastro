import React from 'react';
import { Row, Col } from 'antd';

const InformationDash = () => (
  <div id="InformationDash">
    <Row type="flex" justify="center" align="middle">
      <Col md={4}>
        <div id="box">
          <p id="title">ME CHAMO:</p>
          <p>PAUL IRISH</p>
          <p id="title">CPF: <span style={{ color: "#FFF" }}>762.000.176-92</span></p>
        </div>
      </Col>
      <Col md={4}>
        <div id="box">
          <p id="title">PRECISO DE:</p>
          <p>R$ 2.000</p>
        </div>
      </Col>
      <Col md={4}>
        <div id="box">
          <p id="title">QUERO PAGAR:</p>
          <p>12 VEZES</p>
        </div>
      </Col>
      <Col md={4}>
        <div id="box">
          <p id="title">PARA:</p>
          <p>COMPRAR UMA BIKE</p>
        </div>
      </Col>
    </Row>
  </div>
);

export default InformationDash;
