import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const SmallerRadialChart = ({ color, percentage }) => {
  const data = [
    {
      name: `${percentage}%`,
      uv: percentage,
      fill: color,
    }
  ];

  return (
    <div style={{ width: '60px', height: '60px', borderRadius: '50%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="130%"  
          barSize={10} 
          data={data}
          startAngle={310}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="uv"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SmallerRadialChart;
