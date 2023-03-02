import Pocketbase from 'pocketbase';
const pb = new Pocketbase('http://127.0.0.1:3000');
const authData = pb.admins.authWithPassword('graciasdagadgc@gmail.com','Zdp3SE7r5GTKume');
const postCollection = pb.collection('post');
export const load = async () =>{    

    let posts;
    try {
        posts = await postCollection.getFullList();        
    } catch (error) {
        throw error(500,'Une Erreure Serveur est survenue');
    }
  
    return {
        posts:JSON.parse(JSON.stringify(posts))
    }
    
}