<template>
    <ul>
        <li v-for="(message,index) in messages" :key=index :class="{ 'my-message': message.sender === 'self', 'other-message': message.sender === 'other' }">
            {{ message.content }}
        </li> 
    </ul>
</template>
    
<script>
    export default {
        props: ['messages']
    }
</script>
    
<style scoped>
    .my-message{
        font-style: italic;
        color: green;
    }
    
    .other-message{
        font-weight: bold;
        color: red;
    }
</style>