import React from 'react';
import AnimatedNumbers from "react-animated-numbers";

export const CardsComponent2 = () => {
  const cardData = [
    { text: 'Income', color: 'bg-red-500', number: 1200, percentage: 20 },
    { text: 'Expenses', color: 'bg-blue-500', number: 800, percentage: 10 },
    { text: 'Spendings', color: 'bg-green-500', number: 50, percentage: 40 },
    { text: 'Totals', color: 'bg-yellow-500', number: 2500, percentage: 60 }
  ];

  return (
    <div className="flex flex-row justify-between p-1">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg relative w-56 p-2 flex flex-col">
          <div className="text-gray-700 text-lg font-semibold flex flex-row">
            {card.text}
          </div>
          <div className="text-gray-900 flex flex-row items-center justify-between mt-1 mb-2">
            <div className="text-xl font-bold">
              <AnimatedNumbers
                includeComma
                animateToNumber={card.number}
                fontStyle={{
                  fontSize: 24, // Adjust as needed
                  color: "black" // Or any other color you want
                }}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
              />
            </div>
            <div className="text-lg font-medium ml-2">
              {card.percentage}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
