import { Global01IF, ModelAllIF } from "@/interfaces/modelIF";
import { EffectsPCEIF } from '@/interfaces/params';
import { createUrlForCode } from '@/api/global01';

const state: Global01IF = {
    name01: 'one+++++++',
    age01: 1
}

export default {
    state,
    reducers: {
        SET_NAME01(state: Global01IF, {payload: name01}: {payload: string}) {
            console.log(name01)
            return {...state, name01}
        }
    },
    effects: {
        *getUrl({payload}: {payload: string}, {put, call, select}: EffectsPCEIF) {
            const g = yield select((state: ModelAllIF) => {
                console.log(state)
                return state.dvaDemo01
            })
            console.log(g)
            const res = yield call(createUrlForCode)
            console.log(res)
            yield put({type: 'SET_NAME01', payload: res.data})
        }
    }
}
