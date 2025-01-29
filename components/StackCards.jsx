import React, { useState } from "react";
import Image from "next/image";
 
// Object to hold card data
const cardData = [
  {
    id: 1,
    title: "Ethereum (ETH)",
    staked: "324 ETH",
    img: '/otherCoin.png', // You can replace this with your SVG icon if needed
  },
  {
    id: 2,
    title: "Bitcoin (BTC)",
    staked: "1,000 BTC",
    img: '/bitcoin.png',
  },
  {
    id: 3,
    title: "Tether (USDT)",
    staked: "500,000 USDT",
    img: '/UsdT.png',
  },
  {
    id: 4,
    title: "Doge (DOGE)",
    staked: "1,500,000 DOGE",
    img: '/doge.png',
  },
];

const StackCards = () => {

  return (
    <>
    <div className="grid grid-cols-1 max-w-7xl mx-auto px-4 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      {cardData.map((card) => (
        <div key={card.id} className="bg-[#172130] p-4 rounded-[18px]">
          <div className="flex items-center gap-2.5 mb-4">
            <div>
              <img
                src={card.img}
                className="sm:w-[44px] w-10 h-10 sm:h-[44px]"
                alt={card.title}
              />
            </div>
            <span className="font-semibold">{card.title}</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Balance</span>
            <p className="text-xl font-semibold">{card.staked}</p>
          </div>
        </div>
      ))}
    </div>

    


  </>
  );
};

export default StackCards;
