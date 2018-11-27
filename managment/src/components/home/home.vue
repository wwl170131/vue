<template>
  <el-container>
    <el-header>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <img src="@/assets/images/logo.png" alt>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <h2>传智后台管理系统</h2>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <a @click.prevent="logOut()">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <el-menu :unique-opened="true" :router="true">
          <!-- 1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-location"></i>用户列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-circle-check"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <i class="el-icon-circle-check"></i>角色列表
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-circle-check"></i>权限列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <i class="el-icon-news"></i>商品列表
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-news"></i>分类参数
              </el-menu-item>
              <el-menu-item index="3-3">
                <i class="el-icon-news"></i>商品分类
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-date"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">
                <i class="el-icon-date"></i>订单列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-bell"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <i class="el-icon-bell"></i>数据报表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // newVue之前自动触发beforeCreate
  // 在页面还没有加载之前,先检查是否有token.没有就跳转到login页面
  beforeCreate() {
    // 获取token ------*****要在login中设置token*****
    const token = localStorage.getItem('token');
    if (!token) {
      // 没有token ->登录去
      this.$router.push({ name: 'login' });
    }
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$message.success("退出成功");
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style>
.el-container {
  background-color: #ccc;
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
}

.el-header h2 {
  padding: 10px 70px;
}

.el-header a {
  display: block;
  text-decoration: none;
  padding: 15px 30px;
}

.el-aside {
  background-color: #fff;
}

.el-main {
  background-color: #e9eef3;
}
</style>
