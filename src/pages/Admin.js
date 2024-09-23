import React, { useEffect, useState } from 'react';
import vData from "../data/crisis.json";
import {CrisisList} from "../component/CrisisList";
import { AddCrisisForm } from '../component/AddCrisisForm';
import { fetcher } from '../fetcher';

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

        <AddCrisisForm />

        <div className='font-semibold text-xl'>
          Pending Crisis
        </div>
        <div className='w-[65%]'>
          <CrisisList status={'PENDING'}/>
        </div>

        <div className='font-semibold text-xl'>
          Approved Crisis List
        </div>
        <div className='w-[65%]'>
          <CrisisList status={'APPROVED'}/>
          
        </div>
      </div>
  )

}

export {Admin};