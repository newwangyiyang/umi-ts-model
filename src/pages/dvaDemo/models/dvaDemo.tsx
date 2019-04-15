import { DvaDemoIF } from '@/interfaces/modelIF';

const state: DvaDemoIF = {
    dvaDemoName: '王一扬dvaDemo',
    dvaDemoTime: new Date(),
    dvaDemoState: 100
}

export default {
    state,
    reducers: {
        CHANGESTATE(state: DvaDemoIF, {payload: dvaDemoName}: {payload: string}) {
            return {...state, dvaDemoName}
        }
    }
}