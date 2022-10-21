<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    let that = this.$store.state.user;
    if (localStorage.getItem("getUser")) {
      let getuser = JSON.parse(localStorage.getItem("getUser"));
      that.name = getuser.name;
      that.position = getuser.position;
      that.area = getuser.area;
    }
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>
