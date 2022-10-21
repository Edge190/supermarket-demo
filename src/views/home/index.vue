<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user" slot="header">
          <img :src="userImg" class="userImg" />
          <div class="userinfo">
            <p class="name">{{ user.name }}</p>
            <p class="position">{{ user.position }}</p>
          </div>
        </div>
        <div class="area-info">
          <p>
            <span>{{ user.area }}</span>
          </p>
        </div>
      </el-card>

      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
          class="card"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <el-card style="height: 280px">
        <div style="height: 280px" ref="echarts"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div style="height: 230px" ref="userEcharts"></div>
        </el-card>
        <el-card style="height: 260px">
          <div style="height: 230px" ref="videoEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>


<script>
import { getData } from "@/api/request";
import * as echarts from "echarts";
export default {
  name: "home",
  data() {
    return {
      userImg: require("@/assets/images/user.png"),
      tableData: [],
      tableLabel: {
        goods: "商品",
        daysell: "今日销售",
        weeksell: "本周销售",
        monthsell: "本月销售",
      },
      countData: [],
    };
  },
  computed:{
    user(){
      return this.$store.state.user || {}
    }
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res;
      if (code === 20000) {
        this.tableData = data.tableData;
        this.countData = data.countData;
        const xData = data.date;

        const series = [];
        data.lineList.forEach((el) => {
          series.push({
            name: el.phone,
            data: el.data,
            type: "line",
          });
        });
        // console.log(data.lineList);
        // console.log(series);

        //折线图
        const option = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            data: xData,
          },
          yAxis: {},
          legend: {
            data: series.data,
          },
          series,
        };
        const E = echarts.init(this.$refs.echarts);
        E.setOption(option);
        //用户柱状图
        const userOption = {
          legend: {
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          //提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", //类目轴
            data: data.userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: "新增用户",
              data: data.userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ],
        };
        const U = echarts.init(this.$refs.userEcharts);
        U.setOption(userOption);
        //饼图
        const videoOption = {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              data: data.videoData,
              type: "pie",
            },
          ],
        };
        const v = echarts.init(this.$refs.videoEcharts);
        v.setOption(videoOption);
      }
    });
  },
};
</script>


<style lang="less" scoped>
</style>
