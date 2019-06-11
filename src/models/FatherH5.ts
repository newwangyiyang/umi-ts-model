

export interface FatherH5ModelIF {
    openid: string
    nickname: string
    headimgurl: string
    userId: string
}

const state: FatherH5ModelIF = {
    openid: '',
    nickname: '',
    headimgurl: '',
    userId: '',
}

export default {
    state,
    reducers: {
        INIT_WX_STATE(state: FatherH5ModelIF, {payload}: {payload: {openid: string, nickname: string, headimgurl: string}}) {
            return {...state, ...payload}
        },
        INIT_USERID(state: FatherH5ModelIF, {payload}: {payload: string}) {
            console.log(payload)
            return {...state, payload}
        }
    },
    effects: {}
}
