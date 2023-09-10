<template>
  <div>
    <div class="box-top">
      <div class="top-title"><span></span>课程列表</div>
      <div class="search-btn" @click="getCourseList">获取课程信息</div>
      <div class="add-btn" @click="addCourse">新增</div>
    </div>
  </div>
  <!-- <h3>课程列表</h3>
  <el-button type="primary" @click="getCourseList">获取课程信息</el-button>
  <el-button type="primary" @click="addCourse">新增</el-button> -->

  <!-- <table class="table">
      <thead>
        <tr>
          <td>学号</td>
          <td>姓名</td>
          <td>性别</td>
          <td>gpa</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stu in studentList" :key="stu.id">
          <td>{{ stu.id }}</td>
          <td>{{ stu.name }}</td>
          <td>{{ stu.gender }}</td>
          <td>{{ stu.gpa }}</td>
        </tr>
      </tbody>
    </table> -->
  <!-- <p>{{ studentList }}</p> -->
  <el-table :data="courses" stripe style="width: 100%">
    <el-table-column prop="id" label="课程号">
      <template #default="scope">
        <el-input
          v-if="scope.row.isEdit"
          v-model="scope.row.id"
          type="text"
          placeholder="请填写"
        />
        <span v-else>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="课程名">
      <template #default="scope">
        <el-input
          v-if="scope.row.isEdit"
          v-model="scope.row.name"
          type="text"
          placeholder="请填写"
        />
        <span v-else>{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="credit" label="学分">
      <template #default="scope">
        <el-input
          v-if="scope.row.isEdit"
          v-model="scope.row.credit"
          type="number"
          placeholder="请填写"
        />
        <span v-else>{{ scope.row.credit }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right">
      <template #default="scope">
        <div v-if="scope.row.isEdit">
          <el-button type="primary" @click="handleRowSave(scope.row)"
            >保存</el-button
          >
          <el-button
            type="danger"
            @click="handleRowCancel(scope.row, scope.$index)"
            >取消</el-button
          >
        </div>
        <div v-else>
          <el-button type="primary" @click="handleRowEdit(scope.row)"
            >编辑</el-button
          >
          <el-button type="danger" @click="handleRowDelete(scope.$index)"
            >删除</el-button
          >
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import axios from "axios";
import { set } from "lodash-es";

export default {
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    handleRowEdit(row) {
      set(row, "isEdit", true);
    },

    getCourseList() {
      axios({
        url: "http://localhost:8201/course",
        method: "GET",
        // eslint-disable-next-line no-unused-vars
      }).then((res) => {
        console.log(res.data);
        this.courses = res.data;
      });
    },
    handleRowDelete(index) {
      var item = this.courses[index];
      console.log(item);
      axios({
        url: "http://localhost:8201/deletecourse",
        method: "DELETE",
        data: {
          id: item.id,
          name: "",

          credit: 0,
        },
        // eslint-disable-next-line no-unused-vars
      }).then((res) => {
        console.log(res.data);
        // 如删除成功，在表格中删除该行
        this.courses.splice(index, 1);
      });
    },
    // 新增联络人
    addCourse() {
      this.courses.push({
        id: "",
        name: "",
        credit: 0,

        isEdit: true, // 当这个值为true时表示可以编辑
        isNew: true,
      });
    },
    handleRowUpdate(row) {
      console.log(row);
      axios({
        url: "http://localhost:8201/updatecourse",
        method: "PUT",
        data: {
          id: row.id,
          name: row.name,
          credit: row.credit,
        },
        // eslint-disable-next-line no-unused-vars
      }).then((res) => {
        console.log(res.data);
        row.isEdit = false;
      });
    },

    handleRowInsert(row) {
      //this.students.splice(index, 1)
      // 如何区分是新数据还是旧数据 ?
      console.log(row);
      axios({
        url: "http://localhost:8201/addcourse",
        method: "POST",
        data: {
          id: row.id,
          name: row.name,
          credit: row.credit,
        },
        // eslint-disable-next-line no-unused-vars
      }).then((res) => {
        console.log(res.data);
        row.isEdit = false;
        row.isNew = false;
      });
    },

    handleRowSave(row) {
      //this.students.splice(index, 1)
      // 如何区分是新数据还是旧数据 ?
      console.log(row);
      if (row.isNew) {
        this.handleRowInsert(row);
      } else {
        this.handleRowUpdate(row);
      }
    },
    handleRowCancel(row, index) {
      if (row.isNew) this.courses.splice(index, 1);
      else {
        // TODO: 恢复单个学生数据
        set(row, "isEdit", false);
      }
    },
  },
};
</script>
