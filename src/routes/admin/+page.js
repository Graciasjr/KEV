import Pocketbase from 'pocketbase';
const pb = new Pocketbase('https://sweet-juice.pockethost.io');
// https://sweet-juice.pockethost.io

export const load = async () =>{   
    
    try {
        const authData =await pb.admins.authWithPassword('graciasdagadgc@gmail.com','Dgccompany1243');
    } catch (error) {}
    // const postCollection =await pb.collection('post');
    const posts = await pb.collection('post').getFullList();
    // const posts = await post;
  
    return {
        posts:JSON.parse(JSON.stringify(posts))
    }
    
}