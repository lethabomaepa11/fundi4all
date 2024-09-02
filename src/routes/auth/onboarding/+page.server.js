

export const load = async({ locals: { supabase } }) => {
    const { data: {user} } = await supabase.auth.getUser();
    //console.log(user);
    const user_id = user.id;
    //console.log(user_id)
    const {data,error} = await supabase.from('users')
                            .select()
                            .eq('user_id',user_id)
                            .single()
    if(error){
        console.log(error);
    }
    //console.log(data)
    return data;
                        

}