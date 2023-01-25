<script>
		import {page} from '$app/stores';
		import './styles.css';
		import './Header.svelte'
		import Header from './Header.svelte';

		console.log($page.url)
</script>

<div class="app">
		<Header></Header>
	<main>
		<slot/>
	</main>

	
</div>

<style>
	.app
	{
		/* border: 1px solid; */
		position:relative;
		width: 100%;
		height: auto;
		display:flex;
		flex-direction:column;
		padding-top:35px;
	}

	main
	{
		/* border: 1px solid crimson; */
		/* background-color: #ccc; */
		width: 100%;
		height: 100%;
	}
	
</style>
