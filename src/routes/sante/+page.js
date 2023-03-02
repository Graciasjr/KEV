import Pocketbase from 'pocketbase'
const pb = new Pocketbase('http://127.0.0.1:3000');
const authData =pb.admins.authWithPassword('graciasdagadgc@gmail.com','Zdp3SE7r5GTKume');

export const load = async () =>{

    const posts = await pb.collection('post').getFullList(100,{filter:'postcategorie="Santé"'});   
 
     return {
         posts:posts,
 
     }
     
 }
