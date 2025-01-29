import React from 'react'

const UserDetail = () => {
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
        <div className="gap-6 bg-white w-full rounded-2xl grid grid-cols-1 sm:grid-cols-2 p-6 mt-4">
          <div className="  flex flex-col md:border-r-2  border-gray-200 sm:ml-5  lg:mr-2 ">
            <div className="flex justify-between flex-wrap ">
              <div className="w-12 h-12 bg-[#a8e7c4] rounded-full flex items-center justify-center">
                  <span className=" text-[48px]"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4889 3.05392C7.37598 2.52695 6.62402 2.52694 6.5111 3.05393L5.31658 8.62837C5.02017 10.0116 3.79778 10.9998 2.38317 10.9998H1C0.447715 10.9998 0 10.5521 0 9.99978C0 9.44749 0.447715 8.99978 1 8.99978H2.38317C2.85471 8.99978 3.26217 8.67038 3.36097 8.20931L4.55549 2.63487C5.12011 -2.21729e-05 8.87988 -4.64916e-05 9.44451 2.63487L12.5111 16.9456C12.624 17.4726 13.376 17.4726 13.4889 16.9456L14.6834 11.3712C14.9798 9.98798 16.2022 8.99978 17.6168 8.99978H19C19.5523 8.99978 20 9.44749 20 9.99978C20 10.5521 19.5523 10.9998 19 10.9998H17.6168C17.1453 10.9998 16.7378 11.3292 16.639 11.7902L15.4445 17.3647C14.8799 19.9996 11.1201 19.9996 10.5555 17.3647L7.4889 3.05392Z" fill="#1A1D1F"/>
        </svg>
                  </span>
              </div>
              <div className="">
              <button className="flex gap-2 py-2.5 mr-4 px-4 justify-center text-[14px] items-center cursor-pointer rounded-[10px] text-white bg-[#1C57D4] ">
                <span >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z" fill="white"/>
        </svg>
                </span>
                Add balance
              </button>
              </div>
              </div>
              <h3 className="text-gray-600 mt-4 text-[13px]  flex gap-1 font-semibold">Total balance <span><svg className="w-3 mt-[5px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6668 7.00016C13.6668 10.6821 10.6821 13.6668 7.00016 13.6668C3.31826 13.6668 0.333496 10.6821 0.333496 7.00016C0.333496 3.31826 3.31826 0.333496 7.00016 0.333496C10.6821 0.333496 13.6668 3.31826 13.6668 7.00016ZM7.00016 6.3335C7.36835 6.3335 7.66683 6.63197 7.66683 7.00016V10.3341C7.66683 10.7023 7.36835 11.0008 7.00016 11.0008C6.63197 11.0008 6.3335 10.7023 6.3335 10.3341V7.00016C6.3335 6.63197 6.63197 6.3335 7.00016 6.3335ZM7.00016 5.00016C7.36835 5.00016 7.66683 4.70169 7.66683 4.3335C7.66683 3.96531 7.36835 3.66683 7.00016 3.66683C6.63197 3.66683 6.3335 3.96531 6.3335 4.3335C6.3335 4.70169 6.63197 5.00016 7.00016 5.00016Z" fill="#6F767E"/>
        </svg>
              </span></h3>
              <p className="text-[32px] font-[600] mt-1 text-[black]">245 000 USDT</p>
             
          </div>

          <div className="  flex flex-col  sm:ml-6 ">
              <div className="w-12 h-12 bg-[#CABDFF] rounded-full flex items-center justify-center">
                  <span className=" text-[48px]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 8.08392C8.16919 8.22435 7.37341 8.53889 6.66658 9.01118C5.67989 9.67047 4.91085 10.6075 4.45673 11.7039C4.0026 12.8003 3.88378 14.0067 4.11529 15.1705C4.3468 16.3344 4.91825 17.4035 5.75736 18.2426C6.59648 19.0818 7.66558 19.6532 8.82946 19.8847C9.99335 20.1162 11.1997 19.9974 12.2961 19.5433C13.3925 19.0892 14.3295 18.3201 14.9888 17.3334C15.4611 16.6266 15.7757 15.8308 15.9161 15H10C9.73479 15 9.48043 14.8946 9.2929 14.7071C9.10536 14.5196 9 14.2652 9 14V8.08392ZM5.55544 7.34824C6.87104 6.46919 8.41775 6 10 6C10.5523 6 11 6.44772 11 7V13H17C17.5523 13 18 13.4477 18 14C18 15.5823 17.5308 17.129 16.6518 18.4446C15.7727 19.7602 14.5233 20.7855 13.0615 21.391C11.5997 21.9965 9.99113 22.155 8.43928 21.8463C6.88743 21.5376 5.46197 20.7757 4.34315 19.6569C3.22433 18.538 2.4624 17.1126 2.15372 15.5607C1.84504 14.0089 2.00347 12.4003 2.60897 10.9385C3.21447 9.47672 4.23985 8.22729 5.55544 7.34824Z" fill="#1A1D1F"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 2.29289C13.4804 2.10536 13.7348 2 14 2C16.1217 2 18.1566 2.84285 19.6569 4.34314C21.1571 5.84344 22 7.87827 22 10C22 10.5523 21.5523 11 21 11L14 11C13.7348 11 13.4804 10.8946 13.2929 10.7071C13.1054 10.5196 13 10.2652 13 10V3C13 2.73478 13.1054 2.48043 13.2929 2.29289ZM15 4.08389V9L19.9161 9C19.7098 7.77969 19.1293 6.64405 18.2426 5.75736C17.3559 4.87067 16.2203 4.29016 15 4.08389Z" fill="#1A1D1F"/>
        </svg>

              </span>
              </div>
              <h3 className="text-gray-600 mt-4 text-[13px]  flex gap-1 font-semibold">Staked <span><svg className="w-3 mt-[5px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6668 7.00016C13.6668 10.6821 10.6821 13.6668 7.00016 13.6668C3.31826 13.6668 0.333496 10.6821 0.333496 7.00016C0.333496 3.31826 3.31826 0.333496 7.00016 0.333496C10.6821 0.333496 13.6668 3.31826 13.6668 7.00016ZM7.00016 6.3335C7.36835 6.3335 7.66683 6.63197 7.66683 7.00016V10.3341C7.66683 10.7023 7.36835 11.0008 7.00016 11.0008C6.63197 11.0008 6.3335 10.7023 6.3335 10.3341V7.00016C6.3335 6.63197 6.63197 6.3335 7.00016 6.3335ZM7.00016 5.00016C7.36835 5.00016 7.66683 4.70169 7.66683 4.3335C7.66683 3.96531 7.36835 3.66683 7.00016 3.66683C6.63197 3.66683 6.3335 3.96531 6.3335 4.3335C6.3335 4.70169 6.63197 5.00016 7.00016 5.00016Z" fill="#6F767E"/>
        </svg>
              </span></h3>
              <p className="text-[32px] font-[600] mt-1 text-[black]">18,765 USDT</p>
             
          </div>

          
      </div>


      <div className="grid sm:grid-cols-2 grid-cols-1 gap-3  mt-[20px]">

      <div className="rounded-[18px] bg-white py-5 px-5 ">
        <div className=" items-center gap-4">
          
          <div className="flex justify-between gap-2">
          <div className="flex gap-2 items-center">
          <div className="rounded-full p-1 bg-[#FFFFFF] border border-[#DCDCDC] ">
            <svg width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9973 2.2334L11.7729 2.70133V16.2783L11.9973 16.4157L22.2607 12.6905L11.9973 2.2334Z" fill="#343434"/>
          <path d="M11.9975 2.2334L1.73389 12.6905L11.9975 16.4157V9.82584V2.2334Z" fill="#8C8C8C"/>
          <path d="M11.9975 17.6086L11.8711 17.7033V22.5396L11.9975 22.7662L22.2672 13.8853L11.9975 17.6086Z" fill="#3C3C3B"/>
          <path d="M11.9975 22.7662V17.6086L1.73389 13.8853L11.9975 22.7662Z" fill="#8C8C8C"/>
          <path d="M11.9976 16.4156L22.261 12.6903L11.9976 9.82568V16.4156Z" fill="#141414"/>
          <path d="M1.73389 12.6903L11.9975 16.4156V9.82568L1.73389 12.6903Z" fill="#393939"/>
        </svg>

            
          </div>
          <h3 className="font-[700] text-[18px] text-[#000000]">Ethereum (ETH)</h3>
          </div>
          <div className="mt-2 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9441 3.28406L16.7161 1.05603C16.1951 0.536033 15.5441 0.249003 14.7681 0.250003C14.0321 0.251003 13.341 0.539061 12.823 1.06006L0.468994 13.471C0.327994 13.6119 0.25 13.802 0.25 14V19C0.25 19.414 0.586 19.75 1 19.75H6C6.198 19.75 6.38905 19.671 6.52905 19.532L18.9399 7.177C19.4609 6.658 19.749 5.96706 19.75 5.23206C19.751 4.49606 19.4651 3.80406 18.9441 3.28406ZM5.68994 18.25H1.75V14.3101L10.7429 5.276L14.7251 9.25696L5.68994 18.25ZM17.8821 6.11402L15.7881 8.19898L11.801 4.21302L13.886 2.11804C14.122 1.88104 14.436 1.751 14.771 1.75H14.772C15.106 1.75 15.42 1.87997 15.657 2.11597L17.885 4.344C18.121 4.581 18.251 4.89498 18.251 5.22998C18.25 5.56398 18.1191 5.87802 17.8821 6.11402Z" fill="#B9BFCB"/>
        </svg>

          </div>
          </div>
          
          <div>
            
            <div className="mt-1">
              <p className="text-[13px] text-[#6F767E] font-[600] mt-2">Staked</p>
              <p className="text-[24px] font-[600] text-[#1A1D1F]">324 ETH</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" rounded-[18px] bg-white py-5 px-5 ">
        <div className=" items-center gap-4">
          
          <div className="flex justify-between gap-2">
          <div className="flex gap-2 items-center">
          <div className="rounded-full p-1 bg-[#F7931A] border border-[#DCDCDC] ">
            <svg width="26" height="26" className="" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9478 10.4522C20.3638 7.72025 18.2459 6.2517 15.3498 5.27203L16.2894 1.5713L13.9955 1.00997L13.0809 4.61326C12.4779 4.46555 11.8586 4.32638 11.2431 4.1884L12.1643 0.56133L9.8719 0L8.93189 3.69952C8.43286 3.58794 7.94273 3.47766 7.4672 3.36146L7.46986 3.34982L4.3066 2.57405L3.69641 4.98012C3.69641 4.98012 5.39825 5.36324 5.36238 5.38682C6.29126 5.6145 6.45924 6.21838 6.43134 6.69703L5.36116 10.913C5.42512 10.929 5.50808 10.9521 5.59963 10.9882C5.5231 10.9695 5.44167 10.9491 5.35717 10.9293L3.85713 16.8353C3.74361 17.1124 3.45548 17.5284 2.80605 17.3704C2.82904 17.4031 1.13885 16.9618 1.13885 16.9618L0 19.5405L2.98506 20.2713C3.54039 20.4081 4.08457 20.5512 4.62049 20.6857L3.67127 24.4289L5.96246 24.9902L6.90248 21.2868C7.5284 21.4537 8.13584 21.6076 8.7305 21.7527L7.79365 25.4387L10.0876 26L11.0367 22.2639C14.9482 22.9909 17.8893 22.6977 19.1273 19.2232C20.1248 16.4258 19.0776 14.8122 17.0198 13.76C18.5186 13.4205 19.6476 12.4524 19.9486 10.4525L19.9479 10.452L19.9478 10.4522ZM14.7069 17.6697C13.998 20.4671 9.20204 18.9549 7.64713 18.5757L8.90675 13.6166C10.4616 13.9978 15.4477 14.7522 14.707 17.6697H14.7069ZM15.4163 10.4117C14.7696 12.9562 10.7779 11.6635 9.48302 11.3465L10.625 6.84895C11.9199 7.16594 16.0899 7.75757 15.4165 10.4117H15.4163Z" fill="white"/>
        </svg>

            
          </div>
          <h3 className="font-[700] text-[18px] text-[#000000]">Bitcoin (BTC)
        </h3>
          </div>
          <div className="mt-2 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9441 3.28406L16.7161 1.05603C16.1951 0.536033 15.5441 0.249003 14.7681 0.250003C14.0321 0.251003 13.341 0.539061 12.823 1.06006L0.468994 13.471C0.327994 13.6119 0.25 13.802 0.25 14V19C0.25 19.414 0.586 19.75 1 19.75H6C6.198 19.75 6.38905 19.671 6.52905 19.532L18.9399 7.177C19.4609 6.658 19.749 5.96706 19.75 5.23206C19.751 4.49606 19.4651 3.80406 18.9441 3.28406ZM5.68994 18.25H1.75V14.3101L10.7429 5.276L14.7251 9.25696L5.68994 18.25ZM17.8821 6.11402L15.7881 8.19898L11.801 4.21302L13.886 2.11804C14.122 1.88104 14.436 1.751 14.771 1.75H14.772C15.106 1.75 15.42 1.87997 15.657 2.11597L17.885 4.344C18.121 4.581 18.251 4.89498 18.251 5.22998C18.25 5.56398 18.1191 5.87802 17.8821 6.11402Z" fill="#B9BFCB"/>
        </svg>

          </div>
          </div>
          
          <div>
            
            <div className="mt-1">
              <p className="text-[13px] text-[#6F767E] font-[600] mt-2">Staked</p>
              <p className="text-[24px] font-[600] text-[#1A1D1F]">0.345 BTC

        </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[18px] bg-white py-5 px-5 ">
        <div className=" items-center gap-4">
          
          <div className="flex justify-between gap-2">
          <div className="flex gap-2 items-center">
        <div className="rounded-full p-1 bg-[#FFFFFF] border border-[#DCDCDC] ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#51af95" d="M18.754 10.518c0 .625-2.238 1.148-5.238 1.28l.002.001a23 23 0 0 1-1.5.033c-.779 0-1.33-.023-1.524-.032c-3.006-.133-5.25-.656-5.25-1.282s2.244-1.15 5.25-1.284v2.044c.196.015.759.048 1.537.048c.933 0 1.4-.04 1.485-.047V9.236c3 .133 5.238.657 5.238 1.282m5.19.546L12.124 22.39a.18.18 0 0 1-.249 0L.056 11.064a.18.18 0 0 1-.038-.208l4.376-9.192a.18.18 0 0 1 .163-.103h14.888a.18.18 0 0 1 .16.103l4.377 9.192a.18.18 0 0 1-.038.208m-4.478-.404c0-.806-2.552-1.48-5.947-1.637V7.195h4.186v-2.79H6.308v2.79h4.185v1.829c-3.402.156-5.96.83-5.96 1.637c0 .808 2.558 1.48 5.96 1.638v5.862h3.025v-5.864c3.394-.157 5.948-.83 5.948-1.637"/></svg>


            
          </div>
          <h3 className="font-[700] text-[18px] text-[#000000]">Tether (USDT)</h3>
          </div>
          <div className="mt-2 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9441 3.28406L16.7161 1.05603C16.1951 0.536033 15.5441 0.249003 14.7681 0.250003C14.0321 0.251003 13.341 0.539061 12.823 1.06006L0.468994 13.471C0.327994 13.6119 0.25 13.802 0.25 14V19C0.25 19.414 0.586 19.75 1 19.75H6C6.198 19.75 6.38905 19.671 6.52905 19.532L18.9399 7.177C19.4609 6.658 19.749 5.96706 19.75 5.23206C19.751 4.49606 19.4651 3.80406 18.9441 3.28406ZM5.68994 18.25H1.75V14.3101L10.7429 5.276L14.7251 9.25696L5.68994 18.25ZM17.8821 6.11402L15.7881 8.19898L11.801 4.21302L13.886 2.11804C14.122 1.88104 14.436 1.751 14.771 1.75H14.772C15.106 1.75 15.42 1.87997 15.657 2.11597L17.885 4.344C18.121 4.581 18.251 4.89498 18.251 5.22998C18.25 5.56398 18.1191 5.87802 17.8821 6.11402Z" fill="#B9BFCB"/>
        </svg>

          </div>
          </div>
          
          <div>
            
            <div className="mt-1">
              <p className="text-[13px] text-[#6F767E] font-[600] mt-2">Staked</p>
              <p className="text-[24px] font-[600] text-[#1A1D1F]">36,456.00 USDT

        </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" rounded-[18px] bg-white py-5 px-5 ">
        <div className=" items-center gap-4">
          
          <div className="flex justify-between gap-2">
          <div className="flex gap-2 items-center">
        <div className="rounded-full p-1 bg-[#c2a634] border border-[#DCDCDC] ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M5.5 10.5V5.415A1.5 1.5 0 0 1 6 2.5h6a9.5 9.5 0 0 1 0 19H6a1.5 1.5 0 0 1-.5-2.915V13.5H4a1.5 1.5 0 0 1 0-3zm3 3v5H12a6.5 6.5 0 1 0 0-13H8.5v5H13a1.5 1.5 0 0 1 0 3z"/></g></svg>
          
        </div>
        <h3 className="font-[700] text-[18px] text-[#000000]">Dogecoin</h3>
          </div>
          <div className="mt-2 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9441 3.28406L16.7161 1.05603C16.1951 0.536033 15.5441 0.249003 14.7681 0.250003C14.0321 0.251003 13.341 0.539061 12.823 1.06006L0.468994 13.471C0.327994 13.6119 0.25 13.802 0.25 14V19C0.25 19.414 0.586 19.75 1 19.75H6C6.198 19.75 6.38905 19.671 6.52905 19.532L18.9399 7.177C19.4609 6.658 19.749 5.96706 19.75 5.23206C19.751 4.49606 19.4651 3.80406 18.9441 3.28406ZM5.68994 18.25H1.75V14.3101L10.7429 5.276L14.7251 9.25696L5.68994 18.25ZM17.8821 6.11402L15.7881 8.19898L11.801 4.21302L13.886 2.11804C14.122 1.88104 14.436 1.751 14.771 1.75H14.772C15.106 1.75 15.42 1.87997 15.657 2.11597L17.885 4.344C18.121 4.581 18.251 4.89498 18.251 5.22998C18.25 5.56398 18.1191 5.87802 17.8821 6.11402Z" fill="#B9BFCB"/>
        </svg>

          </div>
          </div>
          
          <div>
            
            <div className="mt-1">
              <p className="text-[13px] text-[#6F767E] font-[600] mt-2">Staked</p>
              <p className="text-[24px] font-[600] text-[#1A1D1F]">36,456.00 DOGE</p>
            </div>
          </div>
        </div>
      </div>

      </div>
      </div>


      </div>
    


    
  )
}

export default UserDetail