<script>
    export let data;
    import BodyContent from "$lib/components/previewer/bodyContent.svelte";
    import Editor from "$lib/components/blogEditor/Editor.svelte";
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faRefresh} from '@fortawesome/free-solid-svg-icons';
    import Pocketbase from 'pocketbase';
    const pb = new Pocketbase('https://sweet-juice.pockethost.io');
    // const pb = new Pocketbase('http://127.0.0.1:3001');

    let blogEditor = false;
    $:ArticleDataFormatted = [];
    $:refresh=false;
    async function fetcher (){
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
            ArticleDataFormatted.push(objet);
        }
        ArticleDataFormatted = datas;
    }
    
    async function handleRefresh()
    {
        ArticleDataFormatted = [];
        refresh=true;
        setTimeout(async()=>{
            const postCollection = await pb.collection('post').getFullList({
                sort:'-created'
            });
            data =await JSON.parse(JSON.stringify(postCollection))
            ArticleDataFormatted = data
            fetcher();
            refresh=false;
        },1000)
    }

    setTimeout(
        async()=>{
            fetcher();        
    },Math.floor(Math.random()*1250))

</script>
<section>   
    <Editor bind:open={blogEditor}></Editor>
    <div class="headerContent">
        <button on:click={()=>{blogEditor=true}}>
            Nouveau
        </button>
        <button on:click={handleRefresh}>
            {#if refresh==false}
            <Fa icon={faRefresh}></Fa> 
            {:else if refresh==true}               
            <Fa icon={faRefresh} spin></Fa> 
            {/if}
        </button>
    </div>    
 
    <div class="bodyContent">
        <BodyContent ArticlesData={ArticleDataFormatted}></BodyContent>       
    </div>

</section>

<style>
    section
    {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px 34px;
        background-color:#fafafa;
    }

    .headerContent
    {
        width: 100%;
        height: 10vh;
    }

    .headerContent button
    {
        width:auto;
        padding:2px 7px;
        border: 1px solid #d3d3d34b;
        border-radius:3px;
        color: #fafafa;
        font-size: 10px;
        font-weight: bold;
        background:royalblue;
        cursor: pointer;
       transition: background 0.3s ease-out;
    }
    
    .bodyContent{
        width: 100%;
        height: 100%;
        padding-left: 27px;
    }

    button:hover,
    button:focus
    {
       background: #4169e1c9;
       transition: background 0.3s ease-out;
       
    }


    
</style>