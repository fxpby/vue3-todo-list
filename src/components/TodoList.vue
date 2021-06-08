<template>
  <div class="todo-list">
    <TodoListItem
      class="list-item"
      v-for="todo in todosArr"
      :key="todo.id"
      :todo-item="todo"
      @change-state="changeStateHandler($event, todo)"
    />
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
export default {
  components: {
    TodoListItem,
  },
  props: ['todosArr'],
  setup(props) {
    console.log(typeof props.todosArr)
    console.log(props.todosArr)

    const changeStateHandler = (e, todo) => {
      todo.completed = e.target.checked
    }
    return {
      changeStateHandler,
    }
  },
}
</script>
<style lang="less" scoped>
.list-item {
  margin: 4px 0;
}
</style>
