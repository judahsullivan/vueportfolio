<template>
<div className='sticky w-full text-white flex justify-between p-2 items-center  md:max-w-2 '>

        <div className='text-2xl font-bold text-center uppercase'>
            <h1 class="text-bold text-black">J <span className='block text-4xl text-white'>Sullivan</span></h1>
        </div>

        <nav>
            
            <!----Desktop Navbar-->
            <div class=" relative flex text-center justify-evenly gap-8 p-6 uppercase shrink">
            <router-link to="/" class="cursor-pointer">Home</router-link>
            <router-link to="/projects" class="cursor-pointer">Projects</router-link>
            <router-link to="/services" class="cursor-pointer">Services</router-link>
            <router-link to="/reviews" class="cursor-pointer">Reviews</router-link>
            <router-link to="/contacts" class="cursor-pointer">Contacts</router-link>
        
        </div>
        <div>
             <!-----Will build a mobile Navbar Here-->


            
        </div>
                
        </nav>

    </div>
  
</template>

<script>

</script>
<style>
.nav-item{
  justify-content: space-between
}

</style>