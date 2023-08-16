<template>
  <div class="aside">
    <el-menu
      :default-active="$route.name"
      class="el-menu-vertical"
      router
    >
      <el-menu-item index="student">
        <User style="width: 1em; height: 1em; margin-right: 8px" />
        <span>学生管理</span>
      </el-menu-item>
      <el-menu-item index="course">
        <Notebook style="width: 1em; height: 1em; margin-right: 8px" />
        <span>课程信息</span>
      </el-menu-item>
      <el-menu-item index="score">
        <Edit style="width: 1em; height: 1em; margin-right: 8px" />
        <span>成绩管理</span>
      </el-menu-item>
      <el-menu-item index="data-analysis">
        <DataLine style="width: 1em; height: 1em; margin-right: 8px" />
        <span>数据分析</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavComp"
}
</script>
