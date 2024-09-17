import React from 'react';

function VolunteerList({ data }) {
  const headers = ['Name', 'Age', 'Phone No.', 'Task'];

  return (
      <div className="flex flex-col items-center space-y-2 border-2 p-1 rounded border-black">
        {/* Render headers */}
        <div className="flex justify-between w-full">
          {headers.map((header, index) => (
              <div key={index} className="text-center font-semibold w-1/4">
                {header}
              </div>
          ))}
        </div>

        {data.map((volunteer, index) => (
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
