<script>
	import './styles.css';
	import './Header.svelte'
  import Header from './Header.svelte';
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
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
</style>
