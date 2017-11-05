<template lang="html">
  <div class="StudentInfo">
    <el-row>
      <el-col :span="6">
        <el-input v-model="keywords" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="18" class="options">
        <el-button type="primary" @click="SingleSave" round>单个录入</el-button>
        <el-button type="success" round>批量导入</el-button>
      </el-col>
    </el-row>

    <el-row class="context">
      <el-col>
        <el-table
          :data="students"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="birth"
            label="出生日期">
          </el-table-column>
          <el-table-column
            prop="class_id"
            label="班级">
          </el-table-column>
          <el-table-column
            prop="password"
            label="密码">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>


    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="学生姓名">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="学生性别" >
          <el-radio-group v-model="form.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期" >
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="班级" >
          <el-select v-model="form.class_id" placeholder="请选择">
            <el-option
              v-for="item in classes"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码" >
          <el-input v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveSubmit">确 定</el-button>
      </div>
      {{form}}
    </el-dialog>
  </div>
</template>

<script>
import Vuex from 'vuex';
import axios from 'axios';
import moment from 'moment';
export default {
  computed:{
    ...Vuex.mapGetters(['students','classes']),
  },
  name:'StudentInfo',
  data:function () {
    return {
      keywords:'',
      dialogFormVisible:false,
      form:{},
      title:'提示框'
    }
  },
  created:function(){
    this.findAllStudent();

    this.findAllClasses();
  },
  methods:{
    ...Vuex.mapActions(['findAllStudent','findAllClasses','saveStudent']),
    SingleSave(){
      this.dialogFormVisible = true;
      this.form={
          gender:'男',
      };
      this.title = '单个录入学生信息';
    },
    saveSubmit(){
      this.dialogFormVisible = false;
      var vm = this;
      this.form.birth = moment(this.form.birth).format('YYYY-MM-DD');
      this.saveStudent(this.form).then((result)=>{
        if(result.data.code){
          vm.$message({
            type: 'info',
            message: '保存失败'
          })
        }else{
          vm.$message({
            type: 'success',
            message: '保存成功!'
          })
        }

      }).catch((error)=>{
        vm.$message({
          type: 'info',
          message: '保存失败'
        })
      });
    }
  }
}
</script>

<style lang="css" scoped>
  .options{
    text-align: right;
  }

  .StudentInfo{
    margin: 20px;
  }

  .context{
    margin: 20px;
  }
</style>
