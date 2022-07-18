<template>
<div className='relative w-full text-white flex justify-between p-2 items-center  md:max-w-2 bg-gradient-to-r from-cyan-500 to-blue-400 '>

        <div className=' aboslute  text-2xl font-bold text-center uppercase animate-pulse md:flex-shrink-0'>
        <router-link to="/" >
            <h1  class="cursor cursor-pointer animate__animated animate__bounceIn text-black font-bold text-4xl flex md:shrink-0" >J <span className='text-4xl text-blue-100'>Sullivan</span></h1>
        </router-link>
        </div>

        <nav>
            
            <!----Desktop Navbar-->
            <div class=" relative hidden md:flex md:flex-shrink text-center justify-evenly bg-cyan-300  space-x-4 p-6 uppercase font-extrabold drop-shadow-md shadow-md animate__animated animate__zoomInRight animate__delay-.6s">
            <router-link to="/" class="cursor-pointer drop-shadow-lg hover:text-cyan-800 hover:animate-pulse  ">Home</router-link>
            <router-link to="/projects" class="cursor-pointer drop-shadow-lg hover:text-cyan-800 hover:animate-pulse  ">Projects</router-link>
            <router-link to="/services" class="cursor-pointer drop-shadow-lg hover:text-cyan-800 hover:animate-pulse ">Services</router-link>
            <router-link to="/reviews" class="cursor-pointer drop-shadow-lg hover:text-cyan-800 hover:animate-pulse ">Reviews</router-link>
            <router-link to="/contact" class="cursor-pointer drop-shadow-lg  hover:text-cyan-800 hover:animate-pulse ">Contacts</router-link>
        
        </div>
        <div class="md:hidden   from-cyan-500 to-blue-400 flex flex-col items-center">
             
           <button class="material-icons white animate__animated animate__zoomInRight hover:text-black "
            @click="showMobileMenu = !showMobileMenu"
            >menu</button>

            
      
        <div  :class="{hidden: showMobileMenu}"  class="md:hidden  flex bg-inherit h-[210px] p-4 ">
                <!-----Will build a mobile Navbar Here-->
                <ul class=" flex flex-col items-center text-justify space-x-3 uppercase font-extrabold object-center h-10  gap-5 ">
             <router-link to="/" class="cursor-pointer drop-shadow-lg  hover:text-black hover:animate-pulse ">Home</router-link>
            <router-link to="/projects" class="cursor-pointer drop-shadow-lg  hover:text-black hover:animate-pulse ">Projects</router-link>
            <router-link to="/services" class="cursor-pointer drop-shadow-lg  hover:text-black hover:animate-pulse ">Services</router-link>
            <router-link to="/reviews" class="cursor-pointer drop-shadow-lg  hover:text-black hover:animate-pulse ">Reviews</router-link>
            <router-link to="/contact" class="cursor-pointer drop-shadow-lg   hover:text-black hover:animate-pulse">Contacts</router-link>
                </ul>
                </div> 
                 </div>
        </nav>

    </div>
  
</template>

<script setup>
import { ref } from 'vue';

const showMobileMenu = ref(true)

</script>
<style>
.nav-item{
  justify-content: space-between
}

</style>