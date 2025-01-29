import React, { useState } from "react";

const WithdrawTo = ({setwithdraw}) => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [endWithdraw, setendWithdraw] = useState(false)

  const coins = [
    { id: 1, name: "Bitcoin", color: "#F7931A", icon: <BitcoinIcon /> },
    { id: 2, name: "Tether (USDT)", color: "#50AF95", icon: <TetherIcon /> },
    { id: 3, name: "Doge", color: "#C2A633", icon: <DogeIcon /> },
    { id: 4, name: "Ethereum", color: "#343434", icon: <EthereumIcon /> },
  ];

    const [selectedDuration, setSelectedDuration] = useState(60);
      const [lockedAmount, setLockedAmount] = useState("0.00");
      const [autoStaking, setAutoStaking] = useState(false);
      const [agreeToTerms, setAgreeToTerms] = useState(false);
    
      const durationOptions = [
        { days: 14, apr: "8.15%" },
        { days: 30, apr: "11.23%" },
        { days: 60, apr: "16.01%" },
        { days: 90, apr: "19.25%" },
        { days: 120, apr: "21.56%" },
        { days: 180, apr: "24.87%" },
      ];


      const startDate = new Date().toLocaleDateString("en-GB");
      const endDate = new Date(
        Date.now() + selectedDuration * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-GB");
    
      // Get APR for selected duration
      const selectedAPR =
        durationOptions.find((opt) => opt.days === selectedDuration)?.apr ||
        "16.01%";



  const endDraw = () => {
    setendWithdraw(prev=>!prev)
  }


  const end = () => {
    setwithdraw(prev=>!prev)
    setendWithdraw(prev=>!prev)
  }

  return (
    <>
    <div className="fixed z-[99999] inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-[24rem] md:w-[30rem] rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">
            Choose coin to Withdraw
          </h2>

          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsModalOpen(false)}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="16.5" stroke="#C5C5C5" />
              <path
                d="M22.4417 21.5583C22.6859 21.8025 22.6859 22.1984 22.4417 22.4425C22.32 22.5642 22.16 22.6258 22 22.6258C21.84 22.6258 21.68 22.565 21.5584 22.4425L17 17.8842L12.4417 22.4425C12.32 22.5642 12.16 22.6258 12 22.6258C11.84 22.6258 11.68 22.565 11.5584 22.4425C11.3142 22.1984 11.3142 21.8025 11.5584 21.5583L16.1167 17L11.5584 12.4417C11.3142 12.1975 11.3142 11.8017 11.5584 11.5575C11.8025 11.3133 12.1984 11.3133 12.4425 11.5575L17.0009 16.1159L21.5592 11.5575C21.8034 11.3133 22.1992 11.3133 22.4434 11.5575C22.6875 11.8017 22.6875 12.1975 22.4434 12.4417L17.885 17L22.4417 21.5583Z"
                fill="#C5C5C5"
              />
            </svg>
          </button>
        </div>
        <div className="mb-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {coins.map((coin) => (
            <div
              key={coin.id}
              onClick={() => setSelectedCoin(coin.id)}
              className={`relative flex flex-col items-center text-center rounded-2xl border p-4 cursor-pointer ${
                selectedCoin === coin.id ? "border-green-500 bg-green-100" : ""
              }`}
            >
              {coin.icon}
              <span className="text-sm font-medium mt-[20px] text-black">
                {coin.name}
              </span>
              {selectedCoin === coin.id && (
                <svg
                  width="25"
                  height="25"
                  className="absolute -top-2 -right-[6px]"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.5"
                    cy="12.5"
                    r="11.75"
                    fill="white"
                    stroke="#34CA1D"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11.25 15.5C11.2494 15.5 11.2489 15.5 11.2477 15.5C11.092 15.4994 10.9438 15.437 10.8347 15.3262L8.50137 12.9567C8.27503 12.7268 8.27795 12.3576 8.50779 12.1318C8.73762 11.9061 9.10628 11.9084 9.33262 12.1382L11.2535 14.0889L16.6715 8.67149C16.8996 8.44341 17.2683 8.44341 17.4964 8.67149C17.7244 8.89899 17.7244 9.26882 17.4964 9.49632L11.663 15.3297C11.5534 15.4387 11.4046 15.5 11.25 15.5Z"
                    fill="#34CA1D"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
        {/* Add remaining modal content here@. */}

        <div className="mb-6">
          <label
            htmlFor="topup-amount"
            className="mb-2 block text-sm font-medium text-black"
          >
            Top up amount
          </label>
          <div className="flex items-center rounded-lg border px-4 py-2">
            <input
              id="topup-amount"
              type="number"
              placeholder="0.00"
              className="flex-1 border-r placeholder:text-[black] border-[#E1E1E1] outline-none"
            />
            <div className="ml-2 flex items-center space-x-2">
              {/* Wrapper for the icon */}
              <div className="h-[30px] w-[30px] -mt-7  flex">
                {React.cloneElement(
                  coins.find((coin) => coin.id === selectedCoin)?.icon ||
                    coins[1].icon,
                  {
                    className: "h-full w-full",
                  }
                )}
              </div>
              <span className="text-sm text-black">
                {coins.find((coin) => coin.id === selectedCoin)?.name ||
                  "Tether (USDT)"}
              </span>
            </div>
          </div>
        </div>
        <button onClick={endDraw} className="w-full rounded-lg bg-[#48FF2C] py-2 font-medium text-black hover:bg-green-600">
          Continue
        </button>
      </div>
    </div>



    

{endWithdraw &&


<div className="fixed z-[99999999999] inset-0 bg-black/50 flex items-center justify-center">
<div className="bg-white rounded-2xl w-[30rem] p-4">
  {/* Header */}
  <div className="flex justify-between items-center mb-6 ">
    <span className="font-medium text-[black]">Stake Tether (USDT)</span>
    <button onClick={()=>setdrawerOther3(false)}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="17" cy="17" r="16.5" stroke="#C5C5C5" />
        <path
          d="M22.4415 21.5583C22.6856 21.8025 22.6856 22.1984 22.4415 22.4425C22.3198 22.5642 22.1598 22.6258 21.9998 22.6258C21.8398 22.6258 21.6798 22.565 21.5581 22.4425L16.9998 17.8842L12.4415 22.4425C12.3198 22.5642 12.1598 22.6258 11.9998 22.6258C11.8398 22.6258 11.6798 22.565 11.5581 22.4425C11.314 22.1984 11.314 21.8025 11.5581 21.5583L16.1165 17L11.5581 12.4417C11.314 12.1975 11.314 11.8017 11.5581 11.5575C11.8023 11.3133 12.1981 11.3133 12.4423 11.5575L17.0006 16.1159L21.559 11.5575C21.8031 11.3133 22.199 11.3133 22.4431 11.5575C22.6873 11.8017 22.6873 12.1975 22.4431 12.4417L17.8848 17L22.4415 21.5583Z"
          fill="#C5C5C5"
        />
      </svg>
    </button>
  </div>

  {/* Duration Options */}
  <div className="mb-4">
    <span className="text-[14px] font-semibold mb-2 block text-black">
      Wallet address
    </span>
    <div className="border py-2 flex rounded-xl">
      <input
        id="topup-amount"
        type="number"
        placeholder="Enter wallet adress"
        className=" w-[full]   px-2 placeholder:text-[#B3B3B3] placeholder:text-[13px] border-[#E1E1E1] outline-none"
      />
    </div>
  </div>

  {/* Locked Amount */}
  <div className="mb-4">
    <span className="text-[14px] font-semibold mb-2 block text-black">
      Locked amount
    </span>
    <div className="border py-2 flex rounded-xl">
      <input
        id="topup-amount"
        type="number"
        placeholder="0.00"
        className=" w-[65%] border-r  px-2 placeholder:text-[#B3B3B3] border-[#E1E1E1] outline-none"
      />
      <div className="flex items-center space-x-2">
        <svg
          width="31"
          height="31"
          className="ml-[10px]"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="30"
            height="30"
            rx="15"
            fill="white"
          />
          <rect
            x="0.5"
            y="0.5"
            width="30"
            height="30"
            rx="15"
            stroke="#F1F1F1"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.27487 7.32979L4.15026 15.9762C4.13456 16.0083 4.12959 16.0446 4.13606 16.0798C4.14254 16.115 4.16012 16.1472 4.18625 16.1717L15.3258 26.8247C15.3575 26.855 15.3996 26.8719 15.4435 26.8719C15.4873 26.8719 15.5294 26.855 15.5611 26.8247L26.7007 16.1724C26.7268 16.1479 26.7444 16.1157 26.7508 16.0805C26.7573 16.0453 26.7524 16.009 26.7367 15.9768L22.612 7.33046C22.5987 7.30142 22.5773 7.27682 22.5504 7.2596C22.5234 7.24238 22.4921 7.23327 22.4601 7.23335H8.42815C8.396 7.23295 8.36442 7.24184 8.33722 7.25896C8.31003 7.27607 8.28837 7.30067 8.27487 7.32979Z"
            fill="#50AF95"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.8749 16.8641C16.7949 16.87 16.3817 16.8947 15.4601 16.8947C14.727 16.8947 14.2065 16.8727 14.0239 16.8641C11.1908 16.7397 9.0762 16.2475 9.0762 15.6582C9.0762 15.0689 11.1908 14.5774 14.0239 14.4511V16.3739C14.2091 16.3872 14.7396 16.4184 15.4727 16.4184C16.3524 16.4184 16.7929 16.3819 16.8722 16.3745V14.4524C19.6993 14.5781 21.8093 15.0703 21.8093 15.6582C21.8093 16.2462 19.7 16.7384 16.8722 16.8634L16.8749 16.8641ZM16.8749 14.2535V12.5329H20.8202V9.90906H10.0785V12.5329H14.0232V14.2529C10.8169 14.3998 8.40576 15.0337 8.40576 15.7932C8.40576 16.5528 10.8169 17.186 14.0232 17.3336V22.8473H16.8742V17.3316C20.0732 17.1846 22.4804 16.5515 22.4804 15.7926C22.4804 15.0337 20.0752 14.4005 16.8742 14.2529L16.8749 14.2535Z"
            fill="white"
          />
        </svg>

        <p className="text-black text-[14px]">Tether (USDT)</p>
      </div>
    </div>
    <div className="text-[14px] text-gray-500 mt-[16px] border-b pb-2">
      Available balance: <span className="text-[#0AA4F1]">50 USDT</span>
    </div>
  </div>

  {/* Locked Amount Limits */}
  <div className="mb-4 ">
    <span className="text-[14px] font-semibold mb-2 block text-[black]">
      Locked amount limits
    </span>
    <div className="text-sm text-gray-500  border-b border-dashed  py-4">
      Minimum: <span className="text-[black] font-medium">52 USDT</span>
    </div>
  </div>

  {/* Summary */}
  <div className="mb-6">
    <span className="font-medium text-[14px] mb-2 block text-[black]">
      Summary
    </span>
    <div className="space-y-2 text-sm">
      <div className="flex ">
        <span className="text-gray-500">Withdrawal amount :</span>
        <span className="text-[black] font-medium ml-[10px]">
          52 USDT
        </span>
      </div>
      <div className="flex ">
        <span className="text-gray-500">Comission :</span>
        <span className="text-[black] font-medium ml-[10px]">2%</span>
      </div>
      <div className="flex ">
        <span className="text-gray-500">Total withdrawal:</span>
        <span className="text-[#F7931A] font-semibold ml-[10px]">
          50.00 USDT
        </span>
      </div>
    </div>
  </div>

  {/* Terms Checkbox */}
  <div className="flex items-start gap-2 mb-6">
    <input
      type="checkbox"
      checked={agreeToTerms}
      onChange={() => setAgreeToTerms(!agreeToTerms)}
      className="mt-1 h-[14px] w-[14px]"
    />
    <span className="text-[15px] text-[black]">
      I agree with{" "}
      <a href="#" className="text-[#0F98CE]">
        Terms
      </a>{" "}
      and{" "}
      <a href="#" className="text-[#0F98CE]">
        Privacy
      </a>
    </span>
  </div>

  {/* Confirm Button */}
  <button onClick={end} className="w-full rounded-lg bg-[#48FF2C] py-2 font-medium text-black hover:bg-green-600">
    Continue
  </button>
</div>
</div>
}
    </>
  );
};

const BitcoinIcon = () => (
  <svg
    width="59"
    height="59"
    viewBox="0 0 59 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M58.1173 36.6362C54.177 52.4399 38.1685 62.0578 22.3611 58.1168C6.56039 54.1769 -3.05853 38.1693 0.883581 22.3668C4.82223 6.56136 20.8307 -3.0572 36.6331 0.882741C52.4394 4.82268 62.0577 20.832 58.1169 36.6365L58.1172 36.6362H58.1173Z"
      fill="#F7931A"
    />
    <path
      d="M42.9242 26.2764C43.5275 22.2834 40.4566 20.1371 36.2573 18.7053L37.6196 13.2965L34.2935 12.4761L32.9674 17.7425C32.0929 17.5266 31.195 17.3232 30.3025 17.1215L31.6383 11.8204L28.3143 11L26.9512 16.407C26.2276 16.2439 25.517 16.0827 24.8274 15.9129L24.8313 15.8959L20.2446 14.7621L19.3598 18.2786C19.3598 18.2786 21.8275 18.8386 21.7755 18.873C23.1223 19.2058 23.3659 20.0884 23.3254 20.788L21.7737 26.9498C21.8664 26.9731 21.9867 27.0069 22.1195 27.0597C22.0085 27.0324 21.8904 27.0026 21.7679 26.9736L19.5928 35.6054C19.4282 36.0105 19.0104 36.6184 18.0688 36.3875C18.1021 36.4354 15.6513 35.7904 15.6513 35.7904L14 39.5592L18.3283 40.6273C19.1336 40.8272 19.9226 41.0363 20.6997 41.233L19.3233 46.7038L22.6456 47.5242L24.0086 42.1115C24.9162 42.3554 25.797 42.5803 26.6592 42.7924L25.3008 48.1796L28.627 49L30.0032 43.5395C35.6749 44.602 39.9395 44.1736 41.7346 39.0954C43.181 35.0069 41.6625 32.6486 38.6787 31.1108C40.852 30.6146 42.489 29.1997 42.9254 26.2768L42.9244 26.2761L42.9242 26.2764ZM35.3249 36.8249C34.297 40.9134 27.343 38.7033 25.0883 38.1491L26.9148 30.9012C29.1693 31.4584 36.3992 32.5609 35.3251 36.8249H35.3249ZM36.3536 26.2171C35.4159 29.9361 29.6279 28.0467 27.7504 27.5834L29.4063 21.01C31.2839 21.4733 37.3304 22.338 36.3539 26.2171H36.3536Z"
      fill="white"
    />
  </svg>
);

const TetherIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" fill="white" />
    <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="#F1F1F1" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.0159 14.1867L8.03282 30.9216C8.00244 30.9838 7.99282 31.0541 8.00535 31.1222C8.01788 31.1903 8.05192 31.2526 8.10247 31.3001L29.663 51.9188C29.7242 51.9774 29.8058 52.0101 29.8906 52.0101C29.9755 52.0101 30.057 51.9774 30.1183 51.9188L51.6788 31.3013C51.7293 31.2539 51.7634 31.1916 51.7759 31.1235C51.7884 31.0554 51.7788 30.9851 51.7484 30.9229L43.7653 14.188C43.7395 14.1318 43.6981 14.0842 43.646 14.0508C43.5938 14.0175 43.5331 13.9999 43.4712 14H16.3126C16.2504 13.9993 16.1893 14.0165 16.1366 14.0496C16.084 14.0827 16.0421 14.1303 16.0159 14.1867Z"
      fill="#50AF95"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M32.6607 32.6401C32.5059 32.6517 31.7062 32.6993 29.9223 32.6993C28.5034 32.6993 27.496 32.6569 27.1426 32.6401C21.6592 32.3994 17.5664 31.4468 17.5664 30.3063C17.5664 29.1657 21.6592 28.2144 27.1426 27.9698V31.6914C27.5011 31.7171 28.5279 31.7776 29.9468 31.7776C31.6494 31.7776 32.502 31.7068 32.6555 31.6927V27.9724C38.1272 28.2157 42.211 29.1683 42.211 30.3063C42.211 31.4442 38.1285 32.3968 32.6555 32.6388L32.6607 32.6401ZM32.6607 27.5875V24.2572H40.2968V19.1788H19.5064V24.2572H27.1413V27.5862C20.9356 27.8707 16.2688 29.0975 16.2688 30.5676C16.2688 32.0377 20.9356 33.2632 27.1413 33.549V44.2207H32.6594V33.5451C38.8509 33.2606 43.51 32.0351 43.51 30.5663C43.51 29.0975 38.8547 27.872 32.6594 27.5862L32.6607 27.5875Z"
      fill="white"
    />
  </svg>
);

