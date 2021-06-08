import { ref, computed } from 'vue'

export default function useFilteredTodos(todosArr) {
  const filter = ref('all')
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'done':
        return todosArr.value.filter(todo => todo.completed)
      case 'todo':
        return todosArr.value.filter(todo => !todo.completed)
      default:
        return todosArr.value
    }
  })

  const changeFilterHandler = e => {
    filter.value = e
  }
  return {
    filter,
    filteredTodos,
    changeFilterHandler,
  }
}
