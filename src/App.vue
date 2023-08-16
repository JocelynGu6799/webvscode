<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <div id="app">
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
  name: 'App',
  components: {
    // HelloWorld,
    // StudentComp,
    // ContainerComp
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
