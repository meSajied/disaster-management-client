import React from 'react';
import vData from "../data/crisis.json";
import {CrisisList} from "../component/CrisisList";

function Admin() {
  return (
      <div className='flex flex-col items-center space-y-6'>
        <div className='font-semibold text-xl'>
          Generate Reports
        </div>

        <div className='flex justify-between w-[45%]'>
          <button className='bg-black text-white
              px-4 py-1 rounded'>
            Donation Report
          </button>
          <button className='bg-black text-white
              px-4 py-1 rounded'>
            Expense Report
          </button>
          <button className='bg-black text-white
              px-4 py-1 rounded'>
            Inventory Report
          </button>
        </div>

        <div className='font-semibold text-xl'>
          Add a new Crisis in the list
        </div>

        <form className='flex space-x-3'>
          <input type='text' name='name' placeholder='Name'
                 className='p-1 border-2 border-black rounded-md'/>
          <input type='text' name='location' placeholder='Location e.g. Dhaka'
                 className='p-1 border-2 border-black rounded-md'/>
          <select className='p-1 border-2 border-black rounded-md'>
            <option value=''>Severity</option>
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>
          <button className="bg-black text-white
              px-4 py-1 rounded">Add
          </button>
        </form>

        <div className='font-semibold text-xl'>
          Pending Crisis
        </div>
        <div className='w-[75%]'>
          <CrisisList data={vData} status={'PENDING'}/>
        </div>

        <div className='font-semibold text-xl'>
          Approved Crisis List
        </div>
        <div className='w-[75%]'>
          <CrisisList data={vData} status={'APPROVED'}/>
        </div>
      </div>
  )
}

export {Admin};