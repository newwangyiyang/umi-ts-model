import { ListModelModelIF } from '@/interfaces/modelIF';
import { Action } from 'redux';
import { EffectsPCEIF } from '@/interfaces/params';
import { getAllHcData } from '@/api/list';
import _ from 'lodash'
import { ListItemStateIF } from '@/interfaces/stateIF';

let state: ListModelModelIF = {
    listData: []
}

export default {
    state,
    reducers: {
        SET_LIST(state: ListModelModelIF, {payload: listData}: {payload: ListItemStateIF[]}) {
            return {...state, listData}
        }
    },
    effects: {
        *getListData(action: Action, {put, call, select}: EffectsPCEIF) {
            const {data}: {data:Ajax.AjaxResponse} = yield call(getAllHcData)
            if(_.eq(data.code, 0)) {
                yield put({
                    type: 'SET_LIST',
                    payload: data.data
                })
            }
        }
    }
}
