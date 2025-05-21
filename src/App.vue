<template>
 <HeaderPage />
 <el-main style="padding: 10px;">
  <div style="display: flex; justify-content: flex-end ">
    <el-button type="primary" @click="$router.push('/')">Home</el-button>
    <el-button type="primary" @click="$router.push('/todo')">Todo</el-button>
    <el-button type="primary" @click="$router.push('/about')">About</el-button>
       
  </div>
<router-view />
 </el-main>
</template>

<script>
import HeaderPage from './components/Header.vue'
export default {
 name: 'App',
 components: { HeaderPage}
}
</script>

<style>

</style>
