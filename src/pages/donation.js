import React, { useEffect, useState } from "react"
import {DailyFinancialStats} from "../component/DailyFinancialStats";
import { fetcher } from "../fetcher";


function Donation() {
  const [donateAmount, setAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const FetchData = async () => {
      await fetcher.get('/cost/all-time-donation')
      .then(res => {
        setTotalAmount(res.data);
      })
    }

    FetchData();
  }, [])

  return(
      <div className='flex-col items-center space-y-6'>
        <div className='space-y-4'>
          <div className='text-3xl text-center'>
            Donation till now
          </div>

          <div className='font-mono text-center text-4xl'>
            {totalAmount}
          </div>
        </div>

        <form className='p-4 flex justify-center space-x-4 items-center'
            onSubmit={handleSubmit}>
          <div className='text-xl space-x-2'>
            <label htmlFor='amount' >Amount:</label>
            <input className='border-2 rounded border-black text-center'
                type='text' name='amount' value={donateAmount} 
                onChange={(e) => setAmount(e.target.value)}/>
          </div>

          <button className='border-2 rounded p-2 bg-black
              text-white text-xl' type='submit'>Donate</button>
        </form>

        <DailyFinancialStats />
      </div>
  );

  function handleSubmit(e) {
    e.preventDefault();

    fetcher.post('/cost/donate', donateAmount, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

export {Donation};