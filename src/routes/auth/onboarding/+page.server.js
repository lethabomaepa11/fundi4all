import { redirect } from '@sveltejs/kit'


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
export const actions= {
    updateUser: async({request, locals: {supabase}}) => {
        console.log("in")
        const formData = await request.formData()
        console.log(formData)
        const institution = formData.get("institution")
        const topics = formData.get("topics")
        const grade = formData.get("grade")
        const gender = formData.get("gender")
        const { data: { user } } = await supabase.auth.getUser()
    
        const {data,error} = await supabase.from("users")
                              .update({institution: institution,
                                topics: topics,
                                grade: grade,
                                gender: gender,
                              })
                              .eq("user_id",user.id)
                              .select()
        if(error){
          console.log(error)
          redirect(301,"/auth/onboarding")
        }
        else{
          console.log(data);
          redirect(301,"/auth/portal")
        }
      },
}