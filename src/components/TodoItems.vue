<template>
    <div v-for="todo in todos" :key="todo._id">
        {{ todo.name }}
    </div>
</template>
<script>
export default {
    name: "TodoItems",
    props: {
        todos: Array
    }
    
}
</script>