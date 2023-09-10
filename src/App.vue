<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <div id="app" class="app-box">
    <!-- <ContainerComp></ContainerComp> -->
    <!-- <StudentComp></StudentComp> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import ContainerComp from './components/ContainerComp.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import StudentComp from './components/StudentComp.vue';
export default {
  name: "App",
  components: {
    // HelloWorld,
    // StudentComp,
    // ContainerComp
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.app-box {
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.el-pagination {
  justify-content: center;
}

.box-top {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.top-title {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 22px;
  line-height: normal;
}
.top-title span {
  width: 14px;
  height: 14px;
  background-color: #6883ae;
  border-radius: 50%;
  margin-right: 10px;
}
.search-btn,
.add-btn {
  padding: 8px 15px;
  background-color: #6883ae;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.search-btn {
  margin-right: 10px;
}
</style>
