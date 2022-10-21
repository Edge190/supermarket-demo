<template>
  <el-form ref="form" label-width="100px" :model="localform" :inline="inline">
    <!-- <el-form-item label="商品id：">
      <span>{{localform.goodsId}}</span>
    </el-form-item> -->
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <el-input
        :placeholder="'请输入' + item.label"
        v-model="localform[item.model]"
      ></el-input>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>
<script>

export default {
  name: 'Form',
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
  data () {
    return {
      localform: this.form,
    }

  },
  methods: {
    confirm () {
      this.$emit("confirm")
    },
  },
}
</script>