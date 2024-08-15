import React from 'react';

export const CardsComponent3 = () => {
  const cardData = [
    { text: 'Income Target', color: 'bg-red-500', percentage: 70 },
    { text: 'Expense Target', color: 'bg-blue-500', percentage: 50 },
    { text: 'Spending Targets', color: 'bg-green-500', percentage: 80 },
    { text: 'Total Targets', color: 'bg-yellow-500', percentage: 60 }
  ];

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-row justify-between p-2">Target Section</div>
      <div className="flex flex-row justify-between">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white shadow-md p-3 rounded-lg relative w-56 flex flex-col">
            <div className="flex items-center mb-1">
              <div
                className="text-xl font-bold text-2xl"
                style={{ color: card.color.replace('') }}
              >
                {card.percentage}%
              </div>
              <div className="w-full">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div className={`${card.color} h-1 rounded-full`} style={{ width: `${card.percentage}%` }}></div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 text-sm font-semibold mt-auto absolute top-10 bottom-4 left-4">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
