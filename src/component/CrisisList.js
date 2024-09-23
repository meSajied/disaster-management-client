import React, {useEffect, useState} from 'react';
import { fetcher } from '../fetcher';

function CrisisList({ status }) {
  const headers = ['Title', 'Location', 'Severity'];

  const [crisisData, setCrisisData] = useState([]);
 
  useEffect(() => {
    const FetchData = async() => {
      await fetcher.get('/crisis/get-all')
      .then(res => {
        setCrisisData(res.data);
      })
    }

    FetchData();
  }, [])

  const filteredData = crisisData.filter((item) => item.status === status);

  return (
      <div className="flex flex-col items-center space-y-2
          border-2 p-1 rounded border-black">
        <div className="flex justify-between w-full">
          {headers.map((header, index) => (
              <div key={index} className="text-center font-semibold w-1/3">
                {header}
              </div>
          ))}
          {status === 'PENDING' && <div className="w-1/5"></div>}
        </div>

        {filteredData.map((crisis, index) => (
            <div key={index} className="flex justify-between
                w-full items-center">
              <div className="text-center w-1/3">{crisis.title}</div>
              <div className="text-center w-1/3">{crisis.location}</div>
              <div className="text-center w-1/3">{crisis.severity}</div>
              {status === 'PENDING' &&
                  (<div className="flex justify-end w-1/5">
                    <button onClick={() => approveCrisis(crisis.id)} 
                    className="bg-black text-white
                        px-2 py-1 rounded">
                      Approve
                    </button>
                  </div>)}
            </div>
        ))}
      </div>
  );

  async function approveCrisis(id) {
    const filteredData = crisisData.filter((item) => item.id === id);
    filteredData[0].status = 'APPROVED'
    
    try {
      await fetcher.put('/crisis/update', filteredData[0], {
      headers: {
        "Content-Type": 'application/json'
      }
    })
    }catch(err) {
      console.log(err);
    }
  }
}

export {CrisisList};
