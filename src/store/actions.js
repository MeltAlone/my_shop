// 异步并通过mutation更新state

import {
  RECEIVE_ADDRESS,
  RECEIVE_TYPES,
  RECEIVE_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

export default {
  // 异步请求地址
  async getAddress ({ commit, state }) {
    let geo = `${state.latitude},${state.longitude}`;
    const result = await reqAddress(geo);
    // 请求成功提交mutation
    if(result.code === 0){
      const address = result.data;
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  // 异步请求食物类型
  async getFoodTypes ({ commit }) {
    const result = await reqFoodCategorys();
    // 请求成功提交mutation
    if(result.code === 0){
      const types = result.data;
      commit(RECEIVE_TYPES, { types })
    }
  },

  // 异步请求地址
  async getShops ({ commit, state }) {
    let { longitude, latitude } = state;
    const result = await reqShops(longitude, latitude);
    // 请求成功提交mutation
    if(result.code === 0){
      const shops = result.data;
      commit(RECEIVE_SHOPS, { shops })
    }
  }
}
