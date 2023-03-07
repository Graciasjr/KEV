<script>
    import Loader from "$lib/components/animation/Loader.svelte";
    import { page } from "$app/stores";
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faTrash} from '@fortawesome/free-solid-svg-icons';
    import Pocketbase from 'pocketbase';
    export let ArticlesData = "";
    $:data=[]
    $:deleteStatus = false
    
    async function deleteArticle(id){
        deleteStatus=true;
        const pb = new Pocketbase('https://sweet-juice.pockethost.io');
        await pb.collection('post').delete(`${id}`);
        setTimeout(async()=>{
            data = await  pb.collection('post').getFullList();
            ArticlesData =[]
            for(let post of data.reverse())
            {
                let objet = 
                {
                    categorie:post.postcategorie,
                    title:post.title,
                    date:post.created.slice(0,10),
                    randomColor:post.randomColor,
                    id:post.id
                };            
                ArticlesData.push(objet);
            }
            ArticlesData = ArticlesData;
    
            },Math.floor(Math.random()*2000)
        )
        deleteStatus = false;
    }
</script>

<section>
    <div class="body">
        <!-- svelte-ignore empty-block -->
        {#if ArticlesData == ""}
            <div class="loader">          
                <Loader></Loader>
            </div>
        {:else}
            {#await ArticlesData}
                {:then articles}           
                {#each articles as article}
                    <div class="article-card" style="background:hsl({article.randomColor}, 71%, 68%) ;">
                        <div class="art-card-head">
                            <span class="categorie"><strong>{article.categorie}</strong></span>
                            {#if $page.url.pathname==="/admin"}                        
                                <button class="del-article" on:click={async()=>{deleteArticle(article.id)}}>
                                    <Fa icon={faTrash}></Fa>
                                </button>
                            {/if}
                        </div>
                        <span class="title">
                            {@html article.title}
                        </span>
                        <div class="footer">
                            <a style="color:hsl({article.randomColor}, 81%, 68%);font-weight:bolder;" href="/{article.id}" class="read-article-link">Lire</a>
                            <span class="date">{article.date}</span>
                        </div>
                        
                        <style>
                            h2{
                                font-size:15px;
                            }
                        </style>
                    </div>
                {/each}          
            {/await}        
        {/if}
    </div>
</section>
<style>

    .body
    {
        width: 100%;
        min-height:50vh;
        display: flex;
        flex-wrap:wrap;
        gap: 17px;
        padding: 1px 0 1px 10px;
    }
    .article-card
    {
        width: 250px;
        height: 197px;
        padding:12px 8px 10px 8px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        border-radius: 5px;
        box-shadow: 1px 5px 8px #83828286;
    }
    .art-card-head{
        display: flex;
        justify-content: space-between;
    }

    .categorie
    {
       font-size: 12px; 
       color:#ffffffd2;
    }
    
    .del-article{
        border: 0px;
        background: inherit;
        margin-right: 5px;
        cursor: pointer;    
        color: #000000a1;  
        transition: color 0.3s ease-out;  
    }

    .del-article:hover{
        color:#dc143ce3;        
    }
   
    
    

    .title
    {
        width:95%;
        height:70%;
        font-size: 12px;
    }
    
    .footer
    {
        width: 100%;
        display:flex;
        justify-content: space-between;
        align-items:center;
        
    }

    .read-article-link
    {
        width:58px;
        display: inline;
        text-decoration: none;
        font-size: 10px;
        font-weight: bold;
        padding: 3px;
        background: #ffff;
        border-radius:3px;
        text-align: center;
        box-shadow: 0px 1px 17px #66656562;
    }

    a.read-article-link:hover
    {
        animation: name duration timing-function delay iteration-count direction fill-mode;
        animation: buttonAnimate 0.2s  ;
    }

    @keyframes buttonAnimate{
        from{
            transform: rotate(-10deg);
        }
        to{
            transform: rotate(10deg);
        }
    }
    .date
    {
        display:inline;
        font-size: 10px;
        font-weight:600;
        color:#ffffffd2/*#ffffffd7*/;
    }

    .body .loader{
        position: absolute;
        top: 45%;
        left:40%;
    }
    
</style>