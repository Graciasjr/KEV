<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faBold, faItalic,faLink,faList,faRotateLeft,faRotateRight,faCaretDown,faImage,faH,faClose,faArrowRight} from '@fortawesome/free-solid-svg-icons'
    import { marked } from 'marked';
    import { DOMPurify} from 'isomorphic-dompurify';
    import PocketBase from 'pocketbase';
    import {randomColor} from "$lib/components/blogEditor/utils/randomColor.svelte";

    $:categorieList = false;
    $:categorieSelected = '--Categories--';
    $:articleBoxView = false
    $:articleTitle='';
    $:titles='';
    $:url='';
    $:source="";

    $:Post ={
        title:marked(titles),
        postContent:marked(source),
        postcategorie:categorieSelected,
        randomColor:randomColor,
    }
    
    const pb = new PocketBase('http://127.0.0.1:3000');
    // const authData = pb.admins.authWithPassword('graciasdagadgc@gmail.com','Zdp3SE7r5GTKume');
    let files;
    const formDatas = new FormData();
    
    async function insertImg(target)
    {
        // for(let file of targets.files){

        //     formDatas.append('file',file[0]);
        // }
        files = target.files[0];
        
        setTimeout(async()=>{
            console.log(files);
        },2000)
    }
    
    async function submitPost()
    {
        
        // console.log(randomColor);
        const record = await pb.collection('post').create(Post);

 
    }


    export let open=true;
    async function selectCategorie(cat){
        categorieSelected = cat
    }
    async function close(){
        open = false
    }

    async function title(){
        titles ='## '+articleTitle;      
        (source[0]===" ")?source=source.slice(1):source=source.slice(0,(source.length)-1);
        source=source+titles;
    }

    async function bold()
    {
        let bolder = '**Ecris ton mot ici**'
        if(source[0]===" ")
        {
            source =source.slice(1)
        }
        if(source[(source.length)-1]===" ")
        {
            source = source.slice(0,(source.length)-1)
        }
        source = source+" "+bolder
    }

    async function italic()
    {
        let italicer = '_Ecris ton mot ici_'
        if(source[0]===" ")
        {
            source =source.slice(1)
        }
        if(source[(source.length)-1]===" ")
        {
            source = source.slice(0,(source.length)-1)
        }
        source = source+" "+italicer
    }

    async function list()
    {
        let list =`- first list`
        if(source[0]===" ")
        {
            source =source.slice(1)
        }
        if(source[(source.length)-1]===" ")
        {
            source = source.slice(0,(source.length)-1)
        }

        (source==="")?source=source+list:source=source+"\n"+list
    }

    async function linked(){
        let bolder = '[mon lien](https://url.com)'
        if(source[0]===" ")
        {
            source =source.slice(1)
        }
        if(source[(source.length)-1]===" ")
        {
            source = source.slice(0,(source.length)-1)
        }
        source = source+" "+bolder
    }    

    
    
    
