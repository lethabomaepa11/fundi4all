import { redirect } from '@sveltejs/kit';

let user_id = null;
export const load = async ({locals: {supabase}}) => {
    const {data: users} = await supabase.from("users").select();
    const {data: posts} = await supabase.from("posts").select().order('created_at', { ascending: false });
    const {data: post_files} = await supabase.from("post_files").select();

    //console.log(files);
    let pageData = {};
    pageData = {...pageData,users:users};
    pageData = {...pageData,posts: posts};
    let newPostFiles = post_files.map(post_file => {
        const name = post_file.file_url.substring(post_file.file_url.lastIndexOf("/")+1);
        return post_file = {...post_file,url: getPublicUrl(post_file.file_url,supabase),name:name}
    })
    pageData = {...pageData,post_files: newPostFiles};
    //console.log(newPostFiles)
    return pageData;
}
const getPublicUrl = (fileurl,supabase) => {
        const { data,error } = supabase.storage.from('fundi4all').getPublicUrl(fileurl);
        //console.log(data)
        if(error){
            console.error(error)
        }
    return data.publicUrl ;
}
export const actions = {
    submitPost: async ({request,locals:{supabase}}) =>{
        const { data: {user} } = await supabase.auth.getUser();
        user_id = user.id;
        const formData = await request.formData();
        const text = formData.get("text");
        const files = formData.getAll("files[]");
        

        //post files
        const {data,error} = await supabase.from("posts")
                                          .insert({user_id: user_id,
                                                    text: text,
                                          })
                                          .select();
        let post= data;
        //console.log(post)
        if(error){
            console.error(error)
        }
        else{
            const post_id = post[0].id;
            //upload files
            console.log(files);
            for(const file of files){
                console.log(file)
                let d;
                if(file instanceof File){
                    
                    console.log("processing file "+file.name)
                    const file_url = `post_files/${Date.now()}_${file.name}`;
                    const {data,error} = await supabase.storage
                                                .from("fundi4all")
                                                .upload(file_url,file);
                    d = data;
                                               
                    if(error){
                        console.error(error)
                    }
                    else{
                        //insert file into files table and also post_files table
                        var type = file.name.substring(file.name.lastIndexOf("."));
                        const {data,error} = await supabase.from("files")
                                                    .insert({file_url: file_url,filename: file.name,type:type})
                                                    .select();
                        let files = data;
                        if(error){
                            console.error(error)
                        } else{
                            //console.log(d);
                            const file_id = files[0].id;
                            //insert the file record in the post_file, just insert post_id and file_id
                            const {data,error} = await supabase.from("post_files")
                                                        .insert({file_id: file_id,post_id: post_id,file_url: file_url,type:type})
                                                        .select();
                            if(error){
                                console.error(error)
                            }
                            else{
                                console.log(data);
                                //return data;
                            }                           
                        }                          
                    }
                }
            }
            redirect(303,"/portal");
        }


    },
}