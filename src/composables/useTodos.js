import { ref, onMounted } from 'vue'

export default function useTodos() {
  let todosArr = ref([])
  const fetchTodos = async () => {
    todosArr.value = await Promise.resolve([
      {
        id: 1,
        content: 'olu',
        completed: false,
      },
      {
        id: 2,
        content: 'cookie',
        completed: true,
      },
      {
        id: 3,
        content: 'hhh',
        completed: false,
      },
    ])
  }
  const addTodoHandler = todoItem => {
    todosArr.value.push(todoItem)
  }

  onMounted(() => {
    fetchTodos()
  })

  return {
    todosArr,
    addTodoHandler,
  }
}
