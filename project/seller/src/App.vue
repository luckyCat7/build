<template>
    <div id='app'>
        <setHeader/>
        <setNav/>
    </div>
</template>
<script>
    import setHeader from "./pages/header/Header.vue";
    import setNav from "./pages/nav/nav.vue";
    export default {
        name:'app',
        components:{
            setHeader,
            setNav
        }
    }
</script>
<style>
   
</style>