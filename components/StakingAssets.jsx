"use client"
import React, { useState, useEffect } from "react";

const StakingAssets = () => {

  const [topups, setTopups] = useState([]);
  const [coins, setCoins] = useState([]);
  const [groupedCoins, setGroupedCoins] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [selectedTopup, setSelectedTopup] = useState({});
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalApprovedAmount, setTotalApprovedAmount] = useState(0);

  const calculateTotalApprovedAmount = () => {
    const total = topups
      .filter(topup => topup.status === 'APPROVED')
      .reduce((sum, topup) => sum + topup.amount, 0);
    setTotalApprovedAmount(total);
  };

  const fetchAllUsers = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    setUsers(data.users);
    console.log(data.users, 'users');
  }
  const fetchallCoins = async () => {
    const response = await fetch('/api/coin');
    const data = await response.json();
    setCoins(data.coins);
    console.log(data.coins);
  };
  const fetchTopups = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      // if (!user?.id) return;

      const response = await fetch(`/api/topup`);
      if (!response.ok) throw new Error('Failed to fetch topups');

      const data = await response.json();
      setTopups(data.topups);
      console.log(data.topups);
    } catch (error) {
      console.error('Error fetching topups:', error);
    }
  };

  useEffect(() => {
    if (topups.length && coins.length) {
      // Group topups by coin name
      const grouped = coins.reduce((acc, coin) => {
        const coinTopups = topups
          .filter(topup => topup.coin === coin._id)
          .map(topup => ({
            coin_id: topup._id,
            amount: topup.amount
          }));

        if (coinTopups.length > 0) {
          const totalAmount = coinTopups.reduce((sum, topup) => sum + topup.amount, 0);

          acc.push({
            coin_name: coin.name.toLowerCase(),
            coins_data: coinTopups,
            total_amount: totalAmount
          });
        }

        return acc;
      }, []);

      // Calculate total balance across all coins
      const overallTotal = grouped.reduce((sum, coin) => sum + coin.total_amount, 0);

      setGroupedCoins(grouped);
      setTotalBalance(overallTotal);

      console.log('Grouped coins:', grouped);
      console.log('Total balance across all coins:', overallTotal);
    }
  }, [topups, coins]);

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTopups = topups.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(topups.length / itemsPerPage);

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const getCoinById = (id) => {
    return coins.find(coin => coin._id === id);
  }

   

  
  const getCoinWalletAddress = (id) => {
    const coin = coins.find(coin => coin._id === id);
    return coin ? coin.walletAddress : null;
  }
  useEffect(() => {
    fetchTopups();
    fetchallCoins();
    fetchAllUsers();
  }, []);

  

  useEffect(() => {
    if (topups.length) {
      calculateTotalApprovedAmount();
    }
  }, [topups]);

  const [drawer, setdrawer] = useState(false)

  const open = ({ coin, status, amount, user, _id, createdAt }) => {
    setdrawer(prev => !prev)
    console.log(_id, 'id');

    setSelectedTopup({ coin, status, amount, user, _id, createdAt })
  }

  const getDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }


 
  const getUserById = (id) => {
    const user = users.find(user => user._id === id);
    return user ? user.username : null;
  }


  const handleConfirmTopup = async () => {
    try {
      const response = await fetch(`/api/topup/${selectedTopup._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'CONFIRMED' })
      });

      if (!response.ok) {
        throw new Error('Failed to confirm topup');
      }

      // Refresh topups list
      await fetchTopups();
      // Close drawer
      setdrawer(false);
    } catch (error) {
      console.error('Error confirming topup:', error);
      // Handle error (show toast/alert)
    }
  };

  const handleRefuseTopup = async () => {
    try {
      const response = await fetch(`/api/topup/${selectedTopup._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'REFUSED' })
      });

      if (!response.ok) {
        throw new Error('Failed to refuse topup');
      }

      // Refresh topups list
      await fetchTopups();
      // Close drawer
      setdrawer(false);
    } catch (error) {
      console.error('Error refusing topup:', error);
      // Handle error (show toast/alert)
    }
  };


  const [hideInfo, setHideInfo] = useState([])
  const toggleRowInfo = (id) => {
    setHideInfo(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    )
  }

  



  return (
    <div className="bg-[#F0F1F1] p-6 text-black">
      
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4">Staking assets</h2>

      {/* Assets Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Ethereum Card */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="">
              <svg
                width="44"
                height="45"
                viewBox="0 0 44 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="22"
                  cy="22.5"
                  r="21.5"
                  fill="white"
                  stroke="#DCDCDC"
                />
                <path
                  d="M21.9973 12.2334L21.7729 12.7013V26.2783L21.9973 26.4157L32.2607 22.6905L21.9973 12.2334Z"
                  fill="#343434"
                />
                <path
                  d="M21.9975 12.2334L11.7339 22.6905L21.9975 26.4157V19.8258V12.2334Z"
                  fill="#8C8C8C"
                />
                <path
                  d="M21.9975 27.6086L21.8711 27.7033V32.5396L21.9975 32.7662L32.2672 23.8853L21.9975 27.6086Z"
                  fill="#3C3C3B"
                />
                <path
                  d="M21.9975 32.7662V27.6086L11.7339 23.8853L21.9975 32.7662Z"
                  fill="#8C8C8C"
                />
                <path
                  d="M21.9976 26.4156L32.261 22.6903L21.9976 19.8257V26.4156Z"
                  fill="#141414"
                />
                <path
                  d="M11.7339 22.6903L21.9975 26.4156V19.8257L11.7339 22.6903Z"
                  fill="#393939"
                />
              </svg>
            </div>
            <span className="font-semibold">Ethereum (ETH)</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Staked</span>
            <p className="text-xl font-semibold">324 ETH</p>
          </div>
        </div>

        {/* Bitcoin Card */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.3866 27.08C39.6484 38.3301 28.5239 45.1767 17.5391 42.3713C6.55892 39.5666 -0.12542 28.1713 2.61401 16.9221C5.35104 5.6708 16.4755 -1.17631 27.4569 1.62839C38.4409 4.43309 45.1249 15.8296 42.3863 27.0802L42.3865 27.08H42.3866Z"
                  fill="#F7931A"
                />
                <path
                  d="M31.9478 19.4522C32.3638 16.7202 30.2459 15.2517 27.3498 14.272L28.2894 10.5713L25.9955 10.01L25.0809 13.6133C24.4779 13.4656 23.8586 13.3264 23.2431 13.1884L24.1643 9.56133L21.8719 9L20.9319 12.6995C20.4329 12.5879 19.9427 12.4777 19.4672 12.3615L19.4699 12.3498L16.3066 11.5741L15.6964 13.9801C15.6964 13.9801 17.3982 14.3632 17.3624 14.3868C18.2913 14.6145 18.4592 15.2184 18.4313 15.697L17.3612 19.913C17.4251 19.929 17.5081 19.9521 17.5996 19.9882C17.5231 19.9695 17.4417 19.9491 17.3572 19.9293L15.8571 25.8353C15.7436 26.1124 15.4555 26.5284 14.806 26.3704C14.829 26.4031 13.1389 25.9618 13.1389 25.9618L12 28.5405L14.9851 29.2713C15.5404 29.4081 16.0846 29.5512 16.6205 29.6857L15.6713 33.4289L17.9625 33.9902L18.9025 30.2868C19.5284 30.4537 20.1358 30.6076 20.7305 30.7527L19.7937 34.4387L22.0876 35L23.0367 31.2639C26.9482 31.9909 29.8893 31.6977 31.1273 28.2232C32.1248 25.4258 31.0776 23.8122 29.0198 22.76C30.5186 22.4205 31.6476 21.4524 31.9486 19.4525L31.9479 19.452L31.9478 19.4522ZM26.7069 26.6697C25.998 29.4671 21.202 27.9549 19.6471 27.5757L20.9068 22.6166C22.4616 22.9978 27.4477 23.7522 26.707 26.6697H26.7069ZM27.4163 19.4117C26.7696 21.9562 22.7779 20.6635 21.483 20.3465L22.625 15.849C23.9199 16.1659 28.0899 16.7576 27.4165 19.4117H27.4163Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="font-semibold">Bitcoin (BTC)</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Staked</span>
            <p className="text-xl font-semibold">0.345 BTC</p>
          </div>
        </div>

        {/* Tether Card */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="23.5"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="23.5"
                  stroke="#F1F1F1"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.8127 11.3495L6.42616 24.7375C6.40186 24.7873 6.39415 24.8435 6.40418 24.898C6.41421 24.9525 6.44143 25.0023 6.48188 25.0402L23.7303 41.5352C23.7793 41.5821 23.8445 41.6083 23.9124 41.6083C23.9803 41.6083 24.0455 41.5821 24.0945 41.5352L41.3429 25.0413C41.3834 25.0033 41.4106 24.9535 41.4206 24.899C41.4306 24.8445 41.423 24.7883 41.3986 24.7385L35.0122 11.3506C34.9915 11.3056 34.9584 11.2675 34.9167 11.2409C34.875 11.2142 34.8264 11.2001 34.7769 11.2002H13.05C13.0002 11.1996 12.9513 11.2134 12.9092 11.2399C12.8671 11.2664 12.8336 11.3045 12.8127 11.3495Z"
                  fill="#50AF95"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.1287 26.1123C26.0048 26.1216 25.365 26.1597 23.9379 26.1597C22.8028 26.1597 21.9969 26.1257 21.7141 26.1123C17.3275 25.9197 14.0532 25.1576 14.0532 24.2452C14.0532 23.3328 17.3275 22.5717 21.7141 22.376V25.3533C22.001 25.3739 22.8224 25.4223 23.9575 25.4223C25.3196 25.4223 26.0017 25.3657 26.1245 25.3543V22.3781C30.5019 22.5727 33.7689 23.3348 33.7689 24.2452C33.7689 25.1556 30.5029 25.9177 26.1245 26.1113L26.1287 26.1123ZM26.1287 22.0702V19.406H32.2376V15.3433H15.6052V19.406H21.7131V22.0691C16.7486 22.2967 13.0151 23.2782 13.0151 24.4543C13.0151 25.6303 16.7486 26.6107 21.7131 26.8394V35.3767H26.1276V26.8363C31.0808 26.6087 34.8081 25.6283 34.8081 24.4532C34.8081 23.2782 31.0839 22.2978 26.1276 22.0691L26.1287 22.0702Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="font-semibold">Tether (USDT)</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Staked</span>
            <p className="text-xl font-semibold">36,456.00 USDT</p>
          </div>
        </div>

        {/* Dogecoin Card */}
        <div className="bg-white p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="">
              <svg
                width="47"
                height="48"
                viewBox="0 0 47 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9036 16.1665H20.6143V22.644H25.7894V25.3561H20.6143V31.8331H24.0648C24.9514 31.8331 31.3434 31.9331 31.3335 24.2971C31.3236 16.6611 25.1339 16.1665 23.9036 16.1665Z"
                  fill="#C2A633"
                />
                <path
                  d="M23.5 0.5C10.5212 0.5 0 11.0212 0 24C0 36.9788 10.5212 47.5 23.5 47.5C36.4788 47.5 47 36.9788 47 24C47 11.0212 36.4788 0.5 23.5 0.5ZM24.4233 36.6923H15.9128V25.378H12.9128V22.6064H15.9126V11.2914H23.2168C24.9448 11.2914 36.39 10.9326 36.39 24.2042C36.39 37.6953 24.4235 36.6923 24.4235 36.6923H24.4233Z"
                  fill="#C2A633"
                />
              </svg>
            </div>
            <span className="font-semibold ">Dogecoin</span>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Staked</span>
            <p className="text-xl font-semibold">36,456.00 DOGE</p>
          </div>
        </div>
      </div>

      {/* <pre>
        {JSON.stringify(coins, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(topups, null, 2)}
      </pre> */}

      <h2 className="text-xl font-semibold mb-4">Topup requests</h2>


      {/* Table Section */}
      <div className="bg-white rounded-xl">
        {/* Table Header */}
        <div className="grid grid-cols-6 p-4 border-b bg-[#F9F9FC]">
          <div className="col-span-1">User</div>
          <div className="col-span-1">Date</div>
          <div className="col-span-1">Coin</div>
          <div className="col-span-1">Top up amount</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Info</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y">
          {/* Row 1 */}
          {currentTopups.map(({ coin, status, amount, user, _id, createdAt }) => (
            <div key={_id} className={`grid grid-cols-6 p-4 items-center ${hideInfo.includes(_id) ? 'opacity-30' : 'opacity-100'} transition-opacity duration-200`}>
              <div className="col-span-1 flex items-center gap-2">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="44"
                    height="44"
                    rx="8"
                    fill="url(#pattern0_214_30397)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_214_30397"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        href="#image0_214_30397"
                        transform="scale(0.0025)"
                      />
                    </pattern>
                  </defs>
                </svg>

                    <div>
                      <p className="font-medium">{getUserById(user)}</p>
                      <p className="text-sm text-gray-500">{getDate(createdAt)}</p>
                    </div>
                  </div>
                  <div className="col-span-1">{getDate(createdAt)}</div>
                  <div className="col-span-1 text-gray-800">{getCoinById(coin)?.name}</div>
                  <div className="col-span-1 font-semibold text-orange-500">{amount} {getCoinById(coin)?.name}</div>
                  <div onClick={() => open({ coin, status, amount, user, _id, createdAt })} className="col-span-1 flex border px-2 items-center w-[160px] py-1 rounded-lg">

                    {
                      status === 'REFUSED' ? (
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 12C3.4362 12 0.75 9.3138 0.75 6C0.75 2.6862 3.4362 0 6.75 0C10.0638 0 12.75 2.6862 12.75 6C12.75 9.3138 10.0638 12 6.75 12ZM6.75 5.1516L5.0532 3.4542L4.2042 4.3032L5.9016 6L4.2042 7.6968L5.0532 8.5458L6.75 6.8484L8.4468 8.5458L9.2958 7.6968L7.5984 6L9.2958 4.3032L8.4468 3.4542L6.75 5.1516Z" fill="#DF1C41" />
                        </svg>
                      ) : status === 'APPROVED' ? (
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.75 12C3.4362 12 0.75 9.3138 0.75 6C0.75 2.6862 3.4362 0 6.75 0C10.0638 0 12.75 2.6862 12.75 6C12.75 9.3138 10.0638 12 6.75 12ZM6.1518 8.4L10.3938 4.1574L9.5454 3.309L6.1518 6.7032L4.4544 5.0058L3.606 5.8542L6.1518 8.4Z" fill="#38C793" />
                        </svg>

                  ) : (
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.75 12C3.4362 12 0.75 9.3138 0.75 6C0.75 2.6862 3.4362 0 6.75 0C10.0638 0 12.75 2.6862 12.75 6C12.75 9.3138 10.0638 12 6.75 12ZM7.35 6V3H6.15V7.2H9.75V6H7.35Z"
                        fill="#F27B2C"
                      />
                    </svg>
                  )}

                <span className="  rounded-full text-sm ml-[7px]">
                  {status}
                </span>
              </div>
              <div className="col-span-1">
                <button onClick={() => toggleRowInfo(_id)} className="text-gray-400 hover:text-gray-600">
                  {hideInfo.includes(_id) ? (
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.4855 6.13794C18.1725 3.93894 15.2254 0.25 10.2504 0.25C5.27536 0.25 2.32825 3.93894 1.01525 6.13794C0.32825 7.28594 0.32825 8.71306 1.01525 9.86206C2.32825 12.0611 5.27536 15.75 10.2504 15.75C15.2254 15.75 18.1725 12.0611 19.4855 9.86206C20.1725 8.71306 20.1725 7.28694 19.4855 6.13794ZM18.1984 9.09204C17.0484 11.018 14.4854 14.25 10.2504 14.25C6.01536 14.25 3.45236 11.019 2.30236 9.09204C1.90036 8.41804 1.90036 7.58098 2.30236 6.90698C3.45236 4.98098 6.01536 1.74902 10.2504 1.74902C14.4854 1.74902 17.0484 4.97998 18.1984 6.90698C18.6014 7.58198 18.6014 8.41804 18.1984 9.09204Z" fill="#A0AEC0"/>
                    </svg>
                  ) : (
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.4855 6.13794C18.1725 3.93894 15.2254 0.25 10.2504 0.25C5.27536 0.25 2.32825 3.93894 1.01525 6.13794C0.32825 7.28594 0.32825 8.71306 1.01525 9.86206C2.32825 12.0611 5.27536 15.75 10.2504 15.75C15.2254 15.75 18.1725 12.0611 19.4855 9.86206C20.1725 8.71306 20.1725 7.28694 19.4855 6.13794ZM18.1984 9.09204C17.0484 11.018 14.4854 14.25 10.2504 14.25C6.01536 14.25 3.45236 11.019 2.30236 9.09204C1.90036 8.41804 1.90036 7.58098 2.30236 6.90698C3.45236 4.98098 6.01536 1.74902 10.2504 1.74902C14.4854 1.74902 17.0484 4.97998 18.1984 6.90698C18.6014 7.58198 18.6014 8.41804 18.1984 9.09204ZM10.2504 3.75C7.90636 3.75 6.00036 5.657 6.00036 8C6.00036 10.343 7.90636 12.25 10.2504 12.25C12.5944 12.25 14.5004 10.343 14.5004 8C14.5004 5.657 12.5944 3.75 10.2504 3.75ZM10.2504 10.75C8.73336 10.75 7.50036 9.517 7.50036 8C7.50036 6.483 8.73336 5.25 10.2504 5.25C11.7674 5.25 13.0004 6.483 13.0004 8C13.0004 9.517 11.7674 10.75 10.2504 10.75Z" fill="#A0AEC0"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}




        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t">
          <span className="text-sm text-gray-500">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, topups.length)} from {topups.length}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-2 py-1 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              <svg
                width="5"
                height="9"
                viewBox="0 0 5 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75275 7.84436L0.497754 4.58353C0.389108 4.47423 0.328125 4.32639 0.328125 4.17228C0.328125 4.01817 0.389108 3.87032 0.497754 3.76103L3.75275 0.500196C3.83435 0.417929 3.93859 0.361824 4.05219 0.339033C4.16579 0.316242 4.28361 0.327799 4.39062 0.37223C4.49763 0.41666 4.58898 0.491952 4.65303 0.588505C4.71708 0.685058 4.75093 0.798498 4.75025 0.914363V7.43019C4.75093 7.54606 4.71708 7.6595 4.65303 7.75605C4.58898 7.85261 4.49763 7.9279 4.39062 7.97233C4.28361 8.01676 4.16579 8.02832 4.05219 8.00553C3.93859 7.98273 3.83435 7.92663 3.75275 7.84436Z"
                  fill="#1D1F2C"
                />
              </svg>
            </button>
            
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-2 py-1 rounded ${
                  currentPage === number 
                    ? 'bg-gray-900 text-white' 
                    : 'border hover:bg-gray-100'
                }`}
              >
                {number}
              </button>
            ))}

            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-2 py-1 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              <svg
                width="5"
                height="9"
                viewBox="0 0 5 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.25 7.42931V0.91231C0.250025 0.796956 0.28425 0.684199 0.348349 0.588293C0.412448 0.492388 0.503543 0.417639 0.610118 0.373498C0.716692 0.329358 0.833961 0.317806 0.9471 0.340304C1.06024 0.362801 1.16417 0.418338 1.24575 0.499894L4.50424 3.75839C4.6136 3.86779 4.67503 4.01613 4.67503 4.17081C4.67503 4.32549 4.6136 4.47384 4.50424 4.58323L1.24575 7.84173C1.16417 7.92328 1.06024 7.97882 0.9471 8.00132C0.833961 8.02381 0.716692 8.01226 0.610118 7.96812C0.503543 7.92398 0.412448 7.84923 0.348349 7.75333C0.28425 7.65742 0.250025 7.54466 0.25 7.42931Z"
                  fill="#1D1F2C"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {drawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4">
          <div className="relative w-full max-w-[446px] rounded-3xl bg-white px-3 py-6 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-[18px] font-semibold text-[#000000]">Top up request</h3>
                <p className="text-[14px] font-semibold text-[#77849B]">{getDate(selectedTopup.createdAt)}</p>
              </div>
              <button onClick={open} className="rounded-full p-2 border-2 border-[#C5C5C5] hover:bg-gray-100">
                <svg className="h-6 w-6 text-[#C5C5C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* <pre>{JSON.stringify(selectedTopup, null, 2)}</pre> */}

            <div className="mb-6 text-center">
              <p className="mb-1 text-[14px] text-[#77849B]">Top up amount</p>
              <p className="text-[18px] font-[700] text-balck">{selectedTopup.amount} {getCoinById(selectedTopup.coin)?.name}</p>
            </div>

            <div className="mb-6 rounded-xl mx-auto max-w-[376px] bg-gray-50 p-4">
              <div className="mb-2 flex flex-wrap items-center gap-0.5 justify-center">
                <p className="text-[12px] font-[600] text-[#77849B]">Our Wallet:</p>
                <p className="text-[12px] font-[600] text-black" id="wallet-address">{getCoinWalletAddress(selectedTopup.coin)}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="rounded-[8px] text-black bg-[#EEF4F6] px-3 py-2 font-[500] text-[12px]">ERC-20</span>

              </div>
            </div>

            <div className="space-y-3">
              <button onClick={handleConfirmTopup} className="w-full rounded-[10px] bg-[#48FF2C] text-black py-3 text-center font-semibold  hover:bg-green-400  ">
                Confirm top up
              </button>
              <button onClick={handleRefuseTopup} className="w-full rounded-[10px] bg-[#FF5A2C] py-3 text-center font-semibold text-white hover:bg-red-500 transition-colors">
                Refuse
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StakingAssets;
