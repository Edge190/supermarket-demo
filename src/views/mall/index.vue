<template>
  <div class="mall">
    <el-dialog title="更新商品数量信息" :visible.sync="isShow" v-if="isShow">
      <Form :formLabel="formLabel" :form="form" :inline="true" ref="form">
      </Form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <Table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @edit="editMall"
    >
    </Table>
  </div>
</template>


<script>
// import qs from 'qs'
import Table from "@/components/Table.vue";
import Form from "@/components/Form.vue";
import { reqGetMall,reqEditMall } from "@/api/request";
export default {
  name: "mall",
  components: {
    Table,
    Form,
  },
  data() {
    return {
      operateType:'',
      isShow: false,
      tableData: [],
      tableLabel: [
        {
          prop: "goodsId",
          label: "商品编号",
        },
        {
          prop: "goodsName",
          label: "商品名称",
        },
        {
          prop: "subarea",
          label: "商品分区",
        },
        {
          prop: "surplus",
          label: "货架商品余量",
        },
        {
          prop: "stock",
          label: "商品库存",
        },
      ],
      formLabel: [
        {
          model: "surplus",
          label: "货架商品余量",
        },
        {
          model: "stock",
          label: "商品库存",
        },
      ],
      form: {
        goodsId:"",
        surplus: "",
        stock: "",
      },
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    confirm() {
      if (this.operateType === "editMall") {
        reqEditMall(this.form).then((res) => {
          this.isShow = false;
          if(res.message === "修改成功"){
            let index = this.tableData.findIndex((el) => {
              return el.goodsId === res.data.goodsId
            })
            this.tableData[index].stock = res.data.stock
            this.tableData[index].surplus = res.data.surplus

            this.$message.success(res.message)
            // this.$nextTick(() => {
            //   this.$message.success(res.message)
            // })
            // console.log(this.tableData);
            // console.log(index);
           
          }
        });
      }
    },
    editMall(row) {
      // let that = this;
      this.operateType = "editMall"
      this.isShow = true;
      this.form.surplus = row.surplus;
      this.form.stock = row.stock;
      this.form.goodsId = row.goodsId;
      // console.log("form", this.form);
    },
  },
  mounted() {
    // console.log(typeof(this.$store.state.user.area));
    reqGetMall(this.$store.state.user.area).then((res) => {
      if (res.status === 0) {
        // console.log(res);
        // console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
          if (this.tableData[i] === undefined) {
            this.tableData.push({
              goodsId: res.data[i].goodsId,
              goodsName: res.data[i].goodsName,
              subarea: res.data[i].subarea,
              surplus: res.data[i].surplus,
              stock: res.data[i].stock,
            });
          }
        }
        // console.log(this.tableData);
      }
    });
  },
};
</script>


<style lang="less" scoped>
</style>
