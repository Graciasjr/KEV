<script>
  import { is_empty } from "svelte/internal";


   export let data;

   
   if(is_empty(data)){
   setTimeout(
      async()=>{
         console.log(data.Article);
   },1000)
   }

</script>

<article>
   {#await data.Article then dat }
   <header>
      {@html data.Article.title}
   </header>
   <section>
      {@html dat.postContent}      
   </section>
   {/await}
   
   

</article>



<style>

   article
   {
      border: 1px solid;
      width:77%;
      padding: 10px 20px;
      display: flex;
      flex-direction: column;
      margin:20px auto;
      gap: 10px;
   }

   header
   {
      border: 1px solid;
      width: 100%;
      margin: 0 0 10px 0;
      display: flex;
      flex-direction: column;
      gap: 5px;
   }

   section{
      border: 1px solid;
      padding: 5px 0 0 0;
   }

  section h2
   {
      /* border: 1px solid; */
      width:77%;
      color: crimson;
      /* margin: 0 auto; */
   }
   header .illustation-bg
   {
      border: 1px solid;
      width: 60%;
      height:35vh;
      margin: 0 auto;
      border-radius: 5px;
   }

   .online-date
   {
      font-size: 11px;
      color: #646464;
      /* margin:0 auto; */
   }

   .article-body
   {
      border: 1px solid;
      width: 100%;
   }

   .description
   {
      border: 1px solid;
      margin-bottom: 20px;
   }

   .subheadings
   {
      border: 1px solid;
      margin-bottom:20px;
   }

   .dev
   {
      border: 1px solid;
      display: block;
      margin-top: 5px;
   }

   ul
   {
      border: 1px solid;
      /* margin-left: 20px; */
      width: 90%;
      position: relative;
      left: 5%;
   }
   
</style>