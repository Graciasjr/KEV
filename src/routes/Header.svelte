<script>
	import { page } from '$app/stores';
	import Fa from 'svelte-fa/src/fa.svelte';
	import {faMoon,faSun,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
	
	$:navLinks = {
		sante:{
			name:"Santé",
			url:"/sante",
		},
		cuisine:{
			name:"Cuisine",
			url:"/sante",
		},
		chretiennete:{
			name:"Chretienneté",
			url:"/chretienneté"
		},
		admin:{
			name:"Admin",
			url:'/admin'
		}
	}
	$:navLinksSidepanel = false;
	
	async function disableSidePanel()
	{
		setTimeout(()=>{
			navLinksSidepanel=false;
		},300)
	}
	async function back(){
		history.back();
	}
	
	
</script>

<header>
	<nav>
		{#if $page.url.pathname === "/"+$page.params.slug}
		<button class="back" on:click={back}>
			<Fa icon={faArrowLeft}></Fa>
		</button>
		{/if}
		<div class="logo-content">
			<span class="logo">KEV</span>
		</div>
		{#if $page.url.pathname === "/sante" || $page.url.pathname === "/cuisine" || $page.url.pathname === "/chretiennete"  }	
			<div class="navlinks-container">
				<button class="hamburger" aria-label="Voir le menu" on:click={()=>{navLinksSidepanel=!navLinksSidepanel}}>
					<!-- <Fa icon={faHamburger} size={"1.5x"}></Fa> -->
					<span></span>
					<span></span>
					<span></span>
				</button>			
				<span class="navlinks {navLinksSidepanel?'active':'' }">
					<a href="/sante" class="sante {`${$page.url.pathname==="/sante"?"links-active":""}`} " aria-label="La Page Santé" aria-current="Page" on:click={disableSidePanel}>Santé</a>
					<a href="/cuisine" class="cuisine {`${$page.url.pathname==="/cuisine"?"links-active":""}`}" aria-label="La Page Cuisine" aria-current="{$page.url.pathname ==="/cuisine"?"Page":""}" on:click={disableSidePanel}>Cuisine</a>
					<a href="/chretiennete" class="sante {`${$page.url.pathname==="/chretiennete"?"links-active":""}`}" aria-label="La Page Chretienneté" aria-current="{$page.url.pathname ==="/chretiennete"?"Page":""}" on:click={disableSidePanel}>Chrétienneté</a>
				</span>
			</div>
		{/if}
			
		
		<div class="theme-toggle">
			<input class="theme-handle" type="checkbox" id="button" checked>
			<label for="button">
				<span class="moon">
					<Fa icon={faMoon} size={"1.2x"} color={"gray"}></Fa>
				</span>
				<span class="sun">
					<Fa icon={faSun} size={"1.2x"} color={"orange"} style={""}></Fa>
				</span>
			</label>
		</div>
		
	</nav>		
</header>



<style>
	
	nav{
		width: 100%;
		position:fixed;
		z-index: 2;
		top:0;
		background: #ffffff;
		display: flex;
		align-items:center;
		justify-content: space-between;
		padding: 7px 37px;
		box-shadow: inset 0px -1px 1px #c4c4c4;
	}

	.back{
		border: 0px;
		width: 25px;
		height: 25px;
		border-radius: 2px;
		background-color:inherit;
		cursor: pointer;
	}
	.back:hover,
	.back:focus{
		background: #f1f1f1;
	}

	.logo-content{
		width: 50px;
		text-align: center;
		font-size: 18px;
		font-weight:bold;
		position: relative;
		/* border: 1px solid; */
	}

	.navlinks-container{
		width: 300px;
	}

	.navlinks-container .hamburger
	{
		display: none;
	}

	.navlinks{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.navlinks a
	{
		width: auto;
		font-size: 14px;
		text-decoration: none;
		color: #7c7c7c;
		position: relative;
	}

	a.links-active
	{
		font-size: 16px;
		font-weight:bold;
		transition: font-size 0.3s ease-out;
	}
	
	.navlinks a::after
	{
		border: 0.1px solid;
		content: "";
		display: block;
		position: absolute;
		top:90%;
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


	/*	theme-handler style	*/

	.theme-toggle{
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 50%;
		padding: 1px 2px;
	}

	.theme-toggle label{
		display:flex;
		position: relative;
		cursor: pointer;
	}

	.theme-handle
	{
		display: none;
	}

	label .moon,
	label .sun{
		width:25px;
		height:25px;
		text-align: center;
		padding: 3px 0;
	}

	.sun{
		display: none;
	}
	.moon{
		display: block;
	}

	input.theme-handle:checked + label .sun
	{
		display: block;
		/* box-shadow: 0px 0px 7px #ffa600da; */
	}

	input.theme-handle:checked + label .moon{
		display: none;
	}



	/*	MOBILE DEVICE	*/
	@media only screen and (max-width:545px)
	{
		nav{
			padding: 12px 37px;
		}

		.logo-content{
			order: 2;
		}		

		.navlinks-container{
			order: 1;
			width: auto;
		}

		.navlinks-container .hamburger{
			display: block;
			width: 27px;
			height: 25px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 4.2px;
			cursor: pointer;
			border:0px;
			background: transparent;
		}

		.hamburger span{
			display: block;
			width: 20px;
			height: 1px;
			border: 0.5px solid #333;
			border-radius: 20px;
		}

		.navlinks{
			padding: 25px 10px 0 32px;
			width:auto;
			height: 120vh;
			border-right: 1px solid #ccc;
			position: absolute;
			top:100%;
			left:-100%;
			gap:20px;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			background:#fff;
			transition:left 0.4s ease-out;
		}

		.navlinks a{
			width: auto;
			height:3vh;
			margin-right:50px;
		}
		.navlinks a::after{
			top: 100%;
		}

		.theme-toggle{
			order:3;
		}

		.active{
			left:0;
			transition:left 0.4s ease-out;
		}
	}
</style>
