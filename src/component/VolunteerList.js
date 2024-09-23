import React, { useEffect, useState } from 'react';
import { fetcher } from '../fetcher';

function VolunteerList({ data }) {
  const headers = ['Name', 'Age', 'Phone No.', 'Task'];
  const [volunteers, setVolunteers] = useState([])

  useEffect(() => {
    const FetchData = async() => {
      fetcher.get('/user/get-all')
      .then(res => {
        const filteredVolunteers = res.data.filter(volunteer => 
            volunteer.username !== 'admin');
        setVolunteers(filteredVolunteers);
      })
    }

    FetchData()
  }, [volunteers])

  return (
      <div className="flex flex-col items-center space-y-2 border-2 p-1 rounded border-black">
        <div className="flex justify-between w-full">
          {headers.map((header, index) => (
              <div key={index} className="text-center font-semibold w-1/4">
                {header}
              </div>
          ))}
        </div>

        {volunteers.map((volunteer, index) => (
            <div key={index} className="flex justify-between w-full">
              <div className="text-center w-1/4">{volunteer.name}</div>
              <div className="text-center w-1/4">{volunteer.age}</div>
              <div className="text-center w-1/4">{volunteer.phone}</div>
              <div className="text-center w-1/4">{volunteer.task}</div>
            </div>
        ))}
      </div>
  );
}

export { VolunteerList };
