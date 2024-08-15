import React, { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const cardData = [
  { text: 'Income Target', color: 'bg-yellow-500', percentage: 70 },
];

const data = [
  { name: 'Group A', value: 400, percentage: 70 },
  { name: 'Group D', value: 200, percentage: 20 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.percentage}%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const RadialChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg">
      <ResponsiveContainer width={400} height={200}>
        <PieChart width={400} height={300}>
          <defs>
            <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff00" stopOpacity={1} />
              <stop offset="100%" stopColor="#0000ff" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="url(#gradientColor)"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col items-center mt-2">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white shadow-md p-3 rounded-lg w-56 flex flex-col items-center ">
            <div className="flex flex-col items-center mb-1 w-full">
              <div
                className="text-xl font-bold"
                style={{ color: card.color.replace('bg-', '') }}
              >
                {card.percentage}%
              </div>
              <div className="w-full mt-1">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div className={`${card.color} h-1 rounded-full`} style={{ width: `${card.percentage}%` }}></div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 text-sm font-semibold">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadialChart;
