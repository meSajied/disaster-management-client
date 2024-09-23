import React, {useState} from "react";
import { fetcher } from "../fetcher";

function AddCrisisForm() {
  const [crisis, setCrisis] = useState({
    name: '',
    location: '',
    severity: '',
    status: 'PENDING'
  })

  function handleOnChange(e) {
    const {name, value} = e.target;

    setCrisis(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      fetcher.post('/crisis/add', crisis, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      clearData();
    }catch(err) {
      console.log(err);
      clearData()
    }
  }

  function clearData() {
    setCrisis({
     name: '',
    location: '',
    severity: '',
    status: 'PENDING'
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex space-x-3'>
          <input type='text' name='title' placeholder='Name'
                 onChange={handleOnChange} className='p-1 border-2 border-black rounded-md'/>

          <input type='text' name='location' placeholder='Location e.g. Dhaka'
                 onChange={handleOnChange} className='p-1 border-2 border-black rounded-md'/>

          <select name='severity' onChange={handleOnChange} 
              className='p-1 border-2 border-black rounded-md'>
            <option value=''>Select</option>
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>
          <button type='submit' className="bg-black text-white
              px-4 py-1 rounded">Add
          </button>
        </form>
  )
}

export {AddCrisisForm}