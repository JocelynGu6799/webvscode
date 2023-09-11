<script setup>
import { reactive, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter(); // 导入和使用 Vue Router
// import request from "@/utils/request";
// import { ElMessage } from "element-plus";
// import { useUserStore } from "@/stores/user";
const loginData = reactive({});
const rules = reactive({
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 20, message: "密码长度在3-20位", trigger: "blur" },
  ],
});
const ruleFormRef = ref();
const login = () => {
  ruleFormRef.value.validate((valid) => {
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
    console.log(valid);
  });
  if (loginData.username === "admin" && loginData.password === "123456") {
    router.push("/main");
  } else {
    alert("用户名或密码错误");
  }
};
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
            placeholder="请输入账号"
            :prefix-icon="User"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model.trim="loginData.password"
            autocomplete="off"
            placeholder="请输入密码"
            :prefix-icon="Lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
          <a style="width: 100%" class="login-button" @click="login">
            立即登录
          </a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>

.login-button{
  display:inline-block;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-decoration: none;
  font-family: 微软雅黑;
  font-weight: 550;
  font-size: 1.5em;
  padding: 0.2em 0.6em;
  color: #6b80a7;
  border: 0.1em solid #6b80a7;
  border-radius: 1em;
  transition: 3s;

}
.login-button::before,
.login-button::after{
  content: "";
  position: absolute;
  top: -4em;
  z-index: -1;
  width: 200%;
  aspect-ratio: 1;
  border: none;
  border-radius: 40%;
  background-color: rgba(107,128,167,0.8);
  transition: 3s;
}

.login-button::before{
  left: -80%;
  transform: translate3d(0,7em,0) rotate(-340deg);
}

.login-button::after{
  right: -80%;
  transform: translate3d(0,7em,0) rotate(390deg);
}git pull origin master

.login-button:hover,
.login-button:focus{
  color: white;
}

.login-button:hover::before,
.login-button:hover::after,
.login-button:focus::before,
.login-button:focus::after{
  transform: none;
  background-color: rgba(107,128,167,0.8);

}

.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
  /* background-image: url("../assets/bg.jpg"); */
}
.login-container {
  width: 420px;
  height: 440px;
  background-color: #fff;
  border-radius: 20px;
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
