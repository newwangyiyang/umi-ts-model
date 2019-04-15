import { GlobalModelIF, ModelAllIF, ListModelModelIF } from "@/interfaces/modelIF";
import { Action } from 'redux';
import { EffectsPCEIF } from '@/interfaces/params';
import { ListItemStateIF } from '@/interfaces/stateIF';

const state: GlobalModelIF = {
    name: '李宝宝',
    userId: 'qwer',
    openId: 'wangyiyang',
    headerUrl: 'http://img.52z.com/upload/news/image/20180213/20180213062641_35687.jpg',
    age: 27,
    createtime: new Date(),
    list: []
}

export default {
    state,
    reducers: {
        ADD_AGE(state: GlobalModelIF, {payload: age}: {payload: number}) {
            return {...state, age}
        },
        SET_LIST(state: GlobalModelIF, {payload: list}: {payload: ListItemStateIF[]}) {
            return {...state, list}
        }
    },
    effects: {
        *getListData(action: Action, {put, call, select}: EffectsPCEIF) { // 获取listModel页面中的数据list
            // 由于dva的model会按需加载，所以listModel必须先加载再访问ShowGlobalModel页面
            const list: ListModelModelIF = yield select((state: ModelAllIF) => {
                return state.listModel
            })
            yield put({
                type: 'SET_LIST',
                payload: (list && list.listData) || []
            })
        }
    }
}

