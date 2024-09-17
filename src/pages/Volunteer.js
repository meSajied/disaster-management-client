import React from "react"
import {VolunteerList} from "../component/VolunteerList";
import vData from "../data/volunteer.json"

function Volunteer() {
  return (
      <div className='flex flex-col items-center space-y-6'>
        <div className='text-center text-3xl font-semibold'>
          Volunteer Details
        </div>

        <div className='w-[75%]'>
          <VolunteerList data={vData} />
        </div>
      </div>
  )
}

export {Volunteer};