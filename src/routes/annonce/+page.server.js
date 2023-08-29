export const load = async ({locals}) =>{  
    const posts = await locals.pb.collection('post').getFullList({
        filter:'postcategorie="annonces"',
        sort:'-created'
    });
         
    return{
        post:JSON.stringify(posts)
    }
}

