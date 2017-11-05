import Vue from 'vue';
import Vuex from 'vuex';
import StudentStore from './modules/StudentStore';
import ClassStore from './modules/ClassStore';
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    StudentStore,
    ClassStore
  }
});
