<template>
    <el-main  >
      <AddTodo />
      <TodoList />
     </el-main>
</template>
 
<script>
import AddTodo from '../components/AddTodo.vue';
import TodoList from '../components/TodosList.vue'
export default {
 name: 'TodoPage',
  components: {
     AddTodo, TodoList
  },
  
  

 
}
   
   
</script>

<style>

</style>