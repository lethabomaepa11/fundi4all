<script>

</script>
<head>
    <title>
        Register for an account
    </title>
</head>
    <form method="post" action="/auth?/registerUser" class="card bg-slate-100 shadow flex flex-col gap-2 items-start p-10 lg:border w-full lg:w-2/5">
        <h2 class="text-2xl font-bold">Register</h2>
        <div class="lg:grid lg:grid-cols-2 gap-2 items-start w-full">
            <div>
                <label for="name" class="">
                    Name
                </label>
                <input required id="name" name="name" type="text" class="w-full input input-bordered flex items-center gap-2" placeholder="John" />    
            </div>
            <div>
                <label for="surname" class="">
                    Surname
                </label>
                <input required id="surname" name="surname" type="text" class="w-full input input-bordered flex items-center gap-2" placeholder="Doe" />
            </div>
        </div>
        <label for="email" class="">
            Email
        </label>
        <input required id="email" name="email" type="email" class="w-full input input-bordered flex items-center gap-2" placeholder="johndoe@gmail.com" /> 
          <label for="dateOfBirth" class="">
            Date of Birth
        </label>
        <input required id="dateOfBirth" name="dateOfBirth" type="date" class="w-full input input-bordered flex items-center gap-2" placeholder="****" />    
        <label for="role" class="">
            Role:
        </label>
        <select required id="role" name="role" class="select select-bordered w-full">
            <option disabled selected>What best describes you?</option>
            <option>High school learner</option>
            <option>Varsity/College student</option>
          </select>    
        <label for="password" class="">
            Create Password
        </label>
        <input required minlength="8" id="password" name="password" type="password" class="w-full input input-bordered flex items-center gap-2" placeholder="****" />
        <button type="submit" class="btn btn-primary w-full">Register</button>
        <div class="divider"></div>
        <a href="/auth/login" class="btn btn-outline w-full">Login here...</a>
    </form>
    
