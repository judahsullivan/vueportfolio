<template>
<div className='fixed w-full text-white flex justify-between p-4 items-center'>

        <div className='text-2xl font-bold text-center uppercase'>
            <h1 class="text-bold text-black">J <span className='block text-4xl text-white'>Sullivan</span></h1>
        </div>

        <nav>

            <div className='absolute right-6 md:hidden top-6 scale-150'>
                
            </div>

                <ul className='hidden md:flex gap-8 p-6 uppercase bg-white/10 '>
                    <li class="cursor-pointer  hover:text-black"><router-link to="/">Home</router-link></li>
                    <li><router-link to="/projects">Projects</router-link></li>
                    <li><router-link to="/services">Services</router-link></li>
                    <li><router-link to="/reviews">Reviews</router-link></li>
                    <li><router-link to="/contacts">Contact Me</router-link></li>
                    

                </ul>

                
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