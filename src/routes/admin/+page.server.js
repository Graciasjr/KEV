export const load = async ({locals}) =>{  
    const posts = await locals.pb.collection('post').getFullList({
        sort:'-created'
    });
         
    return{
        posts:JSON.stringify(posts)
    }
}

