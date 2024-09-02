import { error } from '@sveltejs/kit';
export const load = async ({locals: {supabase},params}) => {
     const {data: {user}} = await supabase.auth.getUser()
     const user_id = user.id;//used to check if the user is checking his own profile
     const profile_url = params.user;
     
     const {data} = await supabase.from("users")
                        .select()
                        .eq("profile_url",profile_url)
                        .single();
    if(!data){
        error(404, "Page not found");
    }
    else{
        let newData = data;
        if(data.user_id == user_id){
            
             newData = {...data,canEdit:true}
        }
        return newData;
    }
}