import React, {useState} from "react";
import data from "../data/volunteer.json";
import { FetchProfileData } from "../fetch_data/FetchProfileData";
import { useAuth } from "../account/Authentication";
import { fetcher } from "../fetcher";

function Profile() {
  const [editProfile, setProfile] = useState(false); 
  const {error, loding, userData, setUserData} = FetchProfileData();

  function toggleProfile() {
    setProfile(!editProfile);
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if(error) {
    return(
      <div>
        {error}
      </div>
    )
  }

  if(loding) {
    return(
      <div>
        Loading...
      </div>
    )
  }

  return (
      <div onSubmit={toggleProfile} className='ml-4 mr-4 pl-6 pr-6'>
        <div className='text-4xl'>Edit Profile</div>

        <div className='w-[75%] flex flex-col items-center'>
        <form className='space-y-6'>
          <div className='flex space-x-2'>
            <label className='text-xl font-semibold' htmlFor='name' >Name:</label>
            {editProfile ? <input className='border-2 border-black rounded' type='text' name='name'
                value={userData?.name} onChange={handleChange} /> :
                <p>{userData?.name}</p>}
          </div>

          <div className='flex space-x-2'>
            <label className='text-xl font-semibold' htmlFor='age' >Age:</label>
            {editProfile ? <input className='border-2 border-black rounded' type='text' name='age'
                value={userData?.age} onChange={handleChange} /> :
                <p>{userData?.age}</p>}
          </div>

          <div className='flex space-x-2'>
            <label className='text-xl font-semibold' htmlFor='phone' >Phone No.</label>
            {editProfile ? <input className='border-2 border-black rounded' type='text' name='phone'
                value={userData?.phone} onChange={handleChange} /> :
                <p>{userData?.phone}</p>}
          </div>

          <div className='flex space-x-2'>
            <label className='text-xl font-semibold' htmlFor='task' >Task:</label>
            {editProfile ? <input className='border-2 border-black rounded' type='text' name='task'
                value={userData?.task} onChange={handleChange} /> :
                <p>{userData?.task}</p>}
          </div>

          <div className='flex justify-end'>
            {editProfile ? (<div className="flex space-x-3">
              <button className='border-2 border-black rounded 
                  p-1 bg-black text-white' 
                  type='submit'>Update</button>

              <button className='border-2 border-black rounded 
                  p-1 bg-black text-white' 
                  onClick={toggleProfile}>Cancel</button>
            </div>) :

            (<button className='border-2 border-black rounded 
                p-1 bg-black text-white' 
                onClick={toggleProfile}>Edit Profile</button>)}
            
          </div>

        </form>
        </div>
      </div>
  )

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetcher.put('/user/update', userData, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      // Handle the response, e.g., log success or redirect
      console.log(response.data); // Assuming you're interested in the data returned

    } catch (err) {
      // Handle errors, e.g., log error message
      console.error('Signup error:', err.message);
    }
  }
}

export { Profile };