import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aHelper: new ActionHelper(),
    showEdit: false,//编辑框显示
    transMemo: null,//储存编辑项
    showItem: -1//要展示的列表
  },
  mutations: {
    showEdit(state: any): void {
      state.showEdit = !state.showEdit
    },
    editItem(state: any, payload: any): void {
      state.transMemo = payload
    },
    showList(state: any, payload): any {
      if (payload == '2-1') {
        state.showItem = 0
      } else if (payload == '2-2') {
        state.showItem = 1
      } else if (payload == '2-3') {
        state.showItem = 2
      } else {
        state.showItem = -1
      }
    }
  },
  actions: {

  },
  modules: {
  }
})
