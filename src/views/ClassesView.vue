<template>
<div class="single-table-container">
  <!-- 搜索工作栏 -->
  <json-query-form :config="config" :queryParams.sync="queryParams" @queryTable="page"/>
  <!-- 操作工具栏 -->
  <div v-show="config.toolBar.show">
    <el-row :gutter="10" class="mb8" style="display: flex">
      <left-toolbar :config="config" :queryParams="queryParams" @queryTable="page"/>
      <right-toolbar :show-search.sync="config.query.show" :config="config" @queryTable="page"/>
    </el-row>
  </div>
  <json-table :config="config" :loading.sync="loading" :total.sync="total" :list.sync="list"
              :queryParams="queryParams"
              @queryTable="page">
    <template v-slot:extra-columns>
    <el-table-column label="Detail" class-name="small-padding fixed-width">
      <template v-slot="scope">
      <a :href="getDetail(scope.row['detailsUrl'])">Details</a>
      </template>
    </el-table-column>
    <el-table-column label="Source" class-name="small-padding fixed-width">
      <template v-slot="scope">
      <a :href="(scope.row['sourcesUrl'])">Sources</a>
      </template>
    </el-table-column>
    </template>
  </json-table>
</div>
</template>


<script>
import {pageRecord,} from 'json-to-element-ui/src/components/JsonTable/tableToJson'
import config from './CourseSingleTableViewConfig'
import api from "../api/"

export default {
  name: "ClassesView",
  data() {
    return {
      //配置信息
      config,
      // 遮罩层
      loading: true,
      // 总条数
      total: 0,
      // 列表
      list: [],
      // 查询参数
      queryParams: {
        pageNo: 1,
        pageSize: 10,
      },
    }
  },
  created() {

    this.initializeQueryParams();
    this.queryParams.institution = this.$route.query.i;
    this.queryParams.term = this.$route.query.s;
    this.page()
  },
  methods: {
    initializeQueryParams() {
      this.config.query.items.forEach(item => {
        this.$set(this.queryParams, item.key, null);
      });
      this.queryParams = {
        ...this.queryParams,
        ...this.config.query.operator
      };
    },
    /** 分页 */
    page() {
      this.loading = true;
      // 执行查询
      pageRecord(this.config.pageUri, this.$request, this.queryParams).then(response => {
        this.total = response.data.data.total;
        let list = response.data.data.list;
        // 使用 Promise.all 并行获取每个课程的备注信息

        const remarkPromises = list.map(item => api.getRemarkByCourseId(item.id));

        Promise.all(remarkPromises)
          .then(remarks => {
            // 将获取到的备注信息与课程列表数据合并
            list = list.map((item, index) => {
              let response = remarks[index];
              if (response.data.data) {
                let remark = response.data.data.remark;
                if (remark) {
                  item.remark = remark;
                } else {
                  item.remark = "";
                }
              }
              return item;
            });
            this.list = list;
            this.loading = false;
          })
          .catch(error => {
            console.error("Error:", error);
            this.loading = false;
          });
      })
    },
    getDetail(part) {
      // console.log(part)
      //./avail.class?i=KAP&t=202410&c=31141
      return "https://www.sis.hawaii.edu/uhdad/" + part;
    },

    updateData(url) {
      this.$modal.msg("updating...")
      // this.$modal.notify("updating...")
      api.updateClassesFromUrl(url).then(response => {
        if (response.data) {
          this.$modal.msgSuccess("successed")
        } else {
          this.$modal.msgSuccess("failed")
        }
      });
    }
  },
}
</script>

<style scoped>

</style>