const DogeIcon = () => (
  <svg
    width="57"
    height="57"
    viewBox="0 0 57 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.9893 19H25V26.8557H31.2762V30.1448H25V37.9999H29.1847C30.2599 37.9999 38.012 38.1212 38 28.8605C37.988 19.5999 30.4813 19 28.9893 19Z"
      fill="#C2A633"
    />
    <path
      d="M28.5 0C12.7597 0 0 12.7597 0 28.5C0 44.2403 12.7597 57 28.5 57C44.2403 57 57 44.2403 57 28.5C57 12.7597 44.2403 0 28.5 0ZM29.6198 43.8928H19.2985V30.1712H15.6602V26.8099H19.2982V13.0875H28.1566C30.2522 13.0875 44.1325 12.6523 44.1325 28.7477C44.1325 45.1092 29.6201 43.8928 29.6201 43.8928H29.6198Z"
      fill="#C2A633"
    />
  </svg>
);

const EthereumIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="30" r="29.5" fill="white" stroke="#F1F1F1" />
    <path
      d="M29.9959 16L29.6899 16.6381V35.1521L29.9959 35.3395L43.9914 30.2596L29.9959 16Z"
      fill="#343434"
    />
    <path
      d="M29.9959 16L16 30.2596L29.9959 35.3395V26.3533V16Z"
      fill="#8C8C8C"
    />
    <path
      d="M29.9959 36.9666L29.8235 37.0957V43.6907L29.9959 43.9998L44 31.8894L29.9959 36.9666Z"
      fill="#3C3C3B"
    />
    <path
      d="M29.9959 43.9998V36.9666L16 31.8894L29.9959 43.9998Z"
      fill="#8C8C8C"
    />
    <path
      d="M29.9958 35.3395L43.9914 30.2596L29.9958 26.3533V35.3395Z"
      fill="#141414"
    />
    <path d="M16 30.2596L29.9959 35.3395V26.3533L16 30.2596Z" fill="#393939" />
  </svg>
);

export default WithdrawTo;
