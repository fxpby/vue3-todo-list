<template>
  <div class="wrapper">
    <div class="container">
      <h1>如此简陋的todolist, 你忍心看嘛</h1>
      <todo-add @addTodoHandler="addTodoHandler" />
      <todo-filter :selected="filter" @changeFilterHandler="changeFilterHandler($event)" />
      <todo-list :todosArr="filteredTodos" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoAdd from '../components/TodoAdd.vue'
import TodoFilter from '../components/TodoFilter.vue'
import TodoList from '../components/TodoList.vue'
import useTodos from '@/composables/useTodos.js'
import useFilteredTodos from '@/composables/useFilteredTodos.js'

export default {
  name: 'Home',
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup() {
    const { todosArr, addTodoHandler } = useTodos()
    const { filter, filteredTodos, changeFilterHandler } = useFilteredTodos(todosArr)
    console.log(typeof filteredTodos)
    console.log(filteredTodos)

    // ref 适合包装基本类型数据 or 简单数据
    // reactive 适合包装复杂的对象数据

    return {
      filter,
      filteredTodos,
      changeFilterHandler,
      todosArr,
      addTodoHandler,
    }
  },
}
</script>
<style lang="less" scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 60%;
    padding: 48px 24px;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
  }
}
</style>
