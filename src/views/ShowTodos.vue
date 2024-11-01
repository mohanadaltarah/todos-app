<template>
  <div v-if="todolist.length" class="show-todos">
    <h1>Show Todos</h1>
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Created At</th>
          <th>Deadline</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todolist"
          :key="todo.id"
          :style="
            todo.isCompleted
              ? 'background-color: #76a98a; color: white;'
              : 'background-color: transparent;'
          "
        >
          <td>{{ todo.body }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>{{ todo.deadLine }}</td>
          <td>
            <div class="buttons">
              <button class="completed" @click="doneTask(todo)">
                {{ todo.isCompleted ? "Not Done" : "Done" }}
              </button>
              <button class="delete" @click="deleteTodo(index)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else style="margin: 50vh auto">
    <h2>No todos to show</h2>
    <h3>
      <router-link :to="{ name: 'Home' }">Add</router-link>
      your first one now!
    </h3>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const todolist = ref([]);

const updateToLocal = () => {
  if (localStorage.getItem("todos")) {
    todolist.value = JSON.parse(localStorage.getItem("todos"));
  }
};

// Delete a todo
const deleteTodo = (index) => {
  todolist.value.splice(index, 1);
  addToLocalStorage();
};

const doneTask = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  // if (!todo.isCompleted) {
  //   document.querySelector(".buttons .completed").innerHTML = "not completed";
  // }
  addToLocalStorage();
};

const addToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todolist.value));
};

onMounted(() => {
  updateToLocal();
});
</script>

<style scoped>
.show-todos {
  table {
    width: 100%;

    tr,
    td,
    th {
      border: 1px solid gray;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 20px;
  }

  button {
    border: 0;
    border-radius: 5px;
    padding: 5px;
    color: white;
    min-width: 50%;
    cursor: pointer;

    &.delete {
      background-color: indianred;
    }

    &.completed {
      background-color: #42b983;
    }
  }
}
</style>
