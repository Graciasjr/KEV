<script>
    import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
    import { marked } from 'marked';
    import { DOMPurify} from 'isomorphic-dompurify';
    import Fa from 'svelte-fa/src/fa.svelte';
    import {faBold, faItalic,faLink,faUnderline,faList,faRotateLeft,faRotateRight,faCaretDown,faCaretUp,faImage} from '@fortawesome/free-solid-svg-icons'
  import { listen, text } from 'svelte/internal';
    $:categorieList = false;

    let style = [
        {
            name:bold(),
            active:false,     
        }   

    ]
    export let open=true;
    async function close(){
        open = false
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
        console.log(source.select())
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
        // console.log(source.select())
    }

    async function list()
    {
        let list =`-   first list`
        if(source[0]===" ")
        {
            source =source.slice(1)
        }
        if(source[(source.length)-1]===" ")
        {
            source = source.slice(0,(source.length)-1)
        }
        source = source+"\n"+list
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
        console.log(source.select())
    }
    let source =
    "";

    
    
</script>
{#if open}
    
    <section>    
        <div class="editor">
            <div class="min-header">
                <span class="blog-logo">blogEditor</span>
                <button class="close" on:click={close}>
                    <IoIosClose></IoIosClose>
                </button>
            </div>
            <div class="header">
                <div class="article-cat">
                    <input type="text" value="Categories" disabled>
                    <button class="caretDown" on:click={()=>{categorieList=!categorieList}}>
                        <Fa icon={faCaretDown}></Fa>
                    </button>
                    {#if categorieList}                        
                        <div class="categorie-list">
                            <span>Santé</span>
                            <span>Cuisine</span>
                            <span>Chretienneté</span>
                        </div>
                    {/if}
                </div>
                <div class="global-container">
                    <span class="container">
                        <button on:click={bold}><Fa icon={faBold}></Fa></button>
                        <span class="name">Gras</span>
                    </span>
                    <span class="container ">
                        <button on:click={italic}><Fa icon={faItalic}></Fa></button>
                        <span class="name">Italic</span>
                    </span>
                    <span class="container">
                        <button><Fa icon={faImage}></Fa></button>
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
                        <span><Fa icon={faRotateLeft}></Fa></span>
                        <!-- <span class="name">Back</span> -->
                    </span>
                    <span class="container">
                        <span><Fa icon={faRotateRight}></Fa></span>
                        <!-- <span class="name">Next</span> -->
                    </span>
                </div>
            </div>
            <div class="edit-panel">
                <div class="left-panel">
                    <textarea name="" bind:value={source} on:select={(e)=>{console.log(e.target);
                    }}></textarea>
                </div>
                <div class="rigth-panel">
                    {@html marked(source)}
                </div>
            </div>
        </div>
        
    </section>
{/if}

<style>

    section{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.192);
        z-index: 1;
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
        padding:5px 10px 0 10px;
        border-radius: 1px;  
        font-style: italic;
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
        transform: scale(1.2);
        transition: transform 0.3s ease-out;
    }

    .article-cat{
        border: 1px solid #ccc;
        width:130px;
        height: 70%;
        display: flex;
        align-items: center;
        align-self: center;
        position: relative;
    }

    .article-cat input{
        width:90%;
        border:none;
        background-color: inherit;
    }

    .article-cat input:focus{
        outline:none;
    }

    .article-cat button{
        cursor: pointer;
        background-color: inherit;
        border: none;
    }

    .categorie-list{
        position: absolute;
        display: flex;
        flex-direction: column;
        background: #fff;
        left: 0;
        margin-top:1.5px;
        padding-top: 5px;
        top: 100%;
        width: 100%;
        border: 1px solid #fafafa;

    }
    
    .categorie-list span{
        border-bottom: 1px solid #ccc;
        padding: 3px;
        width: 100%;
    }

    .categorie-list span:hover{
        background: #ccc;
        color: #fafafa;
    }
    .header
    {
        width: 100%;
        height: 6vh;
        margin: 7px 0 10px 0;
        display:flex;
        justify-content: space-between;
        padding:0 1px 0 20px;
        box-shadow:0px 0px 3px #ccc;        
    }

    .global-container
    {

        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap:20px;
    }
    
    .global-container .container,
    .temporalContent .container{
        /* border-right: 1px solid #ccc; */
        width: 45px;
        height: 100%;
        display: flex;
        place-items: center;
        position: relative;
        border-radius: 50%;
    }


    .container button:nth-child(1){
        border-radius: 50%;
        cursor: pointer;
        border: none;
        background: inherit;
    }

    .container button:nth-child(1):hover + .name
    {
        display: block;
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
        border: 1px solid #ccc;
        width: 100%;
        height: 83vh;
        display: flex;
        overflow: auto;

    }

    .temporalContent{
        /* border: 1px solid; */
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        /* gap:5px; */
    }

    .edit-panel .left-panel{
        border: 1px solid;
        width: 50%;
        height: 97%;
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