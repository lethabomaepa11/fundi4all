
<script>
    //here we continue taking the user data to fill their profile, we have the user id in the session
    //use it to query to and from the database
    export let data;
</script>
<head>
    <title>
        Onboarding | fundi4All
    </title>
</head>

    <form method="post" action="?/updateUser" class="card bg-slate-100 shadow flex flex-col gap-2 items-start p-10 lg:border w-full lg:w-2/5">
        <h2 class="text-2xl font-bold">{data.name} {data.surname}</h2>
        <p class="text-sm">Tell us more about yourself</p>
        <p class="text-sm text-info">You can update your information anytime in your profile page</p>
        <label for="institution" class="">
            Institution
        </label>
        <input required type="text" id="institution" name="institution" placeholder="Where do you study?" class="input input-bordered w-full"/>
          {#if data.role == "High school learner"}        
          <label for="grade" class="">
            Grade
        </label>
        <select required id="grade" name="grade" class="select select-bordered w-full">
            <option disabled selected>What grade are you in?</option>
            <option>7-9</option>
            <option>10-11</option>
            <option>12</option>
          </select>
          {/if}
          <label for="topics" class="">
            Related Subjects/Topics
        </label>
        <textarea  type="text" id="topics" name="topics" placeholder="comma separated... e.g maths, life science, cat, programming" class="textarea textarea-bordered w-full"/>

          <label for="gender" class="">
            Gender
        </label>
        <select required id="gender" name="gender" class="select select-bordered w-full">
            <option disabled selected>Select your gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer not to specify</option>
          </select>
        <button type="submit" class="btn btn-primary w-full">Submit</button>
        <div class="divider"></div>
    </form>
