<script>
    import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
    import { marked } from 'marked';
    import { DOMPurify} from 'isomorphic-dompurify';


    // let fonctionnality =
    // [
    //     bold,italic,underlined,ordernedList,UnordenedList,back,next,link,justify
    // ]
    export let open=true;
    async function close()
    {
        open = false
    }

    let source =
    `
    `;

    
    
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
            <div class="header"></div>
            <div class="edit-panel">
                <div class="left-panel">
                    <textarea name="" bind:value={source}></textarea>
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
        border: 1px solid;
        display: flex;
        padding: 5px 10px;
        justify-content: space-between;
    }

    .blog-logo{
        border: 1px solid #ccc;        
        padding:5px 10px 0 10px;
        border-radius: 1px;  
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

    .header
    {
        border: 1px solid;
        margin-top: 33px;
        width: 100%;
        height: 7vh;
        
    }

    .edit-panel
    {
        border: 1px solid #ccc;
        width: 100%;
        height: 83vh;
        display: flex;
        overflow: auto;

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
        padding: 10px 10px;
    }
    
</style>