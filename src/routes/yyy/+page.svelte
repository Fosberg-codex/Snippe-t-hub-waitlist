<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png'
	import Navbar from '../../components/navbar.svelte';
	import First from '$lib/images/image 2.png'
	import Second from '$lib/images/image 3.png'
	import Third from '$lib/images/image 467.png'
    import { writable } from 'svelte/store';
	

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="fixed top-0 right-0 left-0 bottom-0 bg-black text-white px-6 pt-2 overflow-y-auto font-poppins">
<Navbar/>
<div class="flex mt-52 flex-col gap-2 items-center">
	<div class="p-2 rounded-2xl bg-gray-600 backdrop-blur-xs">See little of what to expect</div>
	<div class="mt-4 font-semibold text-7xl text-center">Your Hub for storing and <br> sharing  code snippets</div>
	<div class="mt-6 font-semibold text-4xl text-center text-gray-500 ">You do not ever have to forget <br> where you saved your snippet <br> again, just come to <br> snippet</div>
   <div class="mt-4 text-lg rounded-md bg-lightGreen p-2 text-black"><a href="/waitlist" >Join the waitlist</a></div>

   <div class="carousel w-1/2 mb-8 mt-8 border border-gray-500 rounded-md">
	<div id="slide1" class="carousel-item relative w-full">
		<img src={First} alt="The feature image" />
	  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		<a href="#slide4" class="btn btn-circle">❮</a> 
		<a href="#slide2" class="btn btn-circle">❯</a>
	  </div>
	</div> 
	<div id="slide2" class="carousel-item relative w-full">
		<img src={Second} alt="The feature image" />
	  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		<a href="#slide1" class="btn btn-circle">❮</a> 
		<a href="#slide3" class="btn btn-circle">❯</a>
	  </div>
	</div> 
	<div id="slide3" class="carousel-item relative w-full">
		<img src={Third} alt="The feature image" />
	  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		<a href="#slide2" class="btn btn-circle">❮</a> 
		<a href="#slide4" class="btn btn-circle">❯</a>
	  </div>
	</div>
  </div>
 
  <div class="text-xl font-semibold text-gray-500">
	Save code snippets in many <b class="text-lightGreen">languages</b> in different diverse areas in tech.
  </div>
  <div class="text-md  text-lightGreen/70 font-light text-center mb-4">
	#software #webdev #mobiledev scripting #AI #datascience <br> You may not always need github
  </div>
</div>
</div>





<style>
/* .First img {
        width: 600px;
        height: 200px
    } */
</style>

<!--
<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
-->
