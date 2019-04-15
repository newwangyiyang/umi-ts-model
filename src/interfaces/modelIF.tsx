import { ListItemIF } from './responseIF';

export interface ListModelModelIF {
    listData: ListItemIF[]
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
}