<script>
	import '$lib/app.css';
	import { page } from '$app/stores';
	import Fa from 'svelte-fa/src/fa.svelte';
	import {faMoon,faSun,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
	
	const navLinks=['annonces','article']
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
	<nav class="w-full fixed z-[2] top-0 bg-[#ffffff] flex items-center justify-between py-[7px] px-[37px] ">
		{#if $page.url.pathname === "/"+$page.params.slug}
			<button class="back border-0 w-[25px] h-[25px] flex justify-center items-center rounded-[2px] bg-[inherit] cursor-pointer hover:bg-[#ddd] focus:bg-[#ddd] " on:click={back}>
				<Fa icon={faArrowLeft}></Fa>
			</button>
		{/if}
		<div class="logo-content w-[50px] text-center text-[18px] font-bold relative ">
			<span class="logo">DPIEJ</span>
		</div>
		{#if $page.url.pathname === "/annonce" || $page.url.pathname === "/article"}	
			<div class="navlinks-container w-[300px]">
				<button class="hamburger" aria-label="Voir le menu" on:click={()=>{navLinksSidepanel=!navLinksSidepanel}}>
					<span></span>
					<span></span>
					<span></span>
				</button>			
				<span class="navlinks w-full flex justify-between {navLinksSidepanel?'active':'' }">
					<a href="/annonce" class="{`${$page.url.pathname==="/annonce"?"links-active text-[16px] font-bold ":""}`} " aria-label="La Page Annonce" aria-current="Page" on:click={disableSidePanel}>Annonces 📢</a>
					<a href="/article" class="{`${$page.url.pathname==="/article"?"links-active text-[16px] font-bold ":""}`}" aria-label="La Page Article" aria-current="{$page.url.pathname ==="/article"?"Page":""}" on:click={disableSidePanel}>Articles 📜</a>
					<!-- <a href="/chretiennete" class="sante {`${$page.url.pathname==="/chretiennete"?"links-active":""}`}" aria-label="La Page Chretienneté" aria-current="{$page.url.pathname ==="/chretiennete"?"Page":""}" on:click={disableSidePanel}>Chrétienneté</a> -->
				</span>
			</div>
		{/if}
			
		
		<div class="theme-toggle border-2 border-[#ccc] inline-block rounded-[7px]">
			<input class="theme-handle" type="checkbox" id="button" checked>
			<!-- display:flex;position: relative;cursor: pointer; -->
			<label for="button" class="pl-[5px] px-[1px] py-[1px] w-full h-full flex justify-center relative cursor-pointer">
				<span class="moon w-[25px] h-[25px] text-center py-[3px]">
					<Fa icon={faMoon} size={"1.2x"} color={"gray"}></Fa>
					<span class="inline absolute text-white font-bold text-[12px] bg-black px-1 py-1 rounded-[3px] ">Light</span>
				</span>
				<span class="sun w-[25px] h-[25px] text-center py-[3px]">
					<Fa icon={faSun} size={"1.2x"} color={"orange"} style={""}></Fa>
					<span class="absolute inline text-white font-bold text-[12px] bg-black px-1 py-1 rounded-[3px] ">Light</span>
				</span>
			</label>
		</div>
		
	</nav>		
</header>



<style>
	
	nav{
		box-shadow: inset 0px -1px 1px #c4c4c4;
	}


	.navlinks-container .hamburger
	{
		display: none;
	}


	.navlinks a
	{
		width: auto;font-size: 14px;text-decoration: none;color: #7c7c7c;position: relative;
	}

	a.links-active
	{
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

	label .moon span,.sun span{
		display:none;
		transition:all ease-in-out 0.3s;
	}

	.theme-handle
	{
		display: none;
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
