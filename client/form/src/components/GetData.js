import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:5000/api/restricted/data')
        .then(res => {
          setData(res.data);
          console.log('data from GetData:',res.data)
        })
        .catch(err => console.log(err.response));
      }, []);
    return (
      <div>
        <h1>Data:</h1>
        {data.map(n => {
            return(
                <>
                <p>Name: {n.name}</p>
                <p>Course: {n.course}</p>
                </>
            ) 
        })}
      </div>

     
    );
  };

export default GetData;