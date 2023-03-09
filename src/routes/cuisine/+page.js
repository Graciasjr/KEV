import Pocketbase from 'pocketbase'
const pb = new Pocketbase('https://sweet-juice.pockethost.io');
// https://sweet-juice.pockethost.io
export const config = {
    runtime: 'edge'
  };
export const load = async () =>{
    try {
        const authData = await pb.admins.authWithPassword('graciasdagadgc@gmail.com','Dgccompany1243');        
    } catch (error) {
        console.log(error);
    };
    const posts = await pb.collection('post').getFullList(100,{filter:'postcategorie="Cuisine"'});    
     return {
         posts:posts,
 
     }     
 }
