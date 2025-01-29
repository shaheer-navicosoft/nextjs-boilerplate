"use client"
import React from "react";
import Image from "next/image";
import { useEffect,useState } from "react";
 
// Data for each section
const cardData = {
  bitcoin: [
    {
      id: 1,
      title: "Bitcoin",
      img: '/bitcoin.png',
      staked: "0.003 BTC",
      earned: "+0.00031 BTC",
      earnedAmount: "+$254.00",
      progress: 68,
      remainingDays: 24,
    },
    {
      id: 2,
      title: "Bitcoin",
      img: '/bitcoin.png',
      staked: "0.005 BTC",
      earned: "+0.00020 BTC",
      earnedAmount: "+$150.00",
      progress: 68,
      remainingDays: 12,
    },
    {
      id: 3,
      title: "Bitcoin",
      img: '/bitcoin.png',
      staked: "0.010 BTC",
      earned: "+0.001 BTC",
      earnedAmount: "+$700.00",
      progress: 68,
      remainingDays: 15,
    },
  ],
  ethereum: [
    {
      id: 1,
      title: "Ethereum",
      img: '/otherCoin.png', // You can replace this with Ethereum SVG if needed
      staked: "12 ETH",
      earned: "+0.5 ETH",
      earnedAmount: "+$2000.00",
      progress: 68,
      remainingDays: 20,
    },
    {
      id: 2,
      title: "Ethereum",
      img: '/otherCoin.png',
      staked: "5 ETH",
      earned: "+0.2 ETH",
      earnedAmount: "+$800.00",
      progress: 68,
      remainingDays: 10,
    },
  ],
  doge: [
    {
      id: 1,
      title: "Doge",
      img: '/doge.png',
      staked: "100,000 DOGE",
      earned: "+5,000 DOGE",
      earnedAmount: "+$250.00",
      progress: 68,
      remainingDays: 10,
    },
    {
      id: 2,
      title: "Doge",
      img: '/doge.png',
      staked: "50,000 DOGE",
      earned: "+2,000 DOGE",
      earnedAmount: "+$100.00",
      progress: 68,
      remainingDays: 5,
    },
    {
      id: 3,
      title: "Doge",
      img: '/doge.png',
      staked: "150,000 DOGE",
      earned: "+7,000 DOGE",
      earnedAmount: "+$350.00",
      progress: 0,
      remainingDays: 7,
      isButton: true, // This card has a button instead of earned data
    },
  ],
};

