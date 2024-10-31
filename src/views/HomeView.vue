<template>
  <div class="home">
    <h1>Add New Todos</h1>
    <form action="" @submit.prevent="addTodo">
      <input
        v-model="todo.body"
        placeholder="Enter your todo"
        required
        type="text"
      />
      <label for="">Deadline</label>
      <input v-model="todo.deadLine" required type="date" />

      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const todolist = ref([]);
const todo = ref({
  body: "",
  deadLine: "",
  createdAt: "",
});

const addTodo = () => {
  todo.value.createdAt = new Date();
  todolist.value.push(todo.value);
  alert("Todo was added successfully");
  console.log(todolist.value);
  todo.value = ref({
    body: "",
    deadLine: "",
    createdAt: "",
  });
};
</script>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  input[type="text"] {
    width: 50%;
    padding: 20px;
    font-size: 16px;
    border-radius: 7px;
  }

  input[type="submit"] {
    padding: 20px;
    font-size: 16px;
    color: white;
    border-radius: 7px;
    margin-left: 10px;
    border: 0;
  }
}
</style>
