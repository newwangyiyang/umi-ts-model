import { RcFormPropsIF } from './params';

/** 用于对state初始化数据的封装 */
export interface FatherStateIF {
    name: string
    age: number
}

/**
 * 用于对login初始化数据的定义
 *
 * @export
 * @interface LoginState
 */
export interface LoginStateIF {
    userphone: number
    usercode: number

    codeText: string
    canCode: boolean
    codeTime: number
}

/**
 * 定义list列表state数据进行封装
 *
 * @export
 * @interface ListItemStateIF
 */
export interface ListItemStateIF {
    hdcName: string
    hdcId: string
    hdcSort: number
}



