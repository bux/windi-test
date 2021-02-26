<template>
    <div>
        <p>Image has <code>mx-auto</code> and <code>p-8</code> classes.</p>
        <img alt="Vue logo" src="./assets/logo.png" class="mx-auto p-8" />
        <p>html and body should have <code>bg-yellow-200</code> applied.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
    name: "App",
    components: {
        HelloWorld,
    },
});
</script>

<style>
html,
body {
    @apply bg-yellow-200;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    @apply p-16;
}
</style>