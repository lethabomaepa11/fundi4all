import { error } from '@sveltejs/kit';
import { _getPublicUrl } from '../portal/+page.server.js';
export const load = async ({locals: {supabase},params}) => {
     const {data: {user}} = await supabase.auth.getUser()
     const user_id = user.id;//used to check if the user is checking his own profile
     const profile_url = params.user;
     let newData;
     const {data: post_files} = await supabase.from("post_files").select();
     let newPostFiles = post_files.map(post_file => {
        const name = post_file.file_url.substring(post_file.file_url.lastIndexOf("/")+1);
        return post_file = {...post_file,url: _getPublicUrl(post_file.file_url,supabase),name:name}
    })
     const {data} = await supabase.from("users")
                        .select()
                        .eq("profile_url",profile_url)
                        .single();
    newData = {...data,post_files: newPostFiles}
    if(!data){
        error(404, "Page not found");
    }
    else{
        
        if(newData.user_id == user_id){
            
             newData = {...newData,canEdit:true} 
        }
        let {data,error} = await supabase.from("posts").select().eq("user_id",newData.user_id).order('created_at', { ascending: false });
        if(error){
            console.log(error)
        }else{
            newData ={...newData,posts: data};
        }
        return newData;
    }
}

export const actions = {

    updateBio: async ({request,locals: {supabase}}) =>{
        const formData = await request.formData();
        const {data: {user}} = await supabase.auth.getUser();
        const user_id = user.id;
        const bio = formData.get("bio");
        const {data,error} = await supabase.from("users")
                                           .update({bio:bio})
                                           .eq("user_id",user_id)
                                           .select();
        if(error){
            console.error(error)
        }
        else{
            //console.log(data)
            return data;
        }
    },
}