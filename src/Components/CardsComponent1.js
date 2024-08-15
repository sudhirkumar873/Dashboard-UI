import React from 'react';
import { FaAngleUp } from "react-icons/fa";
import SmallerRadialChart from './SmallerRadialChart';
import AnimatedNumbers from "react-animated-numbers";

export const CardsComponent1 = () => {
  const cardData = [
    { text: 'NEW ACCOUNTS', color: 'red', percentage: 170 },
    { text: 'TOTAL EXPENSES', color: 'blue', percentage: 350 },
    { text: 'COMPANY VALUE', color: 'green', percentage: 180 },
    { text: 'NEW EXPENSES', color: 'yellow', percentage: 260 }
  ];

  return (
    <div className="flex flex-row justify-between">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg relative w-56 p-1 flex-col">
          <div className="text-gray-900 text-md font-semibold flex flex-row ">
            {card.text}
          </div>
          <div className="flex flex-row items-center justify-between mt-2">
            <div className="text-gray-900 text-xl font-bold flex flex-row">
              <FaAngleUp className="text-red-500" />
              <AnimatedNumbers
                includeComma
                animateToNumber={card.percentage}
                fontStyle={{
                  fontSize: 20,
                  color: card.color,
                }}
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
              />
              
            </div>
            <div className="text-gray-900 text-xl font-bold flex flex-row">
              <SmallerRadialChart color={card.color} percentage={card.percentage} />
            </div>
          </div>
          <div className={`absolute bottom-0 left-0 w-full h-2 bg-${card.color}-500`}></div>
        </div>
      ))}
    </div>
  );
};
