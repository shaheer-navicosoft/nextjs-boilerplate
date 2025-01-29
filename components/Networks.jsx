'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// Object containing the card data
const networksData = [
  {
    id: 1,
    img: '/bitcoin.png',
    title: 'Bitcoin',
    apy: '24%',
    staked: '1.00334',
  },
  {
    id: 2,
    img: '/UsdT.png',
    title: 'Tether (USDT)',
    apy: '24%',
    staked: '1.00334',
  },
  {
    id: 3,
    img: '/doge.png',
    title: 'Doge',
    apy: '24%',
    staked: '1.00334',
  },
  {
    id: 4,
    img: '/otherCoin.png',
    title: 'Ethereum',
    apy: '24%',
    staked: '1.00334',
  },
];

const Networks = () => {
  // State to manage which tab is active
  const [activeTab, setActiveTab] = useState('available');

  // Filter the cards based on the active tab
  const filteredData =
    activeTab === 'available'
      ? networksData
      : networksData.filter((network) => network.id === 1); // Only show Bitcoin for "Coming soon"

  return (
    <div className="max-w-7xl pb-32 mx-auto px-4">
      <h1 className="text-center sm:text-[42px] text-3xl font-[700]">Networks</h1>
      <div className="mx-auto w-fit py-8 flex items-center gap-4">
        <button
          className={`font-medium pb- border-b-2 ${activeTab === 'available' ? 'border-[#48FF2C]' : 'border-transparent'} hover:text-white text-[#71798A] hover:border-[#48FF2C]`}
          onClick={() => setActiveTab('available')}
        >
          Available
        </button>
        <button
          className={`font-medium pb- border-b-2 ${activeTab === 'comingSoon' ? 'border-[#48FF2C]' : 'border-transparent'} hover:text-white text-[#71798A] hover:border-[#48FF2C]`}
          onClick={() => setActiveTab('comingSoon')}
        >
          Coming soon
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-16 gap-5">
        {/* Render the filtered cards */}
        {filteredData.map((network) => (
          <div key={network.id} className="rounded-[16px] bg-[#191E25] py-5 px-4">
            <Image 
              src={network.img} 
              alt={network.title}
              width={60}
              height={60}
              priority
            />
            <h2 className="text-[24px] font-[700] py-2">{network.title}</h2>

            <div className="mt-5 flex items-start gap-5 flex-wrap xl:gap-7">
              <div className="flex flex-col gap-2.5">
                <h5 className="text-[#71798A] font-medium text-sm">APY From</h5>
                <h2 className="text-[18px] font-medium">{network.apy}</h2>
              </div>

              <div className="flex flex-col items-start gap-2.5">
                <h5 className="text-[#71798A] font-medium text-sm">Staked with {network.title}</h5>
                <h2 className="text-[18px] font-medium">{network.staked}</h2>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2">
              <button className="py-2 min-h-[48px] flex items-center justify-center bg-[#48FF2C] hover:bg-[#46ce30] rounded-[12px] font-semibold text-black">
                Stake now
              </button>
              <button className="w-full hover:underline py-2 min-h-[48px] flex items-center justify-center hover:text-[#48FF2C] rounded-[12px] font-semibold text-[#71798A]">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Networks;
