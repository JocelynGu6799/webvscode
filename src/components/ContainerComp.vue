<template>
    <div class="common-layout">
        <div class="common-layout">
      <el-container>
        <el-header>
          <h1>学生成绩管理系统</h1>
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
        </el-header>
        <el-container>
          <el-aside width="200px"><NavComp/></el-aside>
          <el-main><router-view/></el-main>
        </el-container>
      </el-container>
    </div>
        
    </div>
</template>
<script>
import NavComp from './NavComp.vue';
export default{
    name:'ContainerComp',
    components:{
        NavComp
    }
}
</script>