</script>
{#if open}
    
    <section>    
        <div class="editor">
            <div class="min-header">
                <button class="blog-logo" on:click={submitPost}>Enregistrer</button>
                <button class="close" on:click={close}>
                    <Fa icon={faClose} size={"1.35x"}></Fa>
                </button>
            </div>
            <div class="header">           
                <button class="article-cat" on:click={()=>{categorieList=!categorieList}}>
                    <input type="text" bind:value="{categorieSelected}" disabled>
                    <button class="caretDown">
                        <Fa icon={faCaretDown}></Fa>
                    </button>
                    {#if categorieList}                        
                        <div class="categorie-list">
                            <button on:click={()=>{selectCategorie('Santé')}}>Santé</button>
                            <button on:click={()=>{selectCategorie('Cuisine')}}>Cuisine</button>
                            <button on:click={()=>{selectCategorie('Chrétienneté')}}>Chretienneté</button>
                        </div>
                    {/if}
                    </button>
                <div class="global-container">
                    <span class="container">                        
                        <button on:click={()=>{articleBoxView=!articleBoxView}}>
                        <label for="titreText">
                            <Fa icon={faH} size={"1x"}></Fa>
                            <Fa icon={faCaretDown} size={"0.7x"} translateY={"-0.14x"}></Fa>
                        </label>
                        </button>
                        <span class="name">Titre</span>
                        {#if articleBoxView}                                          
                            <div class="titre">
                                <strong>Titre d'article</strong>
                                <div>
                                    <input type="text" id="titreText" bind:value={articleTitle}>
                                    <button on:click={()=>{
                                        title();
                                        articleBoxView=!articleBoxView;
                                        }}>
                                        <Fa icon={faArrowRight} size={'0.7x'}></Fa>
                                    </button>
                                </div>
                            </div>
                        {/if}
                    </span>
                    <span class="container">
                        <button on:click={bold}><Fa icon={faBold} size="1x"> </Fa></button>
                        <span class="name">Gras</span>
                    </span>
                    <span class="container ">
                        <button on:click={italic}><Fa icon={faItalic}></Fa></button>
                        <span class="name">Italic</span>
                    </span>
                    <span class="container">
                        <form enctype="multipart/form-data" on:submit={submitPost}>
                            <input type="file" id="img" on:change={async(e)=>{
                                insertImg(e.target)
                            }}> 
                        </form>                       
                        <button><label for="img"><Fa icon={faImage}></Fa></label></button>                        
                        <span class="name">Image</span>
                    </span>                    
                    <span class="container">
                        <button on:click={list}><Fa icon={faList}></Fa></button>
                        <span class="name">List</span>
                    </span>
                    <span class="container">
                        <button on:click={linked}><Fa icon={faLink}></Fa></button>
                        <span class="name">Lien</span>
                    </span>

                </div>
                
                <div class="temporalContent">
                    <span class="container">
                        <button><Fa icon={faRotateLeft}></Fa></button>
                        <!-- <span class="name">Back</span> -->
                    </span>
                    <span class="container">
                        <button><Fa icon={faRotateRight}></Fa></button>
                        <!-- <span class="name">Next</span> -->
                    </span>
                </div>
            </div>
            <div class="edit-panel">
                <div class="left-panel">
                    <textarea bind:value={source} on:select={(e)=>{}}></textarea>
                </div>
                <div class="rigth-panel">
                    {@html marked(source)}
                </div>
            </div>
        </div>
        
    </section>
{/if}

<style>
    
    :root{
        --secondaryButtonColor:#fafafa;
        --secondaryButtonBgColor:#4169e1;
        --secondaryButtonHvrBgClr:#4169e1ec;
    }
    section{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        background: #0000000a;
        z-index: 1;
        transition: all ease-out 0.3s;
    }

    .editor
    {
        width: 90%;   
        height:95%;
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 5px;
        background: #fff;
    }

    .min-header{
        /* border: 1px solid; */
        display: flex;
        padding: 5px 10px;
        justify-content: space-between;
    }
    

    .blog-logo{
        border: 1px solid #ccc;  
        padding:2px 10px 2px 10px;
        margin-left:10px;
        border-radius:2px;  
        color: var(--secondaryButtonColor);
        background-color:var(--secondaryButtonBgColor);
        outline: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        cursor: pointer;
    }

    .blog-logo:hover,
    .blog-logo:focus{
        background-color: var(--secondaryButtonHvrBgClr);
    }

    .close{
        border:0px;
        background: transparent;
        width: 30px;
        height: 30px;
        top: 0;
        left:93%;
        cursor: pointer;
        transition: all 0.3s ease-out;
    }

    .close:hover{
        background: /*#e2e0e049*/#d4748785;
        transition: background 0.1s ease-out;
    }

    .article-cat{
        border: 1px solid #cccccc94;
        width:130px;
        padding: 5px 3px;
        display: flex;
        align-items: center;
        align-self: center;
        position: relative;
    }

    .article-cat input{
        width:90%;
        cursor: pointer;
        border:none;
        background-color: inherit;
    }

    .article-cat input:focus{
        outline:none;
    }

    .article-cat button{
        /* cursor: pointer; */
        background-color: inherit;
        border: none;
    }

    .categorie-list{
        position: absolute;
        display: flex;
        flex-direction: column;
        background: #fff;
        left: 0;
        margin-top:2px;
        padding-top: 5px;
        top: 100%;
        width: 100%;
        border: 1px solid #cccccc94;

    }
    
    .categorie-list button{
        padding: 1px;
        padding-left: 3px;
        text-align:left ;
        width: 100%;
        font-size: 12px;
        cursor: pointer;
    }
    
    .categorie-list button:hover,
    .categorie-list button:focus{
        outline: 1px solid #fafafa;
        background: #e2e0e049;
        border-left: 1px solid /*#9b9a9a94*/ #4169e1;
        /* transition:border-left ease-out 0.3s; */
    }
    
    .header{
        width: 100%;
        height: 6vh;
        margin: 7px 0 10px 0;
        display:flex;
        justify-content: space-between;
        padding:0 1px 0 20px;
        box-shadow:0px 0px 3px #ccc;        
    }

    .global-container{
        min-width:250px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .global-container,
    .temporalContent{
        width: auto;
        height: 100%;
        align-items: center;

    }
    
    .global-container .container,
    .temporalContent .container{
        width:25px;
        height:25px;
        display: flex;
        position: relative;
    }

    .container:nth-child(4) input
    {
        display: none;
    }

    .container button{
        width:100%;
        height:100%;
        cursor: pointer;
        border: none;
        background: inherit;
        border-radius: 2px;
    }

    button:focus{
        color: #000;
        background: inherit;
    }
    .container button:hover{
        background: #cccccc5d;
    }
    .container button:hover + .name {
        display: block;
    }

    .titre{
        border: 1px solid #ccccccbe;
        border-radius: 5px;
        width: 300px;
        height: 70px;
        padding: 10px 5px;
        display: flex;
        flex-direction: column;        
        position: absolute;
        top: 100%;
        left:20px;
        gap: 3px;
        background: #fff;
        transition: border 0.2s ease-out;
    }
    .titre div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height:50%;
    }
    .titre div input{
        border: none;
        border-bottom: 1px solid #ccc;
        background: inherit;
        width: 255px;
        height: 100%;
        outline: none;
        font-weight: bold;
    }
    .titre:has(> div input:focus){
        box-shadow:inset 0px 0px 3px #cccccc8e;
    }


    .titre button{
        width: 22.5px;
        height: 22.5px;
        border: none;
        color: var(--secondaryButtonColor);
        background: var(--secondaryButtonBgColor);
    }
    .titre button:hover{
        background: var(--secondaryButtonHvrBgClr);
    }

    .name{
        display: none;
        position: absolute;
        background-color: #000;
        z-index: 1;
        color: #fff;
        width: auto;
        padding: 3px 7px;
        top:12px;
        font-size: 14px;
        left:23px;
        border-radius: 2px;
        pointer-events: none;
    }

    .edit-panel
    {
        /* border: 1px solid #ccc; */
        width: 100%;
        height: 83vh;
        display: flex;
        overflow: auto;

    }

    .temporalContent{
        height: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .edit-panel .left-panel{
        border: 1px solid;
        width: 50%;
        height: 99%;
    }

    .left-panel textarea{
        font-family: sans-serif;
        padding: 10px 0 0 10px;
        width: 100%;
        height: 100%;
        resize: none;
        border: none;
        background:#000;
        color: #fff;
    }

    .left-panel textarea::selection{
        color: #000;
        background: #84c6d1;
    }

    .left-panel textarea:focus{
        outline: none;
    }


    .rigth-panel 
    {
        padding: 10px 0 0 25px;
    }
    
</style>