import React, {useEffect, useState} from "react";
import costData from "../data/CostData.json";
import {BarChart} from "./BarChart";

import {fetcher} from "../fetcher";

function DailyFinancialStats() {
  const [cData, setCData] = useState({
    labels: [],
    datasets: [{
      label: "",
      data: [],
    }]
  });

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetcher.get("/cost/all");
        const costData = res.data;

        if (costData && costData.length > 0) {
          setCData({
            labels: costData.map((item) => item.createdAt),
            datasets: [
              {
                label: "Donation",
                data: costData.map((item) => item.donation),
                backgroundColor: "rgba(253, 173, 0, 0.6)",
              },
              {
                label: "Expenses",
                data: costData.map((item) => item.expenses),
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    FetchData();
  }, []);

  return (
      <div className='p-4 w-full max-w-4xl mx-auto'>
        <div className='bg-white p-4 shadow rounded'>
          <div className='text-xl text-center font-semibold'>
            Statistics of donation and expenses
          </div>
          <BarChart data={cData} />
        </div>
      </div>
  );
}

export { DailyFinancialStats };