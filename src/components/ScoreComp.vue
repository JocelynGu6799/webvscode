<template>
  <div>
    <div class="box-top">
      <div class="top-title"><span></span>课程列表</div>
      <div class="search-btn" @click="getScoreList">获取学生成绩信息</div>
      <div class="add-btn" @click="addScore">新增</div>
    </div>
    <!-- <h3>学生成绩管理</h3>
    <el-button type="primary" @click="getScoreList">获取学生成绩信息</el-button>
    <el-button type="primary" @click="addScore">新增</el-button> -->

    <el-table :data="scores_page" stripe style="width: 100%">
      <el-table-column prop="id" label="学生学号">
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
      <el-table-column prop="cid" label="课程号">
        <template #default="scope">
          <el-input
            v-if="scope.row.isEdit"
            v-model="scope.row.cid"
            type="text"
            placeholder="请填写"
          />
          <span v-else>{{ scope.row.cid }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="score" label="分数">
        <template #default="scope">
          <el-input
            v-if="scope.row.isEdit"
            v-model="scope.row.score"
            type="number"
            placeholder="请填写"
          />
          <span v-else>{{ scope.row.score }}</span>
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
        :total="scores.length"
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
      scores: [],
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    handleRowEdit(row) {
      set(row, "isEdit", true);
    },

    getScoreList() {
      axios
        .get("http://localhost:8201/score")
        .then((res) => {
          console.log(res.data);
          this.scores = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleRowDelete(row) {
      console.log(row);
      axios
        .delete("http://localhost:8201/deletescore", { data: { id: row.id } })
        .then((res) => {
          console.log(res.data);
          // 如果删除成功，从数组中删除该学生
          const index = this.scores.findIndex((score) => score.id === row.id);
          if (index !== -1) {
            this.scores.splice(index, 1);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addScore() {
      this.scores.push({
        id: "",
        cid: "",
        score: 0,
        isEdit: true,
        isNew: true,
      });
    },

    handleRowUpdate(row) {
      console.log(row);
      axios
        .put("http://localhost:8201/updatescore", row)
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
        .post("http://localhost:8201/addscore", row)
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
        this.scores.splice(index, 1);
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
    scores_page() {
      return this.scores.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
};
</script>

<style>
.el-pagination {
  justify-content: center;
}
</style>
