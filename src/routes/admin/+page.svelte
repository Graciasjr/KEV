<script>
    import HeaderContent from "$lib/components/previewer/headerContent.svelte";
    import BodyContent from "$lib/components/previewer/bodyContent.svelte";
    import Editor from "$lib/components/blogEditor/Editor.svelte";

    let pageHeader =
    {
        rubriqueTitle:"Santé",
        rubriqueDescription:"The latest and best healthy articles selected by our editorial office"
    }
    
    let santeArticlesData =
    [
        {
            id:"dsfsdxdsf",
            title:"Astuces pour prendre soin de son coeur éfficacement",
            categorie:"Cardio",
            illustrationImage:"",
            randomColor:"83828286",
            articleNature:"sante",
            date:"01/01/2023"            
        },
        {
            id:"dsfsdxdsf",
            title:"Astuces pour prendre soin de son coeur éfficacement",
            categorie:"Cardio",
            illustrationImage:"",
            randomColor:"83828286",
            articleNature:"sante",
            date:"01/01/2023"            
        },
        {
            id:"dsfsdxdsf",
            title:"Astuces pour prendre soin de son coeur éfficacement",
            categorie:"Cardio",
            illustrationImage:"",
            randomColor:"83828286",
            articleNature:"sante",
            date:"01/01/2023"            
        }
    ]

   let blogEditor = false;

    

</script>
<section>
    <Editor bind:open={blogEditor}></Editor>
    <div class="headerContent">
        <button on:click={()=>{blogEditor=true}}>
            Nouveau
        </button>
    </div>

    <div class="bodyContent">
       <BodyContent ArticlesData={santeArticlesData}></BodyContent>
    </div>
</section>

<style>
    section
    {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px 40px;
        background-color:#ffff;
    }

    .headerContent
    {
        /* border: 1px solid; */
        width: 100%;
        height: 17vh;
    }

    button
    {
        width:auto;
        height:22px;
        padding: 3px 5px;
        border: 1px solid #d3d3d34b;
        position: relative;
        border-radius:3px;
        background:#fafafa /*#cccccc*/;
        cursor: pointer;
       transition: background 0.3s ease-out;
    }
    
    button:hover
    {
       background: #f0f0f0;
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