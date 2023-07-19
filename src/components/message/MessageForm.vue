<template>
    <div>
        <label for="self-sender">
            <input type="radio" id="self-sender" v-model="selectedSender" value="self"> От меня
        </label><br/>
        <label for="other-sender">
            <input type="radio" id="other-sender" v-model="selectedSender" value="other"> Отвечающий
        </label><br/>
        <textarea v-model.trim="newMessageText" rows=5></textarea><br/>
        <button @click=sendMessage>Отправить</button>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                selectedSender: '',
                newMessageText: ''
            };
        },
        methods: {
            sendMessage() {
                if (this.newMessageText && this.selectedSender) {
                    this.$emit('message', { content: this.newMessageText, sender: this.selectedSender });
                    this.newMessageText = '';
                    this.selectedSender = '';
                }
            }
        }
    }
</script>
  
<style scoped>
    textarea{
        border: 1px solid black;
        border-radius: 5px;
        width: 50%;
    }
    
    button{
        border:2px solid black;
        border-radius :5px ;
        cursor:pointer ;
    }
    
    button:hover{
        background-color :orange ;
    }
</style>