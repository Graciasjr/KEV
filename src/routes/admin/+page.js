import Pocketbase from 'pocketbase'
const pb = new Pocketbase('http://127.0.0.1:3000');
const authData =pb.admins.authWithPassword('graciasdagadgc@gmail.com','Zdp3SE7r5GTKume');


export const load = async () =>{

   const posts = await pb.collection('post').getFullList();

    let ArticlesData =
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

    // console.log(await posts);
    return {
        ArticlesData,
        posts:posts,

    }
    
}