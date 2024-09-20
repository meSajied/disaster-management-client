import React from 'react';

function CrisisList({ data, status }) {
  const headers = ['Title', 'Image', 'Location', 'Severity', 'Status'];

  const filteredData = data.filter((item) => item.status === status);

  return (
      <div className="flex flex-col items-center space-y-2
          border-2 p-1 rounded border-black">
        <div className="flex justify-between w-full">
          {headers.map((header, index) => (
              <div key={index} className="text-center font-semibold w-1/5">
                {header}
              </div>
          ))}
          {status === 'PENDING' && <div className="w-1/5"></div>}
        </div>

        {filteredData.map((crisis, index) => (
            <div key={index} className="flex justify-between
                w-full items-center">
              <div className="text-center w-1/5">{crisis.title}</div>
              <div className="text-center w-1/5">{crisis.image}</div>
              <div className="text-center w-1/5">{crisis.location}</div>
              <div className="text-center w-1/5">{crisis.severity}</div>
              <div className="text-center w-1/5">{crisis.status}</div>
              {status === 'PENDING' &&
                  (<div className="flex justify-end w-1/5">
                    <button className="bg-black text-white
                        px-2 py-1 rounded">
                      Approve
                    </button>
                  </div>)}
            </div>
        ))}
      </div>
  );
}

export {CrisisList};
