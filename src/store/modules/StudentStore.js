import axios from 'axios';
import moment from 'moment';
export default{
  state:{
    students:[]
  },
  getters:{
    students:state=>state.students

  },
  mutations:{
    alertStudent(state,data){
      state.students = data;
    }
  },
  actions:{
    findAllStudent(context){
      axios.get('http://127.0.0.1:3000/student/findAll').then(({data})=>{
        console.log(data);
        data.forEach((item,index)=>{
          item.birth = moment(item.birth).format('YYYY-MM-DD');
        });
        context.commit('alertStudent',data);

      }).catch((error)=>{
        console.log(error);
      });
    },
    saveStudent(context,form){
      return new Promise((resolve,reject)=>{
        axios.post('http://127.0.0.1:3000/student/save',form).then((result)=>{
          context.dispatch('findAllStudent');
          resolve(result);
        }).catch((error)=>{
          reject(error);
        });
      });

    }
  }
}
