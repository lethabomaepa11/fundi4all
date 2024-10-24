export const load = async({locals: {supabase}}) =>{
    const { data: {user} } = await supabase.auth.getUser();
    const {data} = await supabase.from("users")
                        .select()
                        .eq("user_id",user.id)
                        .single()
    let finalData = data;              
    if(!data){
        console.error("error")
    }
    else{
        const {data} = await supabase.from("chats")
                              .select()
                              .or(`receiver_id.eq.${user.id},sender_id.eq.${user.id}`);
        if(!data){
            finalData = {...finalData,chats: null};
        }
        else{
            finalData = {...finalData, chats: data};
        }
        return finalData;
    }

}