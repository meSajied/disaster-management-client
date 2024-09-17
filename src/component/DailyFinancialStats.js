import React, {useEffect, useState} from "react";
import costData from "../data/CostData.json";
import {BarChart} from "./BarChart";

function DailyFinancialStats() {
  const [cData, setCData] = useState({
    labels: [],
    datasets: [{
      label: "",
      data: [],
    }]
  });

  useEffect(() => {
    if (costData && costData.length > 0) {
      setCData({
        labels: costData.map((item) => item.date),
        datasets: [{
          label: "Gain",
          data: costData.map((item) => item.gain),
          backgroundColor: "rgba(253, 173, 0, 0.6)",
        },
          {
            label: "Expense",
            data: costData.map((item) => item.expense),
            backgroundColor: "rgba(0, 0, 0, 0.6)"
          }]
      });
    }
  }, []);

  return (
      <div className='p-4 w-full max-w-4xl mx-auto'>
        <div className='bg-white p-4 shadow rounded'>
          <BarChart data={cData} />
        </div>
      </div>
  );
}

export { DailyFinancialStats };