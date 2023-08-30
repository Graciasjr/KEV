import PocketBase from 'pocketbase';

export const handle = async({event,resolve}) =>{
    
    // const url = 'http://127.0.0.1:3001';
    const url ='https://sweet-juice.pockethost.io';
    event.locals.pb= new PocketBase(url);
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    try {        
        if(event.locals.pb.authStore.isValid)
        {
            await event.locals.pb.collection('users').authRefresh();
        }        
        
    } catch (error) {
        event.locals.pb.authStore.clear();
    }
    
    const response = await resolve(event);
    // const isProd = process.env.NODE_ENV === 'production'? true:false;
    // response.headers.set(
    //     'set-cookie',event.locals.pb.authStore.exportToCookie({sameSite:'Lax',secure:isProd})
    // );
    response.headers.append('set-cookie',event.locals.pb.authStore.exportToCookie());

    return response;
    
}