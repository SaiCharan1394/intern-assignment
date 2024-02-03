import React from 'react'
import { useState,useEffect } from 'react';
const styles = {
    dataCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      maxWidth: '400px',
      margin: 'auto',
      marginTop: '50px',
    },
    dataInfo: {
      textAlign: 'left',
    },
    rates: {
      marginTop: '10px',
    },
  };

const ApiData = () => {
    const [data, setData] = useState({
        success: true,
        base: "USD",
        timestamp: 1706964032,
        rates: { EUR: 0.92535, INR: 82.99955, JPY: 148.37504 }
      });
    // const apiUrl = 'https://api.forexrateapi.com/v1/latest?api_key=b22606d60aeb335c65c5f87011dd6c01&base=USD&currencies=EUR,INR,JPY';
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(apiUrl);
      
    //         if (!response.ok) {
    //           throw new Error(`Network response was not ok. Status: ${response.status}`);
    //         }
      
    //         const result = await response.json();
    //         setData(result);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
      
    //     fetchData();
    //   }, [apiUrl]);
      
  
    return (
        <div style={styles.dataCard}>
      <h1>Data from API</h1>
      <div style={styles.dataInfo}>
        <p><strong>Success:</strong> {data.success.toString()}</p>
        <p><strong>Base:</strong> {data.base}</p>
        <p><strong>Timestamp:</strong> {new Date(data.timestamp * 1000).toLocaleString()}</p>
        <div style={styles.rates}>
          <h2>Rates:</h2>
          <ul>
            {Object.entries(data.rates).map(([currency, rate]) => (
              <li key={currency}>{`${currency}: ${rate}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    );
  
  
}

export default ApiData