import React, { useEffect, useState } from "react";

import trackingData from "../assets/dummy-data/trackingData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const TrackingChart = ({doc}) => {

  const number = doc/7
  const [mint, setMint] = useState([])


  useEffect(()=>{
    const mileStaticsData = [
      {
        name: "Sat",
        $: Math.round(number*1),
        mt: Math.round(number*1),
      },
      {
        name: "Sun",
        $: Math.round(number*2 ),
        mt: Math.round(number*2 ),
      },
      {
        name: "Mon",
        $: Math.round(number*3.5),
        mt: Math.round(number*3.5),
      },
      {
        name: "Tue",
        $: Math.round(number*4),
        mt: Math.round(number*4),
      },
      {
        name: "Wed",
        $: Math.round(number*4.3),
        mt: Math.round(number*4.3),
      },
      {
        name: "Thu",
        $: Math.round(number*5.1),
        mt: Math.round(number*5.1),
      },
      {
        name: "Fri",
        $: doc,
        mt: doc,
      },
    ];
    setMint(mileStaticsData)
  
}, [doc])

  return (
    <ResponsiveContainer width="100%">
      <LineChart>
        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <XAxis dataKey="name" stroke="#ddd" />

        <Line
          type="monotone"
          dataKey="$"
          data={mint}
          stroke="#e1424e"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />

        <Tooltip wrapperClassName="tooltip__style" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrackingChart;
