
/**
 * 定义model层中effects中参数的类型
 *
 * @export
 * @interface EffectsPCEIF
 */
export interface EffectsPCEIF {
    put: Function
    call: Function
    select: Function
}
/**
 * rc-form的this.props.form的类型参数声明
 *
 * @export
 * @interface RcFormPropsIF
 */
export interface RcFormPropsIF {
    getFieldProps: Function
    getFieldValue: Function
    getFieldError: Function
    validateFields: Function
}
/**
 * 定义antd-mobile图片上传的文件类型
 *
 * @export
 * @interface FileInputAntdParamsIF
 */
export interface FileInputAntdParamsIF {
    url: string
    id?: string
    orientation?: number | undefined
    file?: File
}

