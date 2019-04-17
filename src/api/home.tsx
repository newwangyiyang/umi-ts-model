import axios from '@/utils/axiosForm'
import { HomeStateIF } from '@/interfaces/stateIF';


// /api/cusInfoInterface/getCusInfoList
export const getCusInfoList = (json: HomeStateIF) => axios.get('/api/cusInfoInterface/getCusInfoList', {params: json})

