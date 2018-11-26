<template>
<div class="login_wrap">
  <el-form label-position="top" label-width="80px" :model="formData" class="login_form">
    <h2>用户登录</h2>
    <el-form-item label="用户名">
      <el-input v-model="formData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formData.password" type ="password"></el-input>
    </el-form-item>
    <el-button type="primary" class="login_btn">登录</el-button>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style>
.login_wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_form {
  width: 500px;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
}
.login_btn{
  width: 100%;
}
</style>
