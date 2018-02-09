import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute}  from 'react-router';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon, Badge, Popover } from 'antd';

import './HomeComponent.scss'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class HomeComponent extends React.Component {
  constructor(props){
      super(props);
      console.log(this)
  };
	state = {
    collapsed: false,
    user: ''
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  logout = () => {
    this.DelCookie('manager');
    hashHistory.push('/');
  }
  getCookie= objname=>{//获取指定名称的cookie的值
    var arrstr = document.cookie.split("; ");
    for(var i = 0;i < arrstr.length;i ++){
    var temp = arrstr[i].split("=");
    if(temp[0] == objname){return unescape(temp[1])}else {return null} ;
    }
  }
  DelCookie= name => {
    var exp = new Date();
    exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
    var cval = this.getCookie(name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
  }
  componentDidMount(){
    if(this.getCookie('manager') == null){
      alert('请登录');
      hashHistory.push('/')
    }else {
      this.setState({user: this.getCookie('manager')});
    }
  }
	render(){
        return (
            <Layout style={{ minHeight: '100vh' }}>
              <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
              >
                <div className="logo" ></div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" defaultOpenKeys={["sub1"]}>
                  <Menu.Item key="1">
                    <Icon type="home" />
                    <span className='sg'><Link to='/home'><span className='home'>home</span></Link></span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={<span><Icon type="appstore" /><span>商品管理</span></span>}
                  >
                    <Menu.Item key="17"><Link to='/goods'>Goods</Link></Menu.Item>
                    <Menu.Item key="18"><Link to='/addgoods'>Addgoods</Link></Menu.Item>
                    <Menu.Item key="19"><Link to='/goodsPic'>GoodsPic</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub6"
                    title={<span><Icon type="switcher" /><span>商品分类</span></span>}
                  >
                    <Menu.Item key="15">分类列表</Menu.Item>
                    <Menu.Item key="16">添加分类</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={<span><Icon type="user" /><span>用户管理</span></span>}
                  >
                    <Menu.Item key="6">
                      <span className='sg'><Link to='/user'><span>User</span></Link></span>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub4"
                    title={<span><Icon type="team" /><span>管理员</span></span>}
                  >
                    <Menu.Item key="10">
                      <span className='sg'><Link to='/manager'><span>Manager</span></Link></span>
                    </Menu.Item>
                    <Menu.Item key="9">
                      <span className='sg'><Link to='/addmanager'><span>AddManager</span></Link></span>
                    </Menu.Item>
                  </SubMenu>
                  
                </Menu>
              </Sider>
              <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                	<Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                  <Menu
                      mode="horizontal"
                      style={{ lineHeight: '64px', float: 'right' }}
                      onClick={this.menuClick}
                  >
                      <Menu.Item key="1">
                          <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                              <Icon type="notification" />
                          </Badge>
                      </Menu.Item>
                      <SubMenu title={<span><Icon type="user" style={{ fontSize: 19, color: '#08c', marginRight: 20 }} />{this.state.user}</span>}>
                          <MenuItemGroup title="用户中心">
                              <Menu.Item key="setting:1">你好 - {this.state.user}</Menu.Item>
                              <Menu.Item key="setting:2">个人信息</Menu.Item>
                              <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                          </MenuItemGroup>
                          <MenuItemGroup title="设置中心">
                              <Menu.Item key="setting:3">个人设置</Menu.Item>
                              <Menu.Item key="setting:4">系统设置</Menu.Item>
                          </MenuItemGroup>
                      </SubMenu>
                  </Menu>

                </Header>
                <Content style={{ margin: '16px 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to='/home'><span className='home'>home</span></Link></Breadcrumb.Item>
                    <Breadcrumb.Item>{this.props.location.pathname.slice(1)}</Breadcrumb.Item>
                  </Breadcrumb>
                  <div style={{ padding: 24, background: '#fff', minHeight: 490 }}>
                    {this.props.children}
                  </div>
                </Content>
              </Layout>
            </Layout>
		  )
	}
}
