<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faBold, faItalic,faLink,faList,faRotateLeft,faRotateRight,faCaretDown,faImage,faH,faClose,faArrowRight} from '@fortawesome/free-solid-svg-icons'
    import PocketBase from 'pocketbase';
    import { marked } from 'marked';
    import {randomColor} from "$lib/components/utils/randomColor.svelte";
    import Alert from '$lib/components/animation/Alert.svelte';
    
    /* UseState */

    export let open=true;
    const pb = new PocketBase('https://sweet-juice.pockethost.io');
    // const pb = new PocketBase('http://127.0.0.1:3001');


    //BlogEditor variable
        $:categorieList = false;
        $:categorieSelected = '--Categories--';
        $:articleBoxView = false;
        $:articleTitle='';
        $:titles='';
        $:saveState = false;
        $:source="";
        $:files=[];
        $:formDatas = new FormData();
        $:Post ={
            title:marked(titles),
            postContent:marked(source),
            postcategorie:categorieSelected,
            randomColor:randomColor(),
        }    
    //Alert 
        $:Alerts={
            alertView:false,
            alertMessage:'Succès',
            alertCode:1,
        }

    // all internal function
    async function alertError(errorMessage){
        Alerts.alertView=true;
        Alerts.alertMessage = await errorMessage;
        Alerts.alertCode=348;
        setTimeout(async()=>{
            Alerts.alertView=false;
        },3500)
    }

    async function alertSucces(successMessage){
        Alerts.alertView=true;
        Alerts.alertMessage=await successMessage;
        Alerts.alertCode=115;
        saveState=true;
        // const authData =await pb.admins.authWithPassword('graciasdagadgc@gmail.com','Zdp3SE7r5GTKume');
        const record = await pb.collection('post').create(await formDatas);
        setTimeout(async()=>{
            Alerts.alertView=false;
            saveState=false;
            reset();
        },3500)
        
    }

    async function basicVerification()
    {
        //categorie, titre,image,source
        //un ternaire en bonne et due forme hihi😋
        (categorieSelected==='--Categories--')?alertError("Tu dois sélectionner une catégories\n 😋 !!!"):(articleTitle==='')?alertError("Tu dois penser à écrire le titre de l'article \n 😋 !!!"):(files.length==0)?alertError("Les images c'est bon pour la communication visuel, alors mets-en\n 😋 !!! "):alertSucces("Succès, ton blog est publié 😋!!!");
    }
    // const authData = pb.admins.authWithPassword('graciasdagadgc@gmail.com','Zdp3SE7r5GTKume');
    async function reset(){        
            Post.title="";
            Post.postContent="";
            Post.postcategorie="--Categories--";
            categorieSelected = '--Categories--';
            articleTitle = '';
            source="";           
            Post.randomColor=randomColor();    
            formDatas=new FormData();
        
    }

    async function insertImg(target)
    {
        files = target.files;
        const src = URL.createObjectURL(files[0]);
        let img = `![](${src})`;
        source =source+"\n"+img;
    }
    
    async function submitPost()
    {
        formDatas.append('title',Post.title);
        formDatas.append('postContent',Post.postContent);
        formDatas.append('postcategorie',Post.postcategorie);
        formDatas.append('image',files[0]);
        formDatas.append('randomColor',Post.randomColor);
        basicVerification();          
    }

// front: BlogEditor  functions 
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
        let list =`- **first list**`
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
                <button class="{saveState?"loading-save":"notSave"} blog-logo " on:click={submitPost}></button>
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
                            <button on:click={()=>{selectCategorie('article')}}>Santé</button>
                            <button on:click={()=>{selectCategorie('annonce')}}>Cuisine</button>
                            <!-- <button on:click={()=>{selectCategorie('Chrétienneté')}}>Chretienneté</button> -->
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
                        <form enctype="multipart/form-data" method="POST" on:submit={submitPost}>
                            <input name="files" type="file" id="img" on:change={async(e)=>{
                                insertImg(e.target)
                            }} accept="image/*" hidden> 
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
                    {@html marked.parse(source)}

                    <style>

                        h2{
                            /* display:inline-block; */
                            margin:0px auto;
                            width:90%;
                            margin:10px;
                            text-align:center;
                        }
                        img{
                            width:67%;
                            height:30vh;
                            display:block;
                            object-fit:cover; 
                            object-position:top;                                                  
                            margin: 0px auto;
                            margin-bottom:25px;
                            border-radius: 5px;
                            border: 1px solid #ccc;
                        }

                        a{
                            color:#41d6e1;
                            font-weight:bold;
                            font-size:12px
                        }

                        ul{
                            border:1px solid #fafafa;
                            padding:0 0 0 25px;
                            margin:5px 0;
                            width:50%;
                            background-color:#fafafa;
                            border-radius:5px;
                        }

                        ul li{
                            min-width:100px;
                            font-size:12px;
                            /* border:1px solid; */
                            margin:0;
                            list-style:disc;
                            /* font-weight:600; */
                            color:#41d6e1;
                        }
                    </style>
                </div>
            </div>
        </div>
        {#if Alerts.alertView}            
            <div class="alert">
                <Alert alertMessage={Alerts.alertMessage} alertCode={Alerts.alertCode}></Alert>
            </div>
        {/if}
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
        position:absolute;
        top:0;
        left: 0;
        background: #0000000a;
        z-index:1;
        transition: all ease-out 0.3s;
    }

    .editor{
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
        width: 100px;
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
        color:var(--secondaryButtonColor);
    }

    .notSave:before{
        content:"Enregistrer"
    }

    .loading-save::before{
        content:"..."
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
        font-weight:bold;
        cursor: pointer;
        border:none;
        font-size: 11px;
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
        font-size: 11px;
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
        width: 100%;
        height: auto;
        display: flex;
        overflow-y: auto;
        padding: 0px 5px;
        background:#fff;

    }

    .temporalContent{
        height: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .edit-panel .left-panel{
        width: 50%;
        height:auto;
    }

    .left-panel textarea{
        font-family: sans-serif;
        padding: 10px 0 0 10px;
        width: 100%;
        min-height:79vh;
        resize: none;
        border: none;
        background:#000;
        color: #fff;
        border-radius: 5px;
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
        width: 50%;
        height: auto;
        padding: 10px 0 0 25px;
    }   
    .alert{
        width:auto;
        position: absolute;
        top:80%;
        left:80%;
        
    } 
</style>