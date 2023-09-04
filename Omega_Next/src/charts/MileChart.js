import React, { useEffect, useState } from "react";

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const mileChart = ({doc}) => {

  const number = doc/7
  const [mint, setMint] = useState([])


  useEffect(()=>{
    const mileStaticsData = [
      {
        name: "Sat",
        minted: Math.round(number*1),
      },
      {
        name: "Sun",
        minted: Math.round(number*2 ),
      },
      {
        name: "Mon",
        minted: Math.round(number*3.5),
      },
      {
        name: "Tue",
        minted: Math.round(number*4),
      },
      {
        name: "Wed",
        minted: Math.round(number*4.3),
      },
      {
        name: "Thu",
        minted: Math.round(number*5.1),
      },
      {
        name: "Fri",
        minted: doc,
      },
    ];
    setMint(mileStaticsData)
  
  }, [doc])

  
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={mint}>
        <XAxis dataKey="name" stroke="#ef621c" />
        <Bar dataKey="minted" stroke="#ef621c" fill="#ef621c"  />

        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default mileChart;
