import React from 'react';
import './App.css'
import './LinkCard/LinkCard'

import { Layout } from 'antd';
import LinkCard from './LinkCard/LinkCard';
import MenuConfig from './MenuConfig/index'
import axios from 'axios'
const { Header, Footer, Sider, Content } = Layout;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    card: [],
    menu: []
    }
    componentDidMount(){
      axios.get('http://rap2api.taobao.org/app/mock/227337/menuconfig')
      .then(res => this.setState({
        card: res.data.card,
        menu: res.data.menu
      }))
      .then(() => console.log(this.state.menu))
    }
  
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <MenuConfig menu = {this.state.menu}/>
          {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu> */}
        </Sider>
        <Layout>
          <Header style={{ background: 'red', padding: 0 }}>
            This is Header
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ margin: '16px 0' , padding: 24, background: '#fff', minHeight: 360 }}>
              <LinkCard card={this.state.card}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' , backgroundColor: 'red' }}>©2018 Created by CriSri</Footer>
        </Layout>
      </Layout>
    );
  }
}
function App() {
  return (
    <SiderDemo/>
  )
}

export default App;
