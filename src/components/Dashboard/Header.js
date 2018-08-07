import React from 'react';
import { Layout, Row, Col } from 'antd';

import logo from '../../assets/img/logo.png';
import dot from '../../assets/img/dotCyan.png';

const { Header } = Layout;

const HeaderDash = () => (
  <Header className="header">
    <Row>
      <Col md={2} xs={24}>
        <img id="logo" src={logo} alt="GERU" />
      </Col>
      <Col md={{ span: 6, offset: 16 }} xs={24}>
        <div className="path-header">
          COMO FUNCIONA  <img id="dot" src={dot} alt="dot" />
          PRIVACIDADE <img id="dot" src={dot} alt="dot" />
          AJUDA
          </div>
      </Col>
    </Row>
  </Header>
);

export default HeaderDash;
