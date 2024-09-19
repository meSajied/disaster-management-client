import React, {useState} from "react";
import data from "../data/volunteer.json";

function Profile() {
  const [editProfile, setProfile] = useState(false);

  function editProfileHandler(e) {
    e.preventDefault();
    setProfile(!editProfile);
  }

  return (
      <div onSubmit={editProfileHandler} className='ml-4 mr-4 pl-6 pr-6'>
        <div className='text-4xl'>Edit Profile</div>

        <div className='w-[75%] flex flex-col items-center'>
        <form className='space-y-6'>
          <div className='flex space-x-2'>
            <label className='text-xl font-semibold' htmlFor='name' >Name:</label>
            {editProfile ? <input className='border-2 border-black rounded' type='text' name='name'
                value={data[0].name} onChange={editProfileHandler} /> :
                <p>{data[0].name}</p>}
          </div>

          <div className='flex space-x-2'>
            <label className='text-xl font-semibold' htmlFor='age' >Age:</label>
            {editProfile ? <input className='border-2 border-black rounded' type='text' name='age'
                value={data[0].age} onChange={editProfileHandler} /> :
                <p>{data[0].age}</p>}
          </div>

          <div className='flex space-x-2'>
            <label className='text-xl font-semibold' htmlFor='phone' >Phone No.</label>
            {editProfile ? <input className='border-2 border-black rounded' type='text' name='phone'
                value={data[0].phone} onChange={editProfileHandler} /> :
                <p>{data[0].phone}</p>}
          </div>

          <div className='flex space-x-2'>
            <label className='text-xl font-semibold' htmlFor='task' >Task:</label>
            {editProfile ? <input className='border-2 border-black rounded' type='text' name='phone'
                value={data[0].task} onChange={editProfileHandler} /> :
                <p>{data[0].task}</p>}
          </div>

          <div className='flex justify-end'>
          <button className='border-2 border-black rounded rounded p-1 bg-black text-white' type='submit'>Edit Profile</button>
          </div>

        </form>
        </div>
      </div>
  )
}

export { Profile };