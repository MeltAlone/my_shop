// 更新state

import {
  RECEIVE_ADDRESS,
  RECEIVE_TYPES,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, { address }){
    state.address = address
  },
  [RECEIVE_TYPES] (state, { types }){
    state.types = types
  },
  [RECEIVE_SHOPS] (state, { shops }){
    state.shops = shops
  }
}