const Marketing = () => {
  const [topups, setTopups] = useState([]);

 

  return (
    <div className="max-w-7xl pb-20 mx-auto px-4 mt-10">
      {/* Bitcoin Section */}
      <div>
        <h1 className="font-[700] text-[24px] sm:text-[28px]">Bitcoin</h1>
        <div className="mt-4 grid grid-cols-3 gap-5">
          {cardData.bitcoin.map((card) => (
            <div
              key={card.id}
              className="bg-[#172130] rounded-[16px] px-5 py-5"
            >
              <div className="flex items-start gap-2 flex-wrap justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={39}
                    height={39}
                    priority
                  />
                  <div>
                    <h1 className="font-[700] text-[18px]">{card.title}</h1>
                    <div className="font-medium text-[13px]">
                      <span className="text-[#77849B]">Staked:</span>{" "}
                      {card.staked}
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="font-medium text-sm">Earned:</h1>
                  {card.isButton ? (
                    <button className="bg-[#0ABEF1] text-white py-2 px-4 rounded-full">
                      Stake More
                    </button>
                  ) : (
                    <div className="flex gap-1.5 text-sm text-white">
                      <p>{card.earned}</p>
                      <h6 className="text-[#48FF2C]">{card.earnedAmount}</h6>
                    </div>
                  )}
                </div>
              </div>

              <div className="py-5">
                <div className="rounded-full w-full overflow-hidden bg-[#29303A] h-[18px] relative">
                  <div
                    className="absolute left-0 rounded-full bg-gradient-to-r from-[#0ABEF1] to-[#0EF7BA] text-[12px] font-medium flex pr-2 text-[#3C3C3C] justify-end top-0 h-full"
                    style={{ width: `${card.progress}%` }}
                  >
                    {card.progress}%
                  </div>
                </div>
              </div>

              <div className="font-medium text-sm">
                <span className="text-[#77849B]">Remaining days:</span>{" "}
                {card.remainingDays} days
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ethereum Section */}
      <div className="mt-10">
        <h1 className="font-[700] text-[24px] sm:text-[28px]">Ethereum</h1>
        <div className="mt-4 grid grid-cols-3 gap-5">
          {cardData.ethereum.map((card) => (
            <div
              key={card.id}
              className="bg-[#172130] rounded-[16px] px-5 py-5"
            >
              <div className="flex items-start gap-2 flex-wrap justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={39}
                    height={39}
                    priority
                  />
                  <div>
                    <h1 className="font-[700] text-[18px]">{card.title}</h1>
                    <div className="font-medium text-[13px]">
                      <span className="text-[#77849B]">Staked:</span>{" "}
                      {card.staked}
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="font-medium text-sm">Earned:</h1>
                  <div className="flex gap-1.5 text-sm text-white">
                    <p>{card.earned}</p>
                    <h6 className="text-[#48FF2C]">{card.earnedAmount}</h6>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <div className="rounded-full w-full overflow-hidden bg-[#29303A] h-[18px] relative">
                  <div
                    className="absolute left-0 rounded-full bg-gradient-to-r from-[#0ABEF1] to-[#0EF7BA] text-[12px] font-medium flex pr-2 text-[#3C3C3C] justify-end top-0 h-full"
                    style={{ width: `${card.progress}%` }}
                  >
                    {card.progress}%
                  </div>
                </div>
              </div>

              <div className="font-medium text-sm">
                <span className="text-[#77849B]">Remaining days:</span>{" "}
                {card.remainingDays} days
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doge Section */}
      <div className="mt-10">
        <h1 className="font-[700] text-[24px] sm:text-[28px]">Doge</h1>
        <div className="mt-4 grid grid-cols-3 gap-5">
          {cardData.doge.map((card) => (
            <div
              key={card.id}
              className="bg-[#172130] rounded-[16px] px-5 py-5"
            >
              <div className="flex items-start gap-2 flex-wrap justify-between">
                <div className="flex items-center gap-2.5">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={39}
                    height={39}
                    priority
                  />
                  <div>
                    <h1 className="font-[700] text-[18px]">{card.title}</h1>
                    <div className="font-medium text-[13px]">
                      <span className="text-[#77849B]">Staked:</span>{" "}
                      {card.staked}
                    </div>
                  </div>
                </div>

                <div>
                  {card.isButton ? (
                    <button className="py-1 font-medium text-[12px] text-[#F17B2C] rounded-[6px] pr-2 bg-[#FEF3EB] pl-1 flex items-center gap-2">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12.5C2.6862 12.5 0 9.8138 0 6.5C0 3.1862 2.6862 0.5 6 0.5C9.3138 0.5 12 3.1862 12 6.5C12 9.8138 9.3138 12.5 6 12.5ZM6.6 6.5V3.5H5.4V7.7H9V6.5H6.6Z"
                          fill="#F27B2C"
                        />
                      </svg>
                      Awaiting approval
                    </button>
                  ) : (
                    <div className="">
                      <h1 className="font-medium text-sm">Earned:</h1>
                      <div className="flex gap-1.5 text-sm text-white">
                        <p>{card.earned}</p>
                        <h6 className="text-[#48FF2C]">{card.earnedAmount}</h6>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="py-5">
                <div className="rounded-full w-full overflow-hidden bg-[#29303A] h-[18px] relative">
                  <div
                    className="absolute left-0 rounded-full bg-gradient-to-r from-[#0ABEF1] to-[#0EF7BA] text-[12px] font-medium flex pr-2 text-[#3C3C3C] justify-end top-0 h-full"
                    style={{ width: `${card.progress}%` }}
                  >
                    {card.progress}%
                  </div>
                </div>
              </div>

              <div className="font-medium text-sm">
                <span className="text-[#77849B]">Remaining days:</span>{" "}
                {card.remainingDays} days
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketing;
