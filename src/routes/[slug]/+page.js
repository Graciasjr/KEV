import Pocketbase from 'pocketbase';
const pb = new Pocketbase('https://sweet-juice.pockethost.io');
// https://sweet-juice.pockethost.io

export async function load ({params}){
    try {
        const authData = await pb.admins.authWithPassword('graciasdagadgc@gmail.com','Dgccompany1243');        
    } catch (error) {
        console.log(error);
    };
    const record = await pb.collection('post').getOne(`${params.slug}`);
    const Article = await record;
    
    return {
        Article
    }

}