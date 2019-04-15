import { ListItemStateIF } from './stateIF';


/**
 * listModel的model层数据类型
 *
 * @export
 * @interface ListModelModelIF
 */
export interface ListModelModelIF {
    listData: ListItemStateIF[]
}
/**
 * 全局model层的数据类型
 *
 * @export
 * @interface GlobalModelIF
 */
export interface GlobalModelIF {
    name: string
    userId: string
    openId: string
    headerUrl: string
    age: number
    createtime: Date
    list: ListItemStateIF[]
}

/**
 *Global02IF
 *
 * @export
 * @interface Global02IF
 */
export interface Global02IF {
    name02: string
    age02: number
}
/**
 * Global01IF
 *
 * @export
 * @interface Global01IF
 */
export interface Global01IF {
    name01: string,
    age01: number
}
/**
 *dvaDemo models层
 *
 * @export
 * @interface DvaDemoIF
 */
export interface DvaDemoIF {
    dvaDemoName: string
    dvaDemoTime: Date
    dvaDemoState: number
}
/**
 *DavDemo01IF
 *
 * @export
 * @interface DavDemo01IF
 */
export interface DavDemo01IF {
    num: number
    str: string
}


export interface ModelAllIF {
    global01: Global01IF
    global02: Global02IF
    dvaDemo: DvaDemoIF
    dvaDemo01: DavDemo01IF
    listModel: ListModelModelIF
    showGlobalModel: GlobalModelIF
}

