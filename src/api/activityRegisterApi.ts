import axiosJson from '../utils/axiosJson';

// 新增申报表 addActivityRegister
export const addActivityRegister = (json: any) => axiosJson.post('/aregister/activityRegistrationEntity/addActivityRegister', json)
