// const pb = new Pocketbase('https://sweet-juice.pockethost.io');
// https://sweet-juice.pockethost.io

export async function load ({locals,params}){
   
    const record = await locals.pb.collection('post').getOne(`${params.slug}`);
    const Article = await record;
    
    return {
        art:JSON.stringify(Article)
    }

}