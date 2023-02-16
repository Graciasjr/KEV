import Pocketbase from 'pocketbase'
const pb = new Pocketbase('http://127.0.0.1:3000');
const authData =pb.admins.authWithPassword('graciasdagadgc@gmail.com','Zdp3SE7r5GTKume');

export async function load ({params})
{
    const record = await pb.collection('post').getOne(`${params.slug}`);
    const Article= await record
    
    return {
        Article
    }

}