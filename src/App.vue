<template>
  <div id="app">
    <div class="leftpanel">
      <el-menu :default-active="Dashboard" :router="true">
        <el-menu-item index="Dashboard">Dashboard</el-menu-item>
        <el-menu-item index="Category">Category</el-menu-item>
        <el-menu-item index="Article">Article</el-menu-item>
        <el-menu-item index="Media">Media</el-menu-item>
        <el-menu-item index="Feedback">Feedback</el-menu-item>
        <el-menu-item index="User">User</el-menu-item>
        <el-menu-item index="System">System</el-menu-item>
      </el-menu>
    </div>
    <div class="centerpanel">
      123
    </div>
    <router-view :key="key"></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      key () {
        return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      },
    },
    created () {
      this.$Progress.start()
      setTimeout(() => {
        this.$Progress.finish()
      }, 3000)
    },
  }
</script>
