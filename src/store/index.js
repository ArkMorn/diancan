import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state = {
  countList:{},
  shopId:'',
  num:''
}
const mutations = {
  setCount(state, value) {
    state.countList.value[0] = value[1]
  },
  setShopId(state, value) {
    state.shopId = value
  },
  setNum(state, value) {
    state.num = value
  },
}
export default new Vuex.Store({
  state,
  mutations
})
