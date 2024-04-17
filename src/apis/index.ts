import request from "@/utils/request";

/**
 * 获取首页配置项
 */

export function getHomeConfig<T>() {
  return request.get<T>("/index/config");
}
