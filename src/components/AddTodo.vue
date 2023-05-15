<template>
    <input placeholder="Add todo" :value="todo" @input="onChange"/>
    <button @click="(e) => addTodo(e)">Add</button>
</template>

<script>
export default {
    name: "AddTodo",
    props: {
        todo: String,
        onChange: Function,
        changed: Boolean, 
    },
    emits: ['added'],
    methods: {
        async addTodo(e) {
            const response = await fetch("http://localhost:9656/api/v1/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: this.todo,
                    description: "No description",
                    status: false,
                })
            })
            const jsonData = await response.json();
            this.$emit('added', !this.changed)
        }
    },
}
</script>