<script>
	import Sante from "./sante/+page.svelte";
	import Cuisine from "./cuisine/+page.svelte";
	import Chretiennete from "./chretiennete/+page.svelte";
	
</script>

<svelte:head>
	<title>KEV</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
	<!-- {#if currentPage === "sante"}
		<Sante></Sante>
	{:else if currentPage === "cuisine"}
		<Cuisine></Cuisine>
	{:else if currentPage === "chretiennete"}
		<Chretiennete></Chretiennete>
	{/if} -->
</section>

<style>

section
{
	border: 1px solid crimson;
	width: 100%;
	height:110vh;
	padding: 15px;
	background-color: transparent;
}

</style>
