import React, {useEffect, useState, ReactText} from 'react'
import { ListView } from 'antd-mobile';
import * as ReactDOM from 'react-dom';
import { getCusInfoList } from '@/api/home'


const MyBody: React.SFC = props => {
    return (
        <div className="am-list-body my-body">
            <span style={{ display: 'none' }}>you can custom body wrap element</span>
            {props.children}
        </div>
    );
}

let PAGE_NUM = 0
let lv: any
// 对外抛出纯函数组件
const Friend: React.SFC = props => {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (row1: any, row2: any) => row1 !== row2,
  });
  // 初始化分页变量
  const [homeData, setHomeData] = useState({
    dataSource,
    isLoading: true,
    hasMore: true,
    height: 0,
    lv
  })
  // 初始化list数据
  const [list, setList] = useState([])
  // 初始化分页查询数据
  const [pageSearch, setPageSearch] = useState({
    province: '',
    city: '',
    district: '',
    idx: 0,
    pageSize: 10
  })
  // 生命周期钩子，初始化列表数据
  useEffect(() => {
    // 强制转换成 HTMLDivElement 类 即断言
    const height = document.documentElement.clientHeight - ((ReactDOM.findDOMNode(homeData.lv) as HTMLDivElement).parentNode as HTMLDivElement).offsetTop;
    (async () => {
    // 在tabbar中使用分页加载数据   切记需要设置tabbar的prerenderingSiblingsNumber: 0 属性只加载当前页面的数据
      const { data }: {data: Ajax.AjaxResponse} = await getCusInfoList(pageSearch)
      // 拉取第一页的数据
      if(data.statusCode === 1001 && data.data.length > 0) { // 证明数据存在
        setList(data.data)
        setHomeData({
            ...homeData,
            dataSource: dataSource.cloneWithRows(data.data),
            isLoading: false,
            hasMore: true,
            height: height
        })
      }
    })()
  }, [])
  return (
    <div>
      <ListView
        ref={el => homeData.lv = el}
        dataSource={homeData.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          { !homeData.isLoading ? null : '数据加载中...' }
          { homeData.hasMore ? null : '没有更多数据' }
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        renderBodyComponent={() => <MyBody />}
        style={{
            height: homeData.height,
            overflow: 'auto',
        }}
        pageSize={10}
        onEndReached={
          // 加载更多数据
          async (event) => {
            console.log(homeData.height, homeData.lv)
            // load new data
            // hasMore: from backend data, indicates whether it is the last page, here is false
            if (homeData.isLoading || !homeData.hasMore) { // 数据正在加载或者以加载完毕都直接返回 注意点
              return;
            }
            // {isLoading: true} 表示数据正在加载中，但未加载完毕
            // {isLoading: false} 表该pageSize的数据，已加载完毕
            // { hasMore: true }
            setHomeData({ ...homeData,isLoading: true });
            const { data }: {data: Ajax.AjaxResponse}  = await getCusInfoList({...pageSearch, idx: ++PAGE_NUM})
            if(data.statusCode === 1001 && data.data.length > 0) { // 证明数据存在
              const l = list.concat(data.data)
              setList(l) // 为下一次list填充做好准备

              // console.log(list)
              // 此处注意: useState的数据不会立即更新， 这里获取的list还是之前的list数据

              setHomeData({
                  ...homeData,
                  dataSource: dataSource.cloneWithRows(l),
                  isLoading: false,
                  hasMore: true
              })
            } else { //证明数据已加载完毕
              setHomeData({...homeData, isLoading: false, hasMore: false})
            }
        }}
        onEndReachedThreshold={10}
      />
    </div>
  )
}
// 用于每个item 间隔块的展示
const separator = (sectionID: ReactText, rowID: ReactText) => {
  return (
    <div
      key={`${sectionID}-${rowID}`}
      style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderTop: '1px solid #ECECED',
        borderBottom: '1px solid #ECECED',
      }}
    />
  )
};
// item的每一项的展示
const row = (rowData: any, sectionID: string | number, rowID: string | number) => {
  return (
    <div key={rowID} style={{ padding: '0 15px' }}>
      <div
        style={{
          lineHeight: '50px',
          color: '#888',
          fontSize: 18,
          borderBottom: '1px solid #F6F6F6',
        }}
      >{rowData.cusName} --- {rowID}</div>
      <div style={{ display: '-webkit-box', padding: '15px 0' }}>
        <img style={{ height: '64px', marginRight: '15px' }} src={'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png'} alt="" />
        <div style={{ lineHeight: 1 }}>
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{'shijie'}</div>
          <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{'世界'}</span>¥</div>
        </div>
      </div>
    </div>
  );
};

export default Friend