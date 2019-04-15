import axiosJson from "@/utils/axiosJson";


// https://www.buchang.com/SixPromotionWar/promotion/hcDiseasesClassificationEntity/getAllHcData
/**
 * 获取列表详细数据
 */
export const getAllHcData = () => axiosJson.post('SixPromotionWar/promotion/hcDiseasesClassificationEntity/getAllHcData')