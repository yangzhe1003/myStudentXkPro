<template lang="html">
  <div class="ClassInfo">
    <el-row>
      <el-col :span="6">
        <el-input v-model="keywords" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="18" class="options">
        <el-button type="primary" round>单个录入</el-button>
        <el-button type="success" round>批量导入</el-button>
      </el-col>
    </el-row>

    <el-row class="context">
      <el-col>
        <el-table
          :data="classes"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名">
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


  </div>
</template>

<script>
import Vuex from 'vuex';
export default {
  name:'ClassInfo',
  data(){
    return {
      msg:'this is class',
      keywords:''
    }
  },
  created(){
    this.findAllClasses();
  },
  computed:{
    ...Vuex.mapGetters(['classes'])
  },
  methods:{
    ...Vuex.mapActions(['findAllClasses'])
  }

}

</script>

<style lang="css" scoped>
  .options{
    text-align: right;
  }

  .ClassInfo{
    margin: 20px;
  }

  .context{
    margin: 20px;
  }
</style>
