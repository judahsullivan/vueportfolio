<template >
<div class="bg-gradient-to-r from-cyan-500 to-blue-400 h-screen">
    <NavigationMenu/>
    <router-view />
    </div>
</template>

<script>
import NavigationMenu from "./Components/NavigationMenu.vue";
export default {
    components: { NavigationMenu }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400;500;600;700&family=Rubik+Moonrocks&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>