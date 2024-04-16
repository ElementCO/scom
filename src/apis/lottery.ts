import request from "@/utils/request";

/**
 * 获取抽奖商品列表
 */

export function getLotteryProducts() {
  return request.get("/lottery/getProductList");
}
