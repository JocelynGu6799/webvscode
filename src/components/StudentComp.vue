<template>
  <div>
    <div class="box-top">
      <div class="top-title"><span></span>学生成绩列表</div>
      <div class="search-btn" @click="getStudentList">获取学生信息</div>
      <div class="add-btn" @click="addStudent">新增</div>
      <!-- <el-button type="primary" @click="getStudentList">获取学生信息</el-button>
      <el-button type="primary" @click="addStudent">新增</el-button> -->
    </div>

    <el-table :data="students_page" stripe style="width: 100%">
      <el-table-column prop="id" label="学号">
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
      <el-table-column prop="name" label="姓名">
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
      <el-table-column prop="gender" label="性别">
        <template #default="scope">
          <el-input
            v-if="scope.row.isEdit"
            v-model="scope.row.gender"
            type="text"
            placeholder="请填写"
          />
          <span v-else>{{ scope.row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="gpa" label="绩点">
        <template #default="scope">
          <el-input
            v-if="scope.row.isEdit"
            v-model="scope.row.gpa"
            type="number"
            placeholder="请填写"
          />
          <span v-else>{{ scope.row.gpa }}</span>
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
            <el-button type="danger" @click="handleRowDelete(scope.row)"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="students.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { set } from "lodash-es";

export default {
  data() {
    return {
      students: [],
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    handleRowEdit(row) {
      set(row, "isEdit", true);
    },

    getStudentList() {
      axios
        .get("http://localhost:8201/student")
        .then((res) => {
          console.log(res.data);
          this.students = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleRowDelete(row) {
      console.log(row);
      axios
        .delete("http://localhost:8201/deletestudent", { data: { id: row.id } })
        .then((res) => {
          console.log(res.data);
          // 如果删除成功，从数组中删除该学生
          const index = this.students.findIndex(
            (student) => student.id === row.id
          );
          if (index !== -1) {
            this.students.splice(index, 1);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addStudent() {
      this.students.push({
        id: "",
        name: "",
        gender: "",
        gpa: "",
        isEdit: true,
        isNew: true,
      });
    },

    handleRowUpdate(row) {
      console.log(row);
      axios
        .put("http://localhost:8201/updatestudent", row)
        .then((res) => {
          console.log(res.data);
          row.isEdit = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleRowInsert(row) {
      console.log(row);
      axios
        .post("http://localhost:8201/addstudent", row)
        .then((res) => {
          console.log(res.data);
          row.isEdit = false;
          row.isNew = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleRowSave(row) {
      console.log(row);
      if (row.isNew) {
        this.handleRowInsert(row);
      } else {
        this.handleRowUpdate(row);
      }
    },

    handleRowCancel(row, index) {
      if (row.isNew) {
        this.students.splice(index, 1);
      } else {
        row.isEdit = false;
      }
    },

    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },

    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
    },
  },
  computed: {
    students_page() {
      return this.students.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
};
</script>
