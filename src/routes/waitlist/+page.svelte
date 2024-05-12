<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Navbar from '../../components/navbar.svelte';
	import First from '$lib/images/image 2.png'
	import Second from '$lib/images/image 3.png'
	import Third from '$lib/images/image 467.png'
    import { writable } from 'svelte/store';
	import { onMount } from 'svelte';
	import { beforeUpdate } from 'svelte';

    
	onMount(() => {
	

    if(Tally){
		
		
		Tally.loadEmbeds()
	}
    
    
  });

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="fixed top-0 right-0 left-0 bottom-0 bg-black text-white px-6 pt-2 overflow-y-auto font-poppins">
<Navbar/>
<div class="flex lg:mt-24 md:24 mt-5 flex-col gap-2 items-center">
  <div class="w-full">
	
	
	<iframe data-tally-src="https://tally.so/embed/mVZd5E?alignCenter=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="1" frameborder="0" marginheight="0" marginwidth="0" title="Snippe<t>Hub waitlist"></iframe>
  
   

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
