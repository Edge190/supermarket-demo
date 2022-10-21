<template>
  <div class="manage">
    <el-dialog title="新增订单" :visible.sync="isShow" v-if="isShow">
      <Form
        :formLabel="formLabel"
        :form="form"
        :inline="true"
        ref="form"
      >
      </Form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">新增</el-button>
      <!-- <Form :formLabel="formLabel" :form="searchForm" :inline="true" ref="form">
        <el-button type="primary" @click="getList(searchForm.keyword)">
          搜索
        </el-button>
      </Form> -->
    </div>
    <Table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    ></Table>
  </div>
</template>


<script>
import Table from "@/components/Table.vue";
import Form from "@/components/Form.vue";
import { reqGetOrder } from "@/api/request";
export default {
  name: "order",
  components: {
    Table,
    Form,
  },
  data() {
    return {
      operateType: "",
      isShow: false,
      searchForm: {
        keyword: "",
      },
      tableData: [],
      tableLabel: [
        {
          prop: "orderId",
          label: "订单编号",
        },
        {
          prop: "supplierId",
          label: "供应商编号",
        },
        {
          prop: "goodsId",
          label: "商品编号",
        },
        {
          prop: "goodsName",
          label: "商品名称",
        },
        {
          prop: "amount",
          label: "采购数量",
        },
      ],
      form: {
        orderId: "",
        supplierId: "",
        goodsId: "",
        goodsName: "",
        amount: "",
      },
      formLabel: [
        {
          model: "orderId",
          label: "订单编号",
        },
        {
          model: "supplierId",
          label: "供应商编号",
        },
        {
          model: "goodsId",
          label: "商品编号",
        },
        {
          model: "goodsName",
          label: "商品名称",
        },
        {
          model: "amount",
          label: "采购数量",
        },
      ],
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    confirm() {
      if (this.operateType === "edit") {
        this.$http.post("/user/edit", this.operateForm).then((res) => {
          this.isShow = false;
          this.getList();
          console.log("res", res);
        });
      } else {
        this.$http.post("/user/add", this.operateForm).then((res) => {
          console.log(res);
          this.isShow = false;
          this.getList();
        });
      }
    },
    editUser(row) {
      console.log("rowis", row);
      let that = this;
      this.operateType = "edit";
      this.isShow = true;
      that.operateForm = { ...row };
      console.log("that.operateForm", that.operateForm);
      //点击取消也会修改数据源
      // this.operateForm = row
      //是vue双向数据绑定的弊端，实时更新数据，因为是一个数据源，修改对象的时候，对象指针直接指向页面数据了，改成:
      // this.operateForm = JSON.parse(JSON.stringify(row))
    },
    delUser(row) {
      this.$confirm("此操作将永久删除此组件", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = row.id;
        this.$http
          .get("/user/del", {
            params: { id },
          })
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功",
            });
            this.getList();
          });
      });
    },
  },
  mounted() {
    reqGetOrder(this.$store.state.user.area).then((res) => {
      if (res.status === 0) {
        for (let i = 0; i < res.data.length; i++) {
          if (this.tableData[i] === undefined) {
            this.tableData.push({
              orderId: res.data[i].orderId,
              supplierId: res.data[i].supplierId,
              goodsId: res.data[i].goodsId,
              goodsName: res.data[i].goodsName,
              amount: res.data[i].amount,
            });
          }
        }
      } else{
        console.log('err');
      }
    })
  },
};
</script>


<style lang="less" scoped>
// .manage {
//   height: 100%;
// }
// .manage-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
</style>
