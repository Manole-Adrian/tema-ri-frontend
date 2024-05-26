import React from "react";
import "./WebsiteTile.css";
import { LineChart } from "@mui/x-charts/LineChart";

export default function WebsiteTile({ title, times }) {
  const xData = [];
  const yData = [];
  times = times.reverse();
  times.forEach((time, index) => {
    // xData.push(`${index*10} seconds ago`)
    console.log(Math.floor((Date.now() - (Date.now() + index * 10000)) / 1000));
    // xData.push(`${(Math.abs(Math.floor((Date.now()-(Date.now()+index*10000))/1000)))}`)
    xData.push(index * 10);
    // xData.push(index)
    const newTime = time.seconds + time.microseconds / 1000000;
    yData.push(newTime);
  });

  return (
    <div className="websiteTile">
      <h2>{title}</h2>
      <LineChart
        xAxis={[{ data: xData, reverse: true }]}
        yAxis={[
          {
            max: Math.max(1, Math.max(...yData) + 0.2),
            colorMap:{
                type:'piecewise',
                thresholds:[1],
                colors:['green','red']
            }
          },
        ]}
        series={[
          {
            data: yData,
            area: true,
            showMark: false,
          },
        ]}
        width={350}
        height={250}
        grid={{ horizontal: true }}
      />
    </div>
  );
}
