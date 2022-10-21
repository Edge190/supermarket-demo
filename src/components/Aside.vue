<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? "上货管理" : "小超市上货管理系统" }}</h3>
    <el-menu-item 
      @click="clickMenu(item)"
      v-for="item in noChildren" 
      :key="item.path"
      :index="item.path + ''"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu 
      v-for="item in hasChildren" 
      :key="item.path" 
      :index="item.path + ''"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group 
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex + ''">
          {{subItem.label}}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    
  </el-menu>
</template>


<script>
  export default {
    name:"Aside",
    data() {
      return {
        menu: [
          // {
          //   path: "/",
          //   name: "home",
          //   label: "首页",
          //   icon: "s-home",
          //   url: "Home/Home",
          // },
          // {
          //   path: "/mall",
          //   name: "mall",
          //   label: "商品管理",
          //   icon: "video-play",
          //   url: "MallManage/MallManage",
          // },
          // {
          //   path: "/user",
          //   name: "user",
          //   label: "用户管理",
          //   icon: "user",
          //   url: "UserManage/UserManage",
          // },
          // {
          //   label: "其他",
          //   icon: "location",
          //   children: [
          //     {
          //       path: "/page1",
          //       name: "page1",
          //       label: "页面1",
          //       icon: "setting",
          //       url: "Other/PageOne",
          //     },
          //     {
          //       path: "/page2",
          //       name: "page2",
          //       label: "页面2",
          //       icon: "setting",
          //       url: "Other/PageTwo",
          //     },
          //   ],
          // },
        ]
      };
    },
    methods: {
      clickMenu(item){
        this.$router.push({
          name: item.name
        })
        this.$store.commit('selectMenu', item)
      }
    },
    computed:{
      noChildren(){
        return this.menu.filter((item) => !item.children);
      },
      hasChildren(){
        return this.menu.filter((item) => item.children);
      },
      isCollapse () {
        return this.$store.state.tab.isCollapse
      },
    },
    created(){
      this.menu = this.$store.state.tab.menu
    }
  }
</script>


<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    // height: 100%;
    height: 100vh;
    border: none;
    h3 {
      color: #fff;
      text-align: center;
      line-height: 48px;
    }
  }
</style>




