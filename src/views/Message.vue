<template>
    <div class="messages">
        <h1>Страница сообщений</h1>
        <message-form @message="addMessage"></message-form>
        <message-list :message="messages"></message-list>
    </div>
</template>

<script>
    import MessageForm from '../components/message/MessageForm.vue';
    import MessageList from '../components/message/MessageList.vue';

    export default{
        components:{
            'message-form': MessageForm,
            'message-list' : MessageList
        },
        data(){
            return{
                messages: []
            };
        },
        methods: {
            addMessage(message){
                this.messages.push(message);
            }
        }
    }
</script>

<style scoped>
    .messages{
        padding: 20px;
    }
</style>