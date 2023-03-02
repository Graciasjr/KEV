<script>
	import './styles.css';
	import './Header.svelte'
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="app">
		<Header></Header>
	<main>
		<slot/>
	</main>
	<Footer></Footer>	
</div>

<style>
	.app
	{
		position:relative;
		width:100%;
		display:flex;
		flex-direction:column;
		margin-top:49px;
	}

	main
	{
		width: 100%;
		min-height: 94vh;
	}
	
</style>
