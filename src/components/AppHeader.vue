<template>
<nav class="m-auto w-full py-2 px-5 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
    <router-link class="mx-2" to="/">Home</router-link>
    <router-link class="mx-2" to="/dc-heros">DC Heros</router-link>
    <router-link class="mx-2" to="/calendar">Calendar</router-link>
</nav>
</template>

<script>
export default {
    name: 'AppHeader',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
