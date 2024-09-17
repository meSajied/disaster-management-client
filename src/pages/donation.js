import React from "react"
import {DailyFinancialStats} from "../component/DailyFinancialStats";
function Donation() {
  return(
      <div className='flex-col items-center space-y-6'>
        <div className='space-y-4'>
          <div className='text-3xl text-center'>
            Donation till now
          </div>

          <div className='font-mono text-center text-4xl'>
            8000
          </div>
        </div>

        <form className='p-4 flex justify-center space-x-4 items-center'
            onSubmit={handleSubmit}>
          <div className='text-xl space-x-2'>
            <label htmlFor='amount' >Amount:</label>
            <input className='border-2 rounded border-black'
                type='text' name='amount' value='undefined'/>
          </div>

          <button className='border-2 rounded p-2 bg-black
              text-white text-xl' type='submit'>Donate</button>
        </form>

        <DailyFinancialStats />
      </div>
  );

  function handleSubmit() {

  }
}

export {Donation};