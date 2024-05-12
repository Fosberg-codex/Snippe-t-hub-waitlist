<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Navbar from '../components/navbar.svelte';
	import First from '$lib/images/image 2.png'
	import Second from '$lib/images/image 3.png'
	import Third from '$lib/images/image 467.png'
	import Dev from '$lib/images/dev.png'
	import Pinch from '$lib/images/pinch.png'
	import Bar from '$lib/images/bar.png'
	import Desan from '$lib/images/desan.png'
	import Desan2 from '$lib/images/desan2.png'
    import { writable } from 'svelte/store';
	

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Join Snippe<t>Hub Waitlist" />
</svelte:head>

<div class="fixed top-0 right-0 left-0 bottom-0 bg-black text-white px-6 pt-2 overflow-y-auto font-poppins">
<Navbar/>
<div class="flex lg:mt-32 md:mt-32 mt-28 flex-col gap-2 items-center">
	<div class="p-2 rounded-2xl bg-gray-600 backdrop-blur-xs lg:text-base md:text-base text-sm">every piece count</div>
	

	<!-- mobile view -->
	<div class="lg:hidden md:hidden absolute free z-20 right-4 mr-14 mt-32 top-30 md:right-20 md:mr-2 md:mt-36 md:top-44 lg:right-20 lg:mr-2 lg:mt-36 lg:top-44">
		<img src={Desan2} alt="The feature image" />
	</div>

	<div class=" hidden lg:block md:block mt-4 font-semibold text-7xl text-center">Your Hub for storing and <br>sharing code snippets</div>
	<!-- mobile view -->
	<div class="lg:hidden md:hidden mt-4 font-semibold md:text-7xl lg:text-7xl text-3xl text-center">Your Hub for storing and sharing <br><span class="absolute z-30 pl-4 text-center right-4 mr-16 text-black">code snippets</span></div>

	<div class="lg:mt-4 md:mt-4 mt-14 font-semibold lg:text-4xl md:text-4xl text-lg text-center text-gray-500 ">You do not ever have to forget <br> where you saved your snippet <br> again, just come to <br>Snippe&lt;t&gt;Hub</div>
   <div class="mt-4 md:text-lg lg:text-lg text-sm rounded-md bg-lightGreen p-2 text-black"><a href="/waitlist" >Join the waitlist</a></div>

   <!-- detsop version -->
   <div class=" hidden lg:block md:block h-80 carousel carousel-vertical rounded-box border border-gray-500 mt-2">
	<div class="carousel-item h-80">
		<img src={Dev} alt="The feature image.." />
	</div> 
	<div class="carousel-item h-full">
		<img src={Pinch} alt="The feature image" />
	</div> 
	<div class="carousel-item h-full">
		<img src={Bar} alt="The feature image" />
	</div>
  </div>


  <!-- mobile view version -->
  <div class=" lg:hidden md:hidden h-64 carousel carousel-vertical rounded-box border border-gray-500 mt-2">
	<div class="carousel-item h-full">
		<img src={Dev} alt="The feature image" />
	</div> 
	<div class="carousel-item h-full">
		<img src={Pinch} alt="The feature image" />
	</div> 
	<div class="carousel-item h-full">
		<img src={Bar} alt="The feature image" />
	</div>
  </div>
 
  <div class="text-xl font-semibold text-gray-500 text-center">
	Save code snippets in many <b class="text-lightGreen">languages</b> in different diverse areas in tech.
  </div>
  <div class="text-md  text-lightGreen/70 font-light text-center lg:mb-4 md:mb-4 mb-28">
	#software #webdev #mobiledev #scripting #AI #datascience <br> You do not always need github
  </div>
</div>
</div>





<style>
.free img {
        width: 230px;
        height: 50px
    }
	
</style>

<!--
<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
-->
