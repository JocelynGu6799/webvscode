<script setup>

import { reactive ,ref} from "vue";
import{User,Lock}from '@element-plus/icons-vue'
import { useRouter } from "vue-router";

const router = useRouter(); // 导入和使用 Vue Router
// import request from "@/utils/request";
// import { ElMessage } from "element-plus";
// import { useUserStore } from "@/stores/user";
   const loginData=reactive({})
   const rules=reactive({
    username:[
        {required:true,message:'请输入账号',trigger:'blur'},
    ],
    password:[
        {required:true,message:'请输入密码',trigger:'blur'},
        {min:3,max:20,message:'密码长度在3-20位',trigger:'blur'}
    ]
   })
   const ruleFormRef=ref()
   const login=()=>{
    ruleFormRef.value.validate(valid =>{
      // if(valid){
      //   request.post('/login',loginData).then(res=>{
      //     if(res.code==='200'){
      //       ElMessage.success('登陆成功')
      //       const userStore=useUserStore()
      //       userStore.setManagerInfo(res.data)
      //     }else{
      //       ElMessage.error(res.msq)
      //     }
      //   })

      // }
      console.log(valid)
    })
    if(loginData.username==="admin"&&loginData.password==="123456"){
      router.push("/main")
    }else{alert("用户名或密码错误")}
    
   }
   
</script>


<template>
     <div class="login-body">
    <div class="login-container">
      <div class="head">
        <!-- <img
          class="logo"
          src="https://s.yezgea02.com/1582958061265/mlogo.png"
        /> -->
        <div class="name">
          <div class="title">学生成绩管理系统</div>
          <!-- <div class="tips">Vue3.0 后台管理系统</div> -->
        </div>
      </div>
      <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="学生登录" name="first"></el-tab-pane>
          <el-tab-pane label="教师登录" name="second"></el-tab-pane>
          <el-tab-pane label="管理登录" name="third"></el-tab-pane>
        </el-tabs>
      </div>
      <el-form
        label-position="top"
        :rules="rules"
        :model="loginData"
        ref="ruleFormRef"
        class="login-form"
        
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model.trim="loginData.username"
            autocomplete="off"
            placeholder="请输入账号" :prefix-icon="User"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model.trim="loginData.password"
            autocomplete="off"
            placeholder="请输入密码" :prefix-icon="Lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
          <el-button style="width: 100%" type="primary" @click="login"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped>
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  /* background-image: url("../assets/bg.jpg"); */
}
.login-container {
  width: 420px;
  height: 440px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
.head .title {
  font-size: 28px;
  color: #1baeae;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  color: #999;
}
.tabs {
  width: 60%;
  margin: 0 auto;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
/* .login-form >>> .el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form >>> .el-form-item {
  margin-bottom: 10px;
} */
</style>