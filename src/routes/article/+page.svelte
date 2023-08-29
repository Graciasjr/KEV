<script>
    export let data;
    import HeaderContent from "$lib/components/previewer/headerContent.svelte";
    import BodyContent from "$lib/components/previewer/bodyContent.svelte";

    let pageHeader =
    {
        rubriqueTitle:"📜 Articles",
        rubriqueDescription:"Veuillez trouver ici tout nos articles"
    }
    $:cuisineArticlesData = [];

    setTimeout(
        async()=>{
            const datas = JSON.parse(await data.posts)
        for(let post of await datas)
        {
            let objet = 
            {
                categorie:post.postcategorie,
                title:post.title,
                date:post.created.slice(0,10),
                randomColor:post.randomColor,
                id:post.id
            };
            cuisineArticlesData.push(objet);
        }
        cuisineArticlesData = datas;
    },1500)     

</script>


<svelte:head>
	<title>DPIEJ 📜 Articles</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
    <div class="headerContent">
        <HeaderContent title={pageHeader.rubriqueTitle} description={pageHeader.rubriqueDescription}></HeaderContent>
    </div>

    <div class="bodyContent">
       <BodyContent ArticlesData={cuisineArticlesData}></BodyContent>
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