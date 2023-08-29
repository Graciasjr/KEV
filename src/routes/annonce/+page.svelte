<script>
    export let data
    import HeaderContent from "$lib/components/previewer/headerContent.svelte";
    import BodyContent from "$lib/components/previewer/bodyContent.svelte";
    
    let pageHeader =
    {
        rubriqueTitle:"📢 Annonces",
        rubriqueDescription:"Veuillez trouver ici toute les annonces relatifs à nos évenements et activités"
    }
    $:santeArticlesData = [];

    setTimeout(
        async()=>{
        const datas = JSON.parse(await data.post)
        santeArticlesData = datas;        
    },1500)    

</script>
<svelte:head>
	<title>DPIEJ 📢 Annonces</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <div class="headerContent">
        <HeaderContent title={pageHeader.rubriqueTitle} description={pageHeader.rubriqueDescription}></HeaderContent>
    </div>

    <div class="bodyContent">
       <BodyContent ArticlesData={santeArticlesData}></BodyContent>
    </div>
</section>

<style>
    section
    {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 20px 40px;
        background-color:#ffff;
    }
</style>