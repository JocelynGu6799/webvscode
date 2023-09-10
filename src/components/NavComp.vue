<template>
  <div class="aside">
    <el-menu :default-active="$route.name" class="el-menu-vertical" router>
      <el-menu-item index="student">
        <div class="menu-item">
          <User style="width: 1em; height: 1em; margin-right: 8px" />
          <span>学生管理</span>
        </div>
      </el-menu-item>
      <el-menu-item index="course">
        <div class="menu-item">
          <Notebook style="width: 1em; height: 1em; margin-right: 8px" />
          <span>课程信息</span>
        </div>
      </el-menu-item>
      <el-menu-item index="score">
        <div class="menu-item">
          <Edit style="width: 1em; height: 1em; margin-right: 8px" />
          <span>成绩管理</span>
        </div>
      </el-menu-item>
      <el-menu-item index="data-analysis">
        <div class="menu-item">
          <DataLine style="width: 1em; height: 1em; margin-right: 8px" />
          <span>数据分析</span>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavComp",
};
</script>

<style scoped>
.aside {
  padding: 60px 0;
}
.el-menu-item {
  justify-content: center;
  line-height: normal;
  margin-bottom: 30px;
}
.el-menu-item:hover {
  background-color: transparent;
}
.el-menu-item.is-active {
  color: #303133;
}
.menu-item {
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 5px;
}
.el-menu-item:hover .menu-item {
  border-color: #303133;
}
.el-menu-item.is-active .menu-item {
  border-color: #d2d7e3;
  background-color: #d2d7e3;
}
</style>
