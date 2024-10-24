
export const load = async({locals: {supabase}}) =>{
    const { data: {user} } = await supabase.auth.getUser();
    const {data} = await supabase.from("users")
                        .select()
                        .eq("user_id",user.id)
                        .single()
                        
    if(!data){
        console.error("error")
    }
    else{
        return data;
    }

}