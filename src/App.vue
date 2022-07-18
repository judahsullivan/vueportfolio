<template >
<div >
    <NavigationMenu/>
    <transition
    mode="in-out"
    enter-active-class="animate__animated animate__fadeIn "
    leave-active-class=" animate__animated animate__fadeOut"
    
    >
    <router-view />
    </transition>
    
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