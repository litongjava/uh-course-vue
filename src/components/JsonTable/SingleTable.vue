<template>
<div class="app-container">
  <!-- 搜索工作栏 -->
  <el-form :model="queryParams" ref="queryForm" :inline="true" size="small" v-show="showSearch">
    <el-form-item v-for="(item, index) in config.query.items" :key="index" :label="item.name"
                  :prop="item.key" v-show="item.show">

      <el-input v-if="item.type === 'varchar'" v-model="queryParams[item.key]"
                :placeholder="item.placeholder" clearable @keyup.enter.native="handleQuery"/>

      <el-date-picker v-else-if="item.type === 'date'" v-model="queryParams[item.key]"
                      style="width: 240px" value-format="yyyy-MM-dd HH:mm:ss" type="daterange"
                      :range-separator="item.prop.rangeSeparator"
                      :start-placeholder="item.prop.startPlaceholder"
                      :end-placeholder="item.prop.endPlaceholder"
                      :default-time="item.prop.defaultTime"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="handleQuery">
        {{config.query.button.queryButtonName}}
      </el-button>
      <el-button icon="el-icon-refresh" @click="resetQuery">{{config.query.button.resetButtonName}}
      </el-button>
    </el-form-item>
  </el-form>
  <!-- 操作工具栏 -->
  <div v-show="config.toolBar.show">
    <el-row :gutter="10" class="mb8" style="display: flex">
      <el-col :span="1.5" v-show="config.toolBar.addButtonShow">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
        >{{config.toolBar.addButtonName}}
        </el-button>
      </el-col>
      <el-col :span="1.5" v-show="config.toolBar.exportButtonShow">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
        >{{config.toolBar.exportButtonName}}
        </el-button>
      </el-col>
      <el-col :span="1.5" v-show="config.toolBar.exportAllButtonShow">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExportAll"
        >{{config.toolBar.exportAllButtonName}}
        </el-button>
      </el-col>
      <right-toolbar :show-search.sync="showSearch" @queryTable="getList"/>

      <el-dropdown>
          <span class="el-dropdown-link">
            <el-tooltip effect="dark" content="Show/Hide Search Item" placement="top">
              <el-button size="mini" icon="el-icon-menu"/>
            </el-tooltip>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group v-model="visibleSearchItems">
            <el-checkbox v-for="column in config.query.items" :key="column.key" :label="column.key"
                         :checked="column.show"
                         @change="toggleQueryItem(column.key)">
              {{ column.name }}
            </el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown>
          <span class="el-dropdown-link">
            <el-tooltip effect="dark" content="Show/Hide Columns" placement="top">
              <el-button size="mini" icon="el-icon-circle-plus"/>
            </el-tooltip>

          </span>
        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group v-model="visibleColumns">
            <el-checkbox v-for="column in config.table.items" :key="column.key" :label="column.key"
                         :checked="column.show"
                         @change="toggleColumn(column.key)">
              {{ column.name }}
            </el-checkbox>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
  </div>

  <!-- 列表 -->
  <el-table v-loading="loading" :data="list">
    <el-table-column align="center" type="selection" width="50" v-if="config.table.selectionShow"/>
    <el-table-column label="No." prop="num" align="center" width="100" v-if="config.table.numberShow">
      <template slot-scope="row">
      <span>{{ row.$index+1 }}</span>
      </template>
    </el-table-column>

    <el-table-column
      v-for="(item, index) in config.table.items"
      :key="index"
      :label="item.name"
      :prop="item.key"
      :align="item.align"
      :height="item.height"
      v-if="item.show"
      @dblclick="showContentDialog(item)"
      show-overflow-tooltip
    >
      <template v-slot="scope">
      <div class="cell-content">
        <span v-if="item.type === 'date'">{{ parseTime(scope.row[item.key]) }}</span>
        <span v-else>{{ scope.row[item.key] }}</span>
        <el-tooltip content="Copy">
          <el-button class="copy-button" @click="copyToClipboard(scope.row[item.key])"
                     icon="el-icon-document-copy" circle></el-button>
        </el-tooltip>
      </div>
      </template>
    </el-table-column>

    <el-table-column label="Operation" :align="config.table.operation.align"
                     class-name="small-padding fixed-width"
                     v-if="config.table.operation.show">
      <template v-slot="scope">
      <el-button
        size="mini"
        type="text"
        icon="el-icon-edit"
        @click="handleUpdate(scope.row)"
        v-show="config.table.operation.updateButtonShow"
      >{{config.table.operation.updateButtonName}}
      </el-button>
      <el-button
        size="mini"
        type="text"
        icon="el-icon-delete"
        @click="handleDelete(scope.row)"
        v-show="config.table.operation.deleteButtonShow"
      >{{config.table.operation.deleteButtonName}}
      </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页组件 -->
  <pagination
    v-show="total > 0"
    :total="total"
    :page.sync="queryParams.pageNo"
    :limit.sync="queryParams.pageSize"
    @pagination="getList"
  />

  <el-dialog :visible="contentDialogVisible" @close="contentDialogVisible = false">
    <span>{{ contentDialogContent }}</span>
  </el-dialog>
  <!-- 对话框(添加 / 修改) -->
  <el-dialog v-dialogDrag :title="title" :visible.sync="open" width="500px" append-to-body>
    <el-form ref="form" :model="form" :rules="rules" label-width="150px">
      <el-form-item label="Institution" prop="institution">
        <el-input v-model="form.institution" placeholder="请输入 Institution"/>
      </el-form-item>

      <el-form-item label="Term" prop="term">
        <el-input v-model="form.term" placeholder="请输入 Term"/>
      </el-form-item>

      <el-form-item label="Subject Abbr" prop="subjectAbbr">
        <el-input v-model="form.subjectAbbr" placeholder="请输入 Subject Abbr"/>
      </el-form-item>

      <el-form-item label="Subject Name" prop="subjectName">
        <el-input v-model="form.subjectName" placeholder="请输入 Subject Name"/>
      </el-form-item>

      <el-form-item label="Focus On" prop="focusOn">
        <el-input v-model="form.focusOn" placeholder="请输入 Focus On"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">Confirm</el-button>
      <el-button @click="cancel">Cancel</el-button>
    </div>
  </el-dialog>
