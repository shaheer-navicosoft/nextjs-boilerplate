import React from "react";
import Image from "next/image";
 
const StackingWorks = () => {
  const coins = [
    { name: "Bitcoin", img: "/bitcoin.png" },
    { name: "USDT", img: "/UsdT.png" },
    { name: "Dogecoin", img: "/doge.png" },
    { name: "OtherCoin", img: "/otherCoin.png" },
  ];

  return (
    <div className="pt-28 max-w-7xl mx-auto px-4">
      <div className="max-w-[625px] mx-auto text-center">
        <h1 className="font-[700] text-2xl sm:text-[42px]">
          How staking works
        </h1>
        <p className="font-medium text-[#71798A] leading-tight py-6 xl:leading-[20px]">
          Staking involves holding and locking up your cryptocurrencies to
          support blockchain network, earning rewards for contributing to its
          security and consensus mechanism.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-3 xl:gap-6 mt-10">
        <div className="bg-[#1E242C] flex flex-col justify-between rounded-[12px] py-5 px-5 min-h-[213px] h-full">
          <div className="flex items-center -space-x-2 sm:-space-x-4">
            <div className="bg-[#2D3541] hover:bg-[#2c323c] cursor-pointer sm:w-[60px] w-10 h-10 sm:h-[60px] rounded-full flex items-center justify-center">
              <svg
                width="37"
                height="37"
                className="sm:w-auto h-auto w-6"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.4478 18.5C30.4478 19.1382 29.9298 19.6562 29.2916 19.6562H19.6562V29.2917C19.6562 29.9299 19.1382 30.4479 18.4999 30.4479C17.8617 30.4479 17.3437 29.9299 17.3437 29.2917V19.6562H7.70825C7.07 19.6562 6.552 19.1382 6.552 18.5C6.552 17.8617 7.07 17.3437 7.70825 17.3437H17.3437V7.70833C17.3437 7.07008 17.8617 6.55208 18.4999 6.55208C19.1382 6.55208 19.6562 7.07008 19.6562 7.70833V17.3437H29.2916C29.9298 17.3437 30.4478 17.8617 30.4478 18.5Z"
                  fill="#48FF2C"
                />
              </svg>
            </div>
            {coins.map((coin, index) => (
              <Image
                key={index}
                src={coin.img}
                alt={coin.name}
                width={60}
                height={60}
                className="sm:w-[60px] w-10 h-10 sm:h-[60px]"
                priority
              />
            ))}
          </div>

          <h6 className="font-medium leading-tight text-[18px]">
            Choose the crypto
            <br />
            you want to stake
          </h6>
        </div>

        <div className="bg-[#1E242C] flex flex-col justify-between rounded-[12px] py-5 px-5 min-h-[213px] h-full">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="font-bold border-r-2 leading-none pr-2 border-[#48FF2C] text-[28px] lg:text-[34px]">
              152.12
            </div>
            <h1 className="font-semibold text-[28px] lg:text-[34px] text-[#B3B3B3]">
              USDT
            </h1>
          </div>

          <h6 className="font-medium leading-tight text-[18px]">
            Enter your stake <br />
            amount
          </h6>
        </div>

        <div className="bg-[#1E242C] w-full relative flex flex-col justify-end rounded-[12px] py-5 px-5 min-h-[213px] h-full">
          <div className="absolute z-[20] left-0 w-full top-1/2 -translate-y-1/2">
            <Image
              src="/tradechart.png"
              alt="Trade Chart"
              width={500}
              height={213}
              priority
            />
          </div>

          <h6 className="font-medium relative z-[40] leading-tight text-[18px]">
            Choose the crypto
            <br />
            you want to stake
          </h6>
        </div>
      </div>
    </div>
  );
};

export default StackingWorks;
