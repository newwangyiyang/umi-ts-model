import React from 'react';
import withRouter from 'umi/withRouter';
import { TabBar } from 'antd-mobile';
import router from 'umi/router';
import Authorized from '@/utils/Authorized';
import Exception403 from '@/pages/exception/403';
import pathToRegexp from 'path-to-regexp';
import { connect } from 'dva';
import styles from './index.less';
import MyTabbarItem from '@/components/MyTabbarItem/index'


const tabBarItems = [
    {
      id: '237254756ccf410ab2fe82dc81df94ce',
      title: 'Life',
      icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
      selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
      toPath: '/nesting/life'
    },
    {
      id: 'f0125aa6de634b5dad259a0a7e215449',
      title: 'Koubei',
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
      selectedIcon: 'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
      toPath: '/nesting/koubei'
    },
    {
      id: 'c52a694db17240d89011868b7192d1f0',
      title: 'Friend',
      icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
      selectedIcon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
      toPath: '/nesting/friend'
    },
    {
      id: '564ff94242fc488b861e16d061bf1972',
      title: 'My',
      icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
      selectedIcon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      toPath: ''
    }
]


class TabBarLayout extends React.PureComponent {
  state = {
    visible: true,
    selected: '',
  };

  /**
   * 获取路由访问权限
   * @param pathname
   * @param routeData
   * @returns {string[]}
   */
  getRouterAuthority = (pathname, routeData) => {
    let routeAuthority = ['noAuthority'];
    const getAuthority = (key, routes) => {
      routes.map(route => {
        if (route.path && pathToRegexp(route.path).test(key)) {
          routeAuthority = route.authority;
        } else if (route.routes) {
          routeAuthority = getAuthority(key, route.routes);
        }
        return route;
      });
      return routeAuthority;
    };
    return getAuthority(pathname, routeData);
  };

  /**
   * 获取 路由配置中带有 NAME 属性的路由信息
   * @param routes
   */
  getTabBarItems = (routes) => {
    if (routes && typeof routes === 'object') {
      return (routes || []).filter(item => item.title !== undefined);
    }
    return [];
  };


  /**
   * 渲染 组件
   * @param children
   * @param pathname
   * @param routes
   * @returns {*}
   */
  getChildrenContent = (children, pathname, routes) => {
    const routerConfig = this.getRouterAuthority(pathname, routes);
    let tabBarItem = [];
    tabBarItem = tabBarItems.map((item) => (
        <TabBar.Item
        title={item.title}
        key={`tab-bar-item-${item.toPath}`}
        icon={<MyTabbarItem iconUrl={item.icon} />}
        selectedIcon={<MyTabbarItem iconUrl={item.selectedIcon} />}
        selected={pathname === item.toPath}
        badge={0}
        onPress={() => {
          if(pathname === item.toPath) return
          router.push(item.toPath);
        }}
        data-seed="logId"
        >
            <Authorized authority={routerConfig} noMatch={<Exception403/>}>
            {children}
            </Authorized>
        </TabBar.Item>)
    );

    return (
        <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition='bottom'
        prerenderingSiblingsNumber={0}
        >
            {tabBarItem}
        </TabBar>
    );
  };


  render() {
    const {
      children,
      location: { pathname },
      route: { routes },
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {this.getChildrenContent(children, pathname, routes)}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(TabBarLayout));
