<template>
  <!-- <div class="common-layout"> -->
  <!-- <el-container> -->
  <!-- <el-header>
      <div class="toolbar" style="text-align: right; font-size: 20px">
        <el-dropdown>
          <el-icon style="margin-right: 8px; margin-top: 6px"
            ><setting
          /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>学生</span>
      </div>
    </el-header> -->
  <el-container>
    <el-aside width="200px">
      <div class="side-title">学生信息管理系统</div>
      <NavComp />
    </el-aside>
    <el-main>
      <div class="toolbar" style="text-align: right; font-size: 20px">
        <el-dropdown>
          <el-icon style="margin-right: 8px; margin-top: 6px"
            ><setting
          /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>学生</span>
      </div>

      <div class="main-inner">
        <router-view />
      </div>
    </el-main>
  </el-container>
  <!-- </el-container> -->
  <!-- </div> -->
</template>
<script>
import NavComp from "./NavComp.vue";
export default {
  name: "ContainerComp",
  components: {
    NavComp,
  },
};
</script>

<style scoped>
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  width: 250px;
  height: 100%;
  background-color: #fff;
}
.side-title {
  font-size: 24px;
  padding: 20px 0 15px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}
.el-main {
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  position: relative;
}
.toolbar {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
}
.main-inner {
  flex: 1;
  background-color: #fff;
  border-radius: 15px;
  padding: 15px 30px;
}
</style>
