<script>
    export let data;
    import HeaderContent from "../../lib/components/previewer/headerContent.svelte";
    import BodyContent from "../../lib/components/previewer/bodyContent.svelte";

    let pageHeader =
    {
        rubriqueTitle:"Cuisine",
        rubriqueDescription:"The latest and best Foody articles selected by our editorial office"
    }
    $:cuisineArticlesData = [];

    setTimeout(
        async()=>{
        let reverseData = await data.posts.reverse();    
        for(let post of await reverseData)
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
        cuisineArticlesData = cuisineArticlesData;
    },1500)     

</script>


<svelte:head>
	<title>KEV Cuisine</title>
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
        padding: 20px 70px;
        background-color:#ffff;
    }
</style>