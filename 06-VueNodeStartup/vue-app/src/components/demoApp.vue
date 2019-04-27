<template>
    <div>
        <h1> Demo </h1>
        <button @click="onGetClick"> Get </button>
        <button @click="onGetByIdClick"> GetById</button> 
        <button @click="onPostClick"> Post </button>
        <button @click="onPutClick"> Put </button>
        <button @click="onDeleteClick"> Delete </button>
    </div>
</template>

<script>
import axios from "axios";
 
export default {
    name: "demo-app",
    methods: {
        onGetClick() {
            axios.get("/api/service/test").then(function(response) {
                console.log(response);       
                alert(response.data.message);
            }).catch(error => {
    console.log(error.response)
});            
        },
        onGetByIdClick() {
            axios.get("/api/service/test/1").then(function(response) {
                console.log(response);       
                alert(response.data.message);
            });
        },
        onPostClick() {
            axios.post("/api/service/test").then(function(response) {
                console.log(response); 
                alert(response.data.message);
            });
        },
        onPutClick() {
            axios.put("/api/service/test/10").then(function(response) {
                console.log(response); 
                alert(response.data.message);
            });
        },
        onDeleteClick() {
            axios.delete("/api/service/test/10").then(function(response) {
                console.log(response); 
                alert(response.data.message);
            });
        }
    }
}
</script>

<style>
</style>
 