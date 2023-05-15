<script>
    import AddTodo from '../../components/AddTodo.vue';
    import TodoItems from '../../components/TodoItems.vue';
    export default {
        name: "Home",
        components: {AddTodo, TodoItems },
        data() {
            return {
                todo: "",
                todos: [],
                changed: false
            }
        },
        mounted() {
            this.getListTodos()
        },
        methods:{
            handleChangeInput(e) {
                this.todo = e.target.value
            },
            async getListTodos() {
                const response = await fetch("http://localhost:9656/api/v1/")
                const jsonData = await response.json();
                this.todos = jsonData.todos;
            }
        },
        watch: {
            changed(val) {
                this.getListTodos()
            }
        }
    }
</script>
<template>
    <div>
        <AddTodo :todo="todo" :onChange="handleChangeInput" :changed="changed" @added="(val) => changed = val"/>
        <TodoItems :todos="todos"/>
    </div>
</template>

