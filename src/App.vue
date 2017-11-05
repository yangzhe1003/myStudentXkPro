<template>
  <div id="app">
    <header>
      <el-row>
        <el-col :span="4" class="title el-icon-upload">&nbsp;&nbsp;选课系统</el-col>
        <el-col :span="20"></el-col>
      </el-row>


    </header>
    <article>
      <el-row>
        <el-col :span="4" class="navLeft">
          <el-menu
            unique-opened = true
            router = true
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="/student">
              <template slot="title">
                <i class="el-icon-service"></i>
                <span>学生管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/student/info">档案</el-menu-item>
                <el-menu-item index="/student/course">成绩</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 班级管理 -->
            <el-submenu index="/class">
              <template slot="title">
                <i class="el-icon-share"></i>
                <span>班级管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/class/info">档案</el-menu-item>
                <el-menu-item index="/class/course">成绩</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 课程管理 -->
            <el-submenu index="/course">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>课程管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/course/info">档案</el-menu-item>
                <el-menu-item index="/course/course">成绩</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 选课管理 -->
            <el-submenu index="/studentCourse">
              <template slot="title">
                <i class="el-icon-star-off"></i>
                <span>选课管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/studentCourse/info">档案</el-menu-item>
                <el-menu-item index="/studentCourse/course">成绩</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-col>
        <el-col :span="20" class="container">
          <router-view></router-view>
        </el-col>
      </el-row>
    </article>


  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'app',
  mounted:function () {
    $('.navLeft').height($(window).height()-58);
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  header{
    background: #1f2d3d;
    color: #fff;
  }

  header .title{
    height: 58px;
    line-height: 58px;
    text-align: center;
    font-size: 20px;
  }

  article .navLeft{
    background-color:#545c64;
  }


</style>
