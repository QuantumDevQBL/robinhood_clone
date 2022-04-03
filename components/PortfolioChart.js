import { StylesContext } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
//import { Line } from 'react-chartjs-2';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

const PortfolioChart = () => {

  const styles = {
    lineFee: 'text-gray-400 text-sm',
    lineTopic: 'text-gray-400 text-sm',
    subject: 'text-gray-400 text-sm',
  }

  const lineChartData = [
    {
      month: "Jan",
      bitcoin: 50,
      ethereum: 120
    },
    {
      month: "Feb",
      bitcoin: 75,
      ethereum: 20
    },
    {
      month: "Mar",
      bitcoin: 65,
      ethereum: 140
    },
    {
      month: "Apr",
      bitcoin: 90,
      ethereum: 40

    },
    {
      month: "May",
      bitcoin: 70,
      ethereum: 150
    },
    {
      month: "Jun",
      bitcoin: 250,
      ethereum: 180
    },
    {
      month: "Jul",
      bitcoin: 70,
      ethereum: 150
    },
    {
      month: "Aug",
      bitcoin: 70,
      ethereum: 150
    },
    {
      month: "Sep",
      bitcoin: 250,
      ethereum: 180
    },
    {
      month: "Oct",
      bitcoin: 70,
      ethereum: 150
    },
    {
      month: "Nov",
      bitcoin: 250,
      ethereum: 180
    },
    {
      month: "Dec",
      bitcoin: 250,
      ethereum: 180
    }
  ];

  return (
    <React.Fragment>
      <ResponsiveContainer width="100%" aspect={2} >
        <LineChart data={lineChartData} >
          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip contentStyle={{
            backgroundColor: "lightgray",
            fontSize: '0.8rem',
            fontFamily: 'Arial'
          }} />
          <Line style={{
            fontSize: '0.8rem',
            fontFamily: 'Arial',
          }} className={styles.lineFee} dataKey="ethereum" stroke="red" activeDot={{ r: 10 }} type="monotone" />
          <Line style={{
            fontSize: '0.8rem',
            fontFamily: 'Arial',
          }} className={styles.lineTopic} dataKey="bitcoin" stroke="green" activeDot={{ r: 10 }} type="monotone" />
          <XAxis style={{
            fontSize: '0.8rem',
            fontFamily: 'Arial',
          }} className={styles.subject} dataKey="month" interval="preserveStartEnd" tickFormatter={(value) => value} />
          <YAxis style={{
            fontSize: '0.8rem',
            fontFamily: 'Arial',
          }} />
          <Legend  wrapperStyle={{  fontSize: '1.8rem', }}
          
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}

export default PortfolioChart;