<script>
    import '$lib/app.css'
    import Loader from "$lib/components/animation/Loader.svelte";
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faTrash,faEye,faHeart,faShareFromSquare} from '@fortawesome/free-solid-svg-icons';
    import Pocketbase from 'pocketbase';
    export let ArticlesData;
    $:data=[]
    $:deleteStatus = false

    // const fileUrl = "http://127.0.0.1:3001/api/files"
    const fileUrl = "https://sweet-juice.pockethost.io/api/files"
    
    async function deleteArticle(id){
        deleteStatus=true;
        const pb = new Pocketbase('https://sweet-juice.pockethost.io');
        // const pb = new Pocketbase('http://127.0.0.1:3001');
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
    <div class="body border-black py-1 pl-[10px] w-full min-h-[50vh] flex flex-wrap gap-[17px]">
        {#await ArticlesData}        
            <div class="absolute top-[45%] left-[40%]">
                <Loader></Loader>
            </div>
        {:then articles}
            {#each articles as article}
                <!-- <div class="article-card rounded-[5px] w-[250px] h-[197px] flex flex-col gap-[7px]  " style="background:hsl({article.randomColor}, 71%, 68%) ;">
                    <div class=" flex justify-between">
                        <span class="text-[12px] text-[#ffffffd2] "><strong>{article.categorie}</strong></span>
                        {#if $page.url.pathname==="/admin"}                        
                            <button class="del-article border-0 bg-[inherit] mr-[5px] cursor-pointer text-[#000000a1] hover:text-[#dc143ce3] " on:click={async()=>{deleteArticle(article.id)}}>
                                <Fa icon={faTrash}></Fa>
                            </button>
                        {/if}
                    </div>
                    <span class="w-[95%] h-[70%] text-[12px] ">
                        {@html article.title}
                    </span>
                    <div class="w-full flex justify-between items-center ">
                        <a class="read-article-link w-[58px] inline decoration-none text-[10px] font-bold px-[3px] py-[3px] bg-white rounded-[3px] text-center " style="color:hsl({article.randomColor}, 81%, 68%);font-weight:bolder;" href="/{article.id}">Lire</a>
                        <span class="inline text-[10px] font-bold text-[#ffffffd2] ">{article.date}</span>
                    </div>
                    
                    <style>
                        h2{
                            font-size:15px;
                        }
                    </style>
                </div> -->
                <div class="article-card border-black rounded-[7px] w-[340px] h-[45vh] flex flex-col gap-[10px] " style="bacckground:hsl({article.randomColor}, 71%, 68%) ;">
                    <a href="/{article.id}" class="border-black w-[300px] h-auto max-h-[10vh] px-[5px] py-[2px] text-[14px] font-bold ">{@html article?.title}</a>
                    <span class="img-container w-full h-[22vh] border-black ">
                        <img class=" rounded-[12px] w-full h-full object-cover object-top" src={`${fileUrl+'/'+article.collectionName+'/'+article.id}/${article.image}`} alt="">
                    </span>
                    <span class=" rounded-[5px] w-auto max-w-[40%] h-auto text-[10px] text-[#000] font-bold px-[5px]" style="color:hsl({article.randomColor}, 71%, 68%) ;">Publié le {article.updated.slice(0,10)}</span>
                    <div class="btns-container rounded-[10px] border-2 border-[#cecece] w-[100px] mx-auto h-[10vh] flex justify-center gap-[7px] items-center">
                        <a href="/{article.id}" class="btns relative rounded-[7px] w-[27px] h-[25px] flex justify-center items-center border-black hover:bg-[#bde3e6a9] ">
                            <Fa icon={faEye} color="#cecece" size="0.9x"></Fa>
                            <span class="absolute text-[10px] text-center px-[0px] py-[4px] text-white bg-black w-[40px] rounded-[5px] left-[5px] bottom-[26px] font-bold">Lire</span>
                        </a>
                        <button class="btns relative rounded-[7px] w-[27px] h-[25px] flex justify-center items-center border-black hover:bg-[#bde3e6a9] ">
                            <Fa icon={faHeart} color="#cecece" size="0.9x"></Fa>
                            <span class="absolute text-[10px] px-[0px] py-[4px] text-white bg-black w-[80px] rounded-[5px] left-[5px] bottom-[26px] font-bold">Aimer (Beta)</span>
                        </button>
                        <button class="btns relative rounded-[7px] w-[27px] h-[25px] flex justify-center items-center border-black hover:bg-[#bde3e6a9]">
                            <Fa icon={faShareFromSquare} color="#cecece" size="0.9x"></Fa>
                            <span class="absolute text-[10px] px-[0px] py-[4px] text-white bg-black w-[80px] rounded-[5px] left-[5px] bottom-[26px] font-bold">Copier le Lien</span>
                        </button>
                    </div>                    
                </div>
            {/each}   
            {#if articles.length==0}
                Aucun article à lire
            {/if}       
        {/await}
    </div>
</section>
<style>

    .article-card
    {
        box-shadow:0px 0px 1px 3px #ccc;
        padding:10px 8px 10px 8px;
    }

    .btns span{
        display:none;
    }

    .btns:hover span{
        display:inline;
    }   

    
    .del-article{
        transition: color 0.3s ease-out;  
    }


    @media only screen and (max-width:450px){
        .body{
            justify-content: center;
        }

        .article-card{
            box-shadow:0px 0px 1px 1px #ccc;
            background-color:#ccc;
            border-radius:20px;
            height:38vh;
        }

        .img-container{
            width:95%;
            margin:0 auto;
        }

        .btns-container{
            background:#000000ce;
        }

    }
    
</style>