</div>
</template>
<script>
import {
  createRecord,
  updateRecord,
  deleteRecord,
  getRecord,
  pageRecord,
  exportTableExcel, exportExcel
} from './tableToJson'

const TABLE_NAME = 'course'; // 将表名提取为一个常
export default {
  name: 'JsonTable',
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // 设置为 true 以显示列，设置为 false 以隐藏列
      showIdColumn: false,
      // 遮罩层
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 列表
      list: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        tableName: TABLE_NAME,
        pageNo: 1,
        pageSize: 10,
      },
      // 表单参数
      form: {
        tableName: TABLE_NAME
      },
      // 表单校验
      rules: {},
      //显示的列
      visibleColumns: [],
      //显示的搜索列
      visibleSearchItems: [],
      //内容对话框
      contentDialogVisible: undefined,
      contentDialogContent: undefined,
    }
  },
  created() {
    window.a = this;
    this.initializeQueryParams();
    this.getList()
  },
  methods: {
    initializeQueryParams() {
      this.config.query.items.forEach(item => {
        this.$set(this.queryParams, item.key, null);
      });
      Object.assign(this.queryParams, this.config.query.operator);
    },
    /** 查询列表 */
    getList() {
      this.loading = true;
      // 执行查询
      pageRecord(this.$request, this.queryParams).then(response => {
        this.list = response.data.data.list;
        this.total = response.data.data.total;
        this.loading = false
      })
    },
    toggleColumn(key) {
      for (let i = 0; i < this.config.table.items.length; i++) {
        if (key === this.config.table.items[i].key) {
          this.config.table.items[i].show = !this.config.table.items[i].show
        }
      }
    },
    toggleQueryItem(key) {
      for (let i = 0; i < this.config.query.items.length; i++) {
        if (key === this.config.table.items[i].key) {
          this.config.query.items[i].show = !this.config.query.items[i].show
        }
      }
    },
    /** 取消按钮 */
    cancel() {
      this.open = false;
      this.reset()
    },
    /** 表单重置 */
    reset() {
      this.form = {
        tableName: TABLE_NAME,
      };
      this.resetForm('form')
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNo = 1;
      this.getList()
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm('queryForm');
      this.handleQuery()
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = 'Add ' + this.config.tableAlias
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id;
      getRecord(this.$request, TABLE_NAME, id).then(response => {
        this.form = response.data.data;
        this.form.tableName = TABLE_NAME; // 添加这行代码
        this.open = true;
        this.title = 'Edit ' + this.config.tableAlias
      })
    },
    /** 验证并提交表单 */
    submitForm() {
      this.$refs['form'].validate(valid => {
        if (!valid) {
          return
        }
        // 修改的提交
        if (this.form.id != null) {
          this.handleSubmit(updateRecord(this.$request, this.form), 'Update')
        } else {
          // 添加的提交
          this.handleSubmit(createRecord(this.$request, this.form), 'Add')
        }
      })
    },

    // 代码优化: 提交请求的方法抽象
    handleSubmit(promise, action) {
      promise.then(response => {
        if (response.data.data) {
          this.$modal.msgSuccess(`${action} Successfully`);
          this.open = false;
          this.getList()
        } else {
          this.$modal.msgError(`${action} Failed`)
        }
      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const id = row.id;
      this.$modal.confirm('Confirm whether to delete the data item whose ID is ' + id).then(() => {
        return deleteRecord(this.$request, TABLE_NAME, id)
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess('Deleted Successfully')
      }).catch((e) => {
        console.log(e)
      })
    },
    // 代码优化: 导出数据的方法抽象
    handleExport(isAll = false) {
      debugger;
      const params = isAll ? {} : this.queryParams;
      const confirmMessage = `Confirm whether to export ${isAll ? 'all' : 'current'} data items?`;
      const downloadFilename = `${TABLE_NAME}${isAll ? '-all' : '-export'}.xlsx`;

      this.$modal.confirm(confirmMessage).then(() => {
        this.exportLoading = true;
        return isAll ? exportTableExcel(this.$request, TABLE_NAME) : exportExcel(this.$request, params)
      }).then(response => {
        this.$download.excel(response.data, downloadFilename);
        this.exportLoading = false
      }).catch((e) => {
        console.log(e)
      })
    },

    /** 导出部分数据操作 */
    handlePartialExport() {
      this.handleExport(false)
    },

    /** 导出所有数据操作 */
    handleExportAll() {
      this.handleExport(true)
    },
  },
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      // 复制成功
      this.$modal.msgSuccess('Copy Successfully');
    }).catch((e) => {
      // 复制失败
      this.$modal.msgError('Copy Failed:' + e);
    });
  },
  showContentDialog(item) {
    this.contentDialogVisible = true;
    this.contentDialogContent = this.list[item.key];
  },

}
</script>
<style scoped>
  .cell-content {
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .el-table .cell .copy-button {
    position: absolute;
    visibility: hidden;
    top: 50%;
    right: -30%; /* Change this line */
    transform: translateY(-50%);
  }

  .el-table .cell:hover .copy-button {
    visibility: visible;
  }
</style>

