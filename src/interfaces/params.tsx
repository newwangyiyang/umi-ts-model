
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

