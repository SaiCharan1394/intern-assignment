import React from "react";
import { useState, useEffect } from "react";
import Rates from "./Rates";
const styles = {
  dataCard: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "50px",
  },
  dataInfo: {
    textAlign: "left",
  },
  rates: {
    marginTop: "10px",
    listStyleType: "none", // Hide list item bullets
    padding: 0,
  },
};

const ApiData = () => {
  const [data, setData] = useState({
    success: true,
    base: "USD",
    timestamp: 1706964032,
    rates: { EUR: 0.92535, INR: 82.99955, JPY: 148.37504 },
  });
  const apiUrl = 'https://api.forexrateapi.com/v1/latest?api_key=b22606d60aeb335c65c5f87011dd6c01&base=USD&currencies=EUR,INR,JPY';

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
          }

          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [apiUrl]);

  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://api.forexrateapi.com/v1/latest?api_key=b22606d60aeb335c65c5f87011dd6c01&base=USD&currencies=EUR,INR,JPY"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div class="mx-auto my-auto grid max-w-[600px] gap-[10px] bg-slate-100 rounded-[20px] my-[50px] p-[50px]">
      <h1 class="text-center text-3xl underline">Data from API</h1>
      <div class="grid grid-cols-2">
        <div className="capitalize">
          Success: <span className="font-bold">{data.success.toString()}</span>
        </div>
        <div className="justify-self-end">
          Base: <span className="font-bold">{data.base}</span>
        </div>
      </div>
      <div className="grid grid-flow-col items-center">
        <div>Last Updated on:</div>
        <div className="justify-self-end font-light text-xl">
          {new Date(data.timestamp * 1000).toLocaleString()}
        </div>
      </div>
      <div class="grid grid-cols-3 items-center text-xl py-[20px] ">
        <div className="text-2xl col-span-2">Current Exchange Rates</div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-normal hover:bg-blue-500 p-[4px] text-sm rounded-[30px]"
          onClick={handleClick}
        >
          Get Latest Rates
        </button>
      </div>
      {Object.entries(data.rates).map(([currency, rate]) => (
        <div key={currency}>
          {currency === "USD" ? "" : <Rates currency={currency} rate={rate} />}
        </div>
      ))}
    </div>
  );
};

export default ApiData;
