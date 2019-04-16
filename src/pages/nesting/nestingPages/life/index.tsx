import React, { useState, useEffect } from 'react'
import { WingBlank, Carousel, SegmentedControl, Button, WhiteSpace, ImagePicker } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky'
import { FileInputAntdParamsIF } from '@/interfaces/params';


const styles = require('./index.less')


const Life: React.SFC = props => {
    const [cData, setCData] = useState({
        list: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        autoHeight: '176px',
        tabIndex: 0
    })
    return (
        <div>
            <Carousel
                infinite
                autoplay={false}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {
                    cData.list.map(val => (
                    <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%' , height: cData.autoHeight}}
                    >
                    <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            setCData({...cData, autoHeight: 'auto'})
                        }}
                    />
                    </a>
                ))}
            </Carousel>
            <WingBlank>
                <WhiteSpace />
                <StickyContainer>
                    <Sticky>
                        {({ style }: {style: React.CSSProperties}) => <div style={{ ...style, zIndex: 1 }}>
                            <SegmentedControl
                            selectedIndex={cData.tabIndex}
                            onChange={e => {
                                setCData({...cData, tabIndex: e.nativeEvent.selectedSegmentIndex})
                            }}
                            style={{position: 'static'}}
                            values={['tab001', 'tab002', 'tab003']}>
                            </SegmentedControl>
                        </div>}
                    </Sticky>
                    {cData.tabIndex === 0 ? <Tab001 /> : null}
                    {cData.tabIndex === 1 ? <Tab002 /> : null}
                    {cData.tabIndex === 2 ? <Tab003 /> : null}
                </StickyContainer>
            </WingBlank>

        </div>
    )
}




const Tab001: React.SFC = props => {

    let state: FileInputAntdParamsIF[] = [
        {
            url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
            id: '2121',
        }, {
            url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            id: '2122',
        }
    ]

    const [files, setFiles] = useState(state)


    return (
        <div className={styles.tab001_wrap}>
            <p className={styles.tab001_p}>选择需要上传的图片</p>
            <ImagePicker
            files={files}
            onChange={(files, type, index) => {
                console.log(files, type, index)
                setFiles(files as FileInputAntdParamsIF[])
            }}
            selectable={files.length < 10}
            onImageClick={(index, fs) => console.log(index, fs)}
            accept="image/gif,image/jpeg,image/jpg,image/png"
            />
            <p className={styles.tab001_p}>选择需要上传的图片</p>
            <ImagePicker
            files={files}
            onChange={(files, type, index) => {
                console.log(files, type, index)
                setFiles(files as FileInputAntdParamsIF[])
            }}
            selectable={files.length < 10}
            onImageClick={(index, fs) => console.log(index, fs)}
            accept="image/gif,image/jpeg,image/jpg,image/png"
            />
            <p className={styles.tab001_p}>选择需要上传的图片</p>
            <ImagePicker
            files={files}
            onChange={(files, type, index) => {
                console.log(files, type, index)
                setFiles(files as FileInputAntdParamsIF[])
            }}
            selectable={files.length < 10}
            onImageClick={(index, fs) => console.log(index, fs)}
            accept="image/gif,image/jpeg,image/jpg,image/png"
            />
            <p className={styles.tab001_p}>选择需要上传的图片</p>
            <ImagePicker
            files={files}
            onChange={(files, type, index) => {
                console.log(files, type, index)
                setFiles(files as FileInputAntdParamsIF[])
            }}
            selectable={files.length < 10}
            onImageClick={(index, fs) => console.log(index, fs)}
            accept="image/gif,image/jpeg,image/jpg,image/png"
            />
            <p className={styles.tab001_p}>选择需要上传的图片</p>
            <ImagePicker
            files={files}
            onChange={(files, type, index) => {
                console.log(files, type, index)
                setFiles(files as FileInputAntdParamsIF[])
            }}
            selectable={files.length < 10}
            onImageClick={(index, fs) => console.log(index, fs)}
            accept="image/gif,image/jpeg,image/jpg,image/png"
            />
            <p className={styles.tab001_p}>选择需要上传的图片</p>
            <ImagePicker
            files={files}
            onChange={(files, type, index) => {
                console.log(files, type, index)
                setFiles(files as FileInputAntdParamsIF[])
            }}
            selectable={files.length < 10}
            onImageClick={(index, fs) => console.log(index, fs)}
            accept="image/gif,image/jpeg,image/jpg,image/png"
            />
        </div>
    )
}
const Tab002: React.SFC = props => {
    return (
        <div>
            Tab002
        </div>
    )
}
const Tab003: React.SFC = props => {
    return (
        <div>
            Tab003
        </div>
    )
}

export default Life