// BarChart.js
import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'

function BarChart() {

  
  const rand = () => Math.round(Math.random() * 20 - 10)

  const [data, setData] = useState({});

  useEffect(() => {
      setData({
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              type: 'line',
              label: 'Dataset 1',
              borderColor: 'rgb(54, 162, 235)',
              borderWidth: 2,
              fill: false,
              data: [rand(), rand(), rand(), rand(), rand(), rand()],
            },
            {
              type: 'bar',
              label: 'Dataset 2',
              backgroundColor: 'rgb(255, 99, 132)',
              data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
              borderColor: 'white',
              borderWidth: 2,
            },
            {
              type: 'bar',
              label: 'Dataset 3',
              backgroundColor: 'rgb(75, 192, 192)',
              data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            },
          ],
        });
  }, []);


  return (
      <div>
          <div className='header'>
          <h1 className='title'>Multi Type Chart</h1>
          </div>
          <Bar data={data} />
      </div>
  )
}

export default BarChart;