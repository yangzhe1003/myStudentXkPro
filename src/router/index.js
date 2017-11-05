import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/pages/student/index'
import StudentInfo from '@/pages/student/info'
import Class from '@/pages/class/index'
import ClassInfo from '@/pages/class/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/student',
      component: Student,
      children:[{
        path: 'info',
        component: StudentInfo
      }]
    },
    {
      path: '/class',
      component: Class,
      children:[{
        path: 'info',
        component: ClassInfo
      }]
    }
  ]
})
