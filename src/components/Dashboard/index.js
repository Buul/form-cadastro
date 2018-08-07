import React from 'react';
import { Layout } from 'antd';
import HeaderDash from './Header';
import InformationDash from './InformationDash';
import Menu from './Menu';

import style from './style.css';

const { Content, Footer } = Layout;

const Dashboard = (props) => (
  <Layout className={style.component}>
    <HeaderDash />
    <InformationDash />
    <Menu />
    <Content className="content">
      {props.children}
    </Content>
    <Footer className="footer">
      <span>Paulo Firmino &copy; 2018</span>
    </Footer>
  </Layout>
);

export default Dashboard;
