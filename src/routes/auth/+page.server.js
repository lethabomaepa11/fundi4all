import { redirect } from '@sveltejs/kit'


export const actions = {
  registerUser: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    //const passwordHash = bcrypt.hash(password,10);

    const { data,error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    //fetch the logged_in user
    const { data: { user } } = await supabase.auth.getUser()

  
      
    if (error) {
      console.error(error)
      redirect(303, '/auth/error')
    } else {
        //console.log(user);
      //redirect(303, '/')
    }
    const { newUser, error: insertError } = await supabase
    .from('users')
    .insert([{ 
      user_id: user.id, 
      email: email,  
      name: formData.get('name'),
      surname: formData.get('surname'),
      role: formData.get('role'),
      date_of_birth: formData.get('dateOfBirth'),
    }]);

  if (insertError) {
    console.error('Error saving user data:', insertError);
    return null;
  }else{
    //console.log(data)
    redirect(303,"/auth/onboarding");
  }

  },
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') 
    const password = formData.get('password') 

    const { error } = await supabase.auth.signInWithPassword({ email:email, password:password })
    if (error) {
      console.error(error)
      redirect(303, '/auth/login')
    } else {
      redirect(303, '/portal')
    }
  },

  updateUser: async({request, locals: {supabase}}) => {
    const formData = await request.formData()
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
      redirect(301,"/auth/onboarding")
    }
  }
}