import { json, redirect } from '@sveltejs/kit'


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
    const profile_url = email.substring(0,email.indexOf("@"));
    const { newUser, error: insertError } = await supabase
    .from('users')
    .insert([{ 
      user_id: user.id, 
      email: email,
      profile_url: profile_url,  
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
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return "Wrong credentials";//always gave me errors with json() or new Response().
    } else {
        redirect(303, '/portal');
    }
},

  
}