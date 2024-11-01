import { ref, onMounted } from "vue";

const todoFunctions = () => {
  // Data
  const todoList = ref([]);

  // Methods

  const addToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todoList.value));
    console.log(todoList.value);
  };

  const updateToLocal = () => {
    if (localStorage.getItem("todos")) {
      todoList.value = JSON.parse(localStorage.getItem("todos"));
    }
    console.log(todoList.value);
  };

  onMounted(() => {
    updateToLocal();
  });

  return { todoList, addToLocalStorage };
};

export default todoFunctions;
