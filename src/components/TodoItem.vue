<template>
    <div class="todo-item">
    <el-checkbox>{{todoProps}}</el-checkbox>
   <!-- <el-text</el-text> -->
   <el-button type="danger">Xóa</el-button>
   </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todoProps']

}
</script>

<style>
.todo-item {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 10px;
}
.todo-item .el-checkbox {
    zoom: 1.5;
}
.todo-item .el-button {
    margin-left: auto;
}
</style>