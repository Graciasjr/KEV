<script>
   import { is_empty } from "svelte/internal";
   export let data;   
   $: mapData = {
      Article:{
         title:"",
         collectionName:"",
         id:"",
         randomColor:"",
         title:"",
         created:"",
         postcategorie:"",
         postContent:""

   }};

   setTimeout(
      async()=>{
        mapData = await data;
   },Math.floor(Math.random()*1750))

   let fileUrlHead ="http://127.0.0.1:3000/api/files/"

</script>

<article>
   {#await mapData.Article then dat }
      {#if dat.title!="" && dat.collectionName!==""}         
         <header style="background:url('{fileUrlHead+dat.collectionName+"/"+dat.id+"/"+dat.image}'); background-repeat:no-repeat; background-size:cover; background-position-y:top; color:hsl({dat.randomColor} , 71%, 68%);" >
            <span class="title">
               {@html dat.title}
            </span>      
            <div class="footer">
               <span class="date" style="color:#000;font-weight:bolder; text-decoration:underline; cursor:pointer;">
                  {@html dat.created.slice(0,10)}
               </span>            
               <span class="categorie">
                  {@html dat.postcategorie}
               </span>
            </div>
         </header>
         <section>
            {@html dat.postContent}     
         </section>      
         <style>
         
            section h2{
               display:none;
            }

            h2{
               
               text-align:center;
               margin:0;
               padding:2px;
               font-family:sans-serif;
            }

            p{
               margin-bottom:5px;
               font-size:13px;

            }

            a{
               color:#41d6e1;
               font-weight:bold;
            }
            a:hover{
            text-decoration:none;
            }

            img{
               display:none;
               
            }
            ul{
               border:1px solid #fafafa;
               padding:10px 0 15px 25px;
               margin:5px 0;
               min-width:50%;
               background-color:#f3f3f3;
               border-radius:5px;
            }

            ul li{
                  font-size:12px;
                  margin:0;
                  list-style:disc;
                  color:#41d6e1;
            }

         </style>
      {:else if dat.title=="" && dat.collectionName==""}
         <header style=""></header>
         <section>
            <span></span>
            <div></div>
            <div></div>         
            <p></p>
            <p></p>
            <p></p>
            <div></div>
         </section>      
         <style>
            @keyframes loading{
               from{
                  background:#fafafa;               
               }
               to{
                  background:#f2f2f2;               
               }
            }

            @keyframes otherLoading{
               from{
                  width:10%;
               }
            
            }
            header{
               animation:loading 0.5s 0ms infinite alternate ;           
            }

            section{
               height:50vh;
            }
            section span{
               width:95%;
               display:inline-block;
               height:5vh;
               margin:0;
               animation:loading 0.5s 0ms infinite alternate ;           

            }
            section div{
               width:80%;
               height:2vh;
               margin-bottom:2px;
               animation:loading 0.5s 0ms infinite alternate ;           

            }
            section p{
               display:inline-block;
               width:70%;
               height:1vh;
               animation:loading 0.5s 0ms infinite alternate ;           
            }
            

         </style>

      {/if}
   {/await}
</article>




<style>

   article
   {
      width:100%;
      min-height:100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding:20px;
      gap: 15px;
      /* border: 1px solid red; */
 
   }

   header{
 
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 2px 0 2px;
      border-radius: 5px 5px 0 0;
      width:570px;
      height:300px;
      gap: 7px;
      /* border: 1px solid; */
   }

   .title{
      width: 70%;
      border: 1px solid;
      position: relative;
      background: #fafafa;
      top:40%;
      z-index:0;
      left:17%;
   }

   .footer{
      display: flex;
      justify-content: space-between;
      margin-bottom: 2px;
   }
   .categorie{
      width:auto;
      padding: 1px 25px;
      font-size: 10px;
      font-weight: bold;
      text-align: center;
      border-radius: 10px;
      color: #fff;
      background: #41d6e1;
      border: 1px solid #41d6e13d;
      margin-right: 2px;
   }

   header .date{
      font-size: 10px;
      color: gray;
      font-weight: bold;
      margin-left: 5px;
   }

   section{
      width: 570px;
      border-radius: 5px;
      padding: 10px 0 5px 10px;
      background: #fff;      
   }


   /* MOBILE DEVICE */

   @media only screen and (max-width:625px){
      header,section{
         width:100%;
      }
   }

   @media only screen and (max-width:555px){
      article{
         padding-top:50px;
      }
   }

   
</style>