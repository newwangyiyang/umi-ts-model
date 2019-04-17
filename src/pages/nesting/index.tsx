import React, { useState } from 'react'
import router from 'umi/router'
import { TabBar } from 'antd-mobile'
import TabbarItem from './components/tabbarItem';
const styles = require('./index.less')


const tabData = [
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

const Nesting: React.SFC = props => {
  const [ selectId, setSelectId ] = useState('237254756ccf410ab2fe82dc81df94ce')
  return (
    <div className={styles.nexting_wrap}>
      <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          tabBarPosition="bottom"
          prerenderingSiblingsNumber={0}
        >
          {tabData.map((v, i) => {
            return <TabBar.Item
                      icon={<TabbarItem iconUrl={v.icon} />}
                      selectedIcon={<TabbarItem iconUrl={v.selectedIcon} />}
                      title={v.title}
                      key={v.id}
                      selected={v.id === selectId}
                      onPress={() => {
                        setSelectId(v.id)
                        // 跳转到对应的tabbar => page
                        router.push({pathname: v.toPath})
                      }}
                    >
                      {/* Tabbars的渲染页面 */}
                      {props.children}
                    </TabBar.Item>
          })}
        </TabBar>
    </div>
  )
}

export default Nesting