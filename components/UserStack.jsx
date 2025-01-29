import React from 'react'
import bitCoin from "/bitcoin.png";
import doge from "/doge.png";
import otherCoin from "/otherCoin.png";
import UsdT from "/UsdT.png";


const UserStack = () => {
    const cardData = {
        bitcoin: [
          {
            id: 1,
            title: "Bitcoin",
            img: bitCoin,
            staked: "0.00031 BTC",
            earned: "+0.00031 BTC",
            earnedAmount: "+$254.00",
            progress: 68,
            remainingDays: 24,
          },
          {
            id: 2,
            title: "Bitcoin",
            img: bitCoin,
            staked: "0.00031 BTC",
            earned: "+0.00031 BTC",
            earnedAmount: "+$254.00",
            progress: 68,
            remainingDays: 24,
          },
          {
            id: 3,
            title: "Bitcoin",
            img: bitCoin,
            staked: "0.00031 BTC",
            earned: "+0.00031 BTC",
            earnedAmount: "+$254.00",
            progress: 68,
            remainingDays: 24,
          },
          {
            id: 4,
            title: "Bitcoin",
            img: bitCoin,
            staked: "0.00031 BTC",
            earned: "+0.00031 BTC",
            earnedAmount: "+$254.00",
            progress: 68,
            remainingDays: 24,
          },
        ],
       
      };
  return (
    <div className='flex w-full gap-4 p-4'>
      {/* Left side - User profile */}
      <div className="flex items-start justify-center w-[300px]">
        <div className="bg-white rounded-[16px] p-6 w-full">
          <div className="flex flex-col items-center">
            
            <div className="w-24 h-24 bg-gray-300 rounded-full mb-5"></div>
            
          
            <h2 className="text-[20px] font-semibold text-[#111827]">Max Well</h2>
            <p className="text-[14px] text-[#687588] mb-6 mt-2">max@gmail.com</p>
            
            <span className="bg-[#E7F7EF] w-[132px] text-center text-[#0CAF60] mb-5 text-xs px-2 py-1.5 rounded-[8px] font-[700]">
                ACTIVE
            </span>

           
            
            <div className="relative w-full">
                <button onclick="toggleDropdown()" className="w-full flex items-center text-center justify-center gap-2 bg-[#111827] text-white py-2.5 px-4 rounded-[10px] hover:bg-gray-800 transition duration-200">
                    Action
                    <span>
                        <svg width="12" height="12" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.96967 0.21967C1.26256 -0.0732233 1.73744 -0.0732233 2.03033 0.21967L6 4.18934L9.96967 0.21967C10.2626 -0.0732233 10.7374 -0.0732233 11.0303 0.21967C11.3232 0.512563 11.3232 0.987437 11.0303 1.28033L6.53033 5.78033C6.23744 6.07322 5.76256 6.07322 5.46967 5.78033L0.96967 1.28033C0.676777 0.987437 0.676777 0.512563 0.96967 0.21967Z" fill="white"/>
                        </svg>
                    </span> 
                </button>
                <div id="dropdownMenu" className="hidden absolute w-full mt-2 bg-white border rounded-lg shadow-lg">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">First Acc</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Second Acc</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Third Acc</a>
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right side - Main content */}
      <div className="flex-1">
        {/* Navigation tabs */}
        <div className="border-b bg-white rounded-full">
          <nav className="flex">
            <a href="#" className="nav-link  px-6 py-2 text-[#27A376] border-b  border-[#27A376] font-medium" data-tab="general">General</a>
            <a href="#" className="nav-link px-6 py-2 text-gray-500 hover:text-gray-700 font-medium" data-tab="staking">Staking</a>
          </nav>
        </div>

        {/* Stats cards */}
       


        <div className=" text-[black] pb-20 mx-auto px-4 mt-10">
      {/* Bitcoin Section */}
      <div>
        <h1 className="font-[700] text-[24px] mb-4">Bitcoin</h1>
        <div className="grid grid-cols-2 gap-4">
          {cardData.bitcoin.map((card) => (
            <div key={card.id} className="bg-white rounded-[16px] p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <img src={card.img} alt={card.title} className="w-10 h-10" />
                  <div>
                    <h3 className="font-bold text-lg">{card.title}</h3>
                    <p className="text-sm text-gray-500">Staked: {card.staked}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Earned:</p>
                  <div className="flex items-center gap-1">
                    <span>{card.earned}</span>
                    <span className="text-[#22C55E]">{card.earnedAmount}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="h-2 rounded-full bg-gray-100">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-[#0ABEF1] to-[#0EF7BA]" 
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center mb-4 border py-2 rounded-full">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M12 8v4l3 3"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Remaining days: {card.remainingDays} days</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <button className="flex w-[50%] justify-center items-center gap-2 text-gray-500 hover:text-gray-700 px-4 py-2 rounded-full border border-gray-200">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit staking
                </button>
                <button className="flex w-[50%] justify-center items-center gap-2 text-gray-500 hover:text-gray-700 px-4 py-2 rounded-full border border-gray-200">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete staking
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  

       


     
      </div>


      </div>
    


    
  )
}

export default UserStack