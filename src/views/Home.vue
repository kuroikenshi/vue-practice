<template>
  <div>    
    <div class="home" v-if="true">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    
    <!-- 布局 -->
    <div v-if="true">
      <el-row :gutter="20" >
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4" :offset="1"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6" :offset="1"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8" :offset="1"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
    </div>
    
    <!-- 容器 -->
    <div v-if="true">
      <el-container>
        <el-header><i class="el-icon-star-on"></i>Header</el-header>
        <el-container>
          <el-aside width="200px"><i class="el-icon-eleme"></i>Aside</el-aside>
          <el-main>
            <i class="el-icon-loading"></i>Loading...
            <el-button type="success" icon="el-icon-check" circle></el-button>
          </el-main>
        </el-container>
      </el-container>
    </div>
    
    <!-- 表格 -->
    <DemoVXETable v-if="true"></DemoVXETable>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DemoVXETable from '@/components/DemoVXETable.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    DemoVXETable
  },
  methods: {}
}
</script>

<style>
  /* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
