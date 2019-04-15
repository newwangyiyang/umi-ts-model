import axiosJson from '@/utils/axiosJson'

export const createUrlForCode = () => axiosJson.post('/wx/cp/createUrlForCode')