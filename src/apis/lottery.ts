import request from "@/utils/request";

/**
 * 获取抽奖商品列表
 */

export function getLotteryProducts<T>() {
  return request.get<T>("/lottery/getProductList");
}

/**
 * 抽奖结果
 */

export function getLotteryDraw<T>() {
  return request.get<T>("/lottery/draw");
}
