<template>
    <div class="post-page">
        <h2>
            {{ this.post.title }}
        </h2>
        <p>
            {{ this.post.body }}
        </p>
        <div class="d-flex justify-content-end">
            <span class="btn btn-primary" @click='this.$router.go(-1)' ></span>
        </div>
    </div>
</template>


<script>
    import {getPosts} from "@/services/index.js";
    export default{
        name: "Post",
        data(){
            return{
                post: null
            }
        },

        async created(){
            this.post = await this.getPosts();
        },
        methods: {
            async getPosts(){
                try {
                    const response = await getPosts();
                    console.log(response);
                    return response.data;  

                }catch(error){
                    console.log(error)
                }  
            }
           
        }
        
    }
</script>

<style>
    .post-page{
        margin: 0 auto;
        max-width: 80%;
        padding: 15px;
        border: 1px solid black;
        margin-top: 20px;
        
    }
</style>