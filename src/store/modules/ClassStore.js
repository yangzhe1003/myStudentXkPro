import axios from 'axios'
export default{
  state:{
    classes:[]
  },
  getters:{
    classes(state){
        return state.classes;
    }
  },
  mutations:{
    alertClasses(state,data){
      state.classes = data;
    }
  },
  actions:{
    findAllClasses(context){
      axios.get('http://101.132.44.172:30002/class/findAll').then(({data})=>{
        context.commit('alertClasses',data);
      }).catch();
    }
  }
}
