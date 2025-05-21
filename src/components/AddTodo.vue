<template>
    <form class="add-todo" @submit="addItem" >
  <el-input class="todo-input"  placeholder="Thêm việc mới..." v-model="title"> </el-input>
  <el-button class="todo-button" @click="addItem" type="primary">Thêm</el-button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
    name:'AddTodo',
    setup () {
        const title = ref ('')
        const addItem = event => {
        event.preventDefault()
        
      title.value = ''
        }
        return {
            title,
            addItem
        }
    }
}
</script>

<style scoped>
.add-todo {
    display: flex;
}
 .todo-input{
    flex: 10;
    
 }
 .todo-button{
    flex: 2;
    padding: 10px;
 }
</style>