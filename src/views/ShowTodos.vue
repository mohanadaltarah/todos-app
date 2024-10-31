<template>
  <div class="show-todos">
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
        <tr v-for="todo in todolist" :key="todo.id">
          <td>{{ todo.body }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>{{ todo.deadLine }}</td>
          <td>
            <div class="buttons">
              <button class="completed">Completed</button>
              <button class="delete">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
    gap: 8px;
  }

  button {
    border: 0;
    border-radius: 5px;
    padding: 5px;
    color: white;

    &.delete {
      background-color: indianred;
    }
  }

  button.completed {
    background-color: #42b983;
  }
}
</style>
