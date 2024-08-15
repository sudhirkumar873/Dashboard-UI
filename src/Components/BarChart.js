import React from 'react';
import { BarChart, Bar, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page H',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page I',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page J',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page K',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width={750} height={300} padding={10} style={{backgroundColor:'white'}}>
      <BarChart data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="aqua"
          strokeWidth={2}
          dot={true}
          yAxisId={0}
          activeDot={{ r: 0 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent;
