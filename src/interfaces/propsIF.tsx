import { RcFormPropsIF } from './params';
import { RouteComponentProps } from 'react-router';
import { ListModelModelIF } from './modelIF';
/**
 * 重新定义 (重构) RouteComponentProps 中location属性的数据类型 
 * 泛型T表示location=>query中的属性结构及类型
 *
 * @export
 * @interface UrlLocationQueryIF
 */
export interface UrlLocationQueryIF<T> {
    hash: string
    pathname: string
    search: string
    state: string | undefined
    query: T
}



/**
 * login页面的props
 *
 * @export
 * @interface LoginPropsIF
 */
export interface LoginPropsIF {
    content: string
    size: number,
    form: RcFormPropsIF
}

/**
 * List路由中 : 冒号后面的参数
 *
 * @export
 * @interface ListUrlMatchParamIF
 */
export interface ListUrlMatchParamIF {
    id: string
}
/**
 * List路由中 ? 号后面的参数
 *
 * @export
 * @interface ListUrlLocationIF
 */
export interface ListUrlLocationIF {
    name: string | undefined
}
/**
 * props中router的数据类型定义
 * 
 * http://localhost:3000/list/:id?name=321
 * 获取params及query传递的参数
 * props.match.params.id
 * props.location.query.name
 *
 * @export
 * @interface ListUrlRouterPropsIF
 * @extends {RouteComponentProps<ListUrlMatchParamIF>}
 */
export interface ListUrlRouterPropsIF extends RouteComponentProps<ListUrlMatchParamIF> {
    location: UrlLocationQueryIF<ListUrlLocationIF>
}
/**
 * listModel页面的props
 *
 * @export
 * @interface ListModelPropsIF
 * @extends {RouteComponentProps}
 */
export interface ListModelPropsIF extends RouteComponentProps {
    dispatch: Function,
    listModel: ListModelModelIF
}

/**
 * 纯函数式组件
 *
 * @export
 * @interface FuncComponentIF
 */
export interface FuncComponentIF {
    one: string
    two: number
}

