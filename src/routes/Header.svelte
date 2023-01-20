<script>
	import { page } from '$app/stores';
	// import TiAdjustBrightness from 'svelte-icons/ti/TiAdjustBrightness.svelte'
	// import TiAdjustContrast from 'svelte-icons/ti/TiAdjustContrast.svelte'
</script>

<header>

	<nav>
		<div class="logo-content">
			<span class="logo">KEV</span>
		</div>

		<div class="navlinks-container">
			<button class="hamburger" aria-label="Voir le menu">
				<span></span>
				<span></span>
				<span></span>
			</button>

			<span class="navlinks">
				<a href="/sante" class="sante" aria-label="La Page Santé" aria-current="page">Santé</a>
				<a href="/cuisine" class="cuisine" aria-label="La Page Cuisine" aria-current="page">Cuisine</a>
				<a href="/spiritualite" class="sante" aria-label="La Page Spiritualité" aria-current="page">Spiritualité</a>
			</span>
		</div>

		<div class="site-theme">		
				<input type="checkbox" id="check" class="checkbox">	
				<label for="check">
					<span class="sliders"></span>
				</label>			
		</div>
	</nav>	
	
</header>



<style>
/* import google fonts to make "kev" style look like italic style*/
	
	nav
	{
		width: 100%;
		position: fixed;
		background: #ffff;
		display: flex;
		padding: 7px 30px;
		box-shadow: inset 0px -1px 1px #c4c4c4;
		font-family: sans-serif;
	}

	.logo-content
	{
		width: 50px;
		height:17px;
		font-size: 18px;
		font-weight:bold;
	}

	.navlinks-container
	{
		display: inline-block;
		margin: 0 auto;
	}

	.navlinks-container .hamburger
	{
		display: none;
	}

	.navlinks a
	{
		font-size: 14px;
		text-decoration: none;
		color: #9f9f9f;
		margin-right: 50px;
		position: relative;
	}
	
	.navlinks a::after
	{
		border: 0.1px solid;
		content: "";
		display: block;
		position: absolute;
		top: 100%;
		left: 0;
		width:95%;
		transform: scaleX(0);
		border-radius: 5px;
		transform-origin: left;
		transition: transform 0.3s ease-out;

	}


	.navlinks a:hover::after
	{
		transform: scaleX(1);
	}

	.site-theme
	{
		display: inline-block;
	}

	.site-theme label
	{
		display: inline-block;
		position: relative;
	}

	label .sliders
	{
		display:inline-block;
		width:45px;
		height: 17px;
		border: 1px solid #c4c4c4;
		border-radius: 25px;
		background: #ffff;
		cursor: pointer;
	}

	.site-theme input:checked + label .sliders
	{
		background-color: #0a89f121;
	}

	label .sliders::before
	{
		content:"";
		position: absolute;
		width: 22px;
		height: 22px;
		background: #cacaca;
		top:-2px;
		left:0;
		bottom:10px;
		border-radius: 50%;
		box-shadow: 0px 0px 15px #333;
		transition: all 0.2s ease-out;

	}

	.site-theme input:checked + label .sliders::before
	{
		box-shadow: 0px 0px 15px #0a21f15b;
		transform: translateX(22.9px);
		transition: transform 0.2s ease-out;
	}

	.checkbox
	{
		display: none;
	}

	
</style>
