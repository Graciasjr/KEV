<script>
    export let data;
    import HeaderContent from "$lib/components/previewer/headerContent.svelte";
    import BodyContent from "$lib/components/previewer/bodyContent.svelte";
    import Editor from "$lib/components/blogEditor/Editor.svelte";
  import { is_empty } from "svelte/internal";
    
    let blogEditor = false;
    $:ArticleDataFormatted = [];

    setTimeout(
        async()=>{
        for(let post of data.posts.reverse())
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

        ArticleDataFormatted = ArticleDataFormatted;
    },1500)

</script>
<section>
    <Editor bind:open={blogEditor}></Editor>
    <div class="headerContent">
        <button on:click={()=>{blogEditor=true}}>
            Nouveau
        </button>
    </div>

    <div class="bodyContent">
        {#await ArticleDataFormatted }
            <p>Un instant ça charge</p>
        {:then Article } 
            <BodyContent ArticlesData={ArticleDataFormatted}></BodyContent>        
        {/await}
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

    button
    {
        width:auto;
        height:22px;
        padding: 3px 5px;
        border: 1px solid #d3d3d34b;
        position: relative;
        border-radius:3px;
        color: #fafafa;
        background:royalblue /*#cccccc*/;
        cursor: pointer;
       transition: background 0.3s ease-out;
    }
    
    button:hover,
    button:focus
    {
       background: #4169e1c9;
       transition: background 0.3s ease-out;
       
    }


    /* .new-article button{
        width: auto;
        height: auto;
        background: transparent;
        border-color: transparent;
        cursor: pointer;
    }

    .new-article button::before
    {
      content: "";
      display: inline-block;
      width: 4px;
      height: 19px;
      position: relative;
      top: 1px;
      background: #a8a7a7;
      border-radius: 5px;
      border: none;
    }

    .new-article button::after
    {
        content: "";
        position: absolute;
        display: inline-block;
        width: 20px;
        height: 4px;
        left:4px;
        border-radius: 5px;
        transform: translateY(8.5px);
        background: #a8a7a7;
    }

     */
</style>