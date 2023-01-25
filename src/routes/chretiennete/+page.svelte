<script>
    import HeaderContent from "../../lib/components/previewer/headerContent.svelte";
    import BodyContent from "../../lib/components/previewer/bodyContent.svelte";

    let pageHeader =
    {
        rubriqueTitle:"Chrétienneté",
        rubriqueDescription:"The latest and best Christian articles selected by our editorial office"
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

    

</script>

<section>
    <div class="headerContent">
        <HeaderContent title={pageHeader.rubriqueTitle} description={pageHeader.rubriqueDescription}></HeaderContent>
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
        padding: 20px 70px;
        background-color:#ffff;
    }
</style>