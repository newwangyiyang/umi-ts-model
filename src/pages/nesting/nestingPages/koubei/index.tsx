import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

function renderTabBar(props: any) {
  return (<Sticky>
    {({ style }: {style: React.CSSProperties}) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];

const MyListView: React.SFC = props => {
    return (
        <div>
            
        </div>
    )
}



const Koubei = () => (
  <div>
    <StickyContainer>
        <Tabs tabs={tabs}
            initialPage={1}
            renderTabBar={renderTabBar}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of first tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
            Content of third tab
            </div>
        </Tabs>
    </StickyContainer>
  </div>
);


export default Koubei