import React, { useState } from "react";

const NewCoin = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  if (!isModalOpen) {
    return null;
  }
  return (
    <div
      id="modalOverlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      {/* Modal Content */}
      <div className="bg-white text-[black] rounded-2xl w-[380px] p-6 relative">
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Add new coin</h2>
          <button
            className="text-gray-400 hover:text-gray-600 p-1"
            onClick={() => setIsModalOpen(false)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="#8D8D8D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Coin Logo Upload Section */}
        <div className="mb-6 flex">
          <div>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="64" height="64" rx="32" fill="#E2E4E9" />
              <g filter="url(#filter0_i_2005_633)">
                <g clip-path="url(#clip0_2005_633)">
                  <rect width="64" height="64" rx="32" fill="#E2E4E9" />
                  <g filter="url(#filter1_di_2005_633)">
                    <ellipse
                      cx="32"
                      cy="60.8001"
                      rx="25.6"
                      ry="19.2"
                      fill="url(#paint0_radial_2005_633)"
                      shape-rendering="crispEdges"
                    />
                    <path
                      d="M57.1 60.8001C57.1 65.9094 54.3399 70.5731 49.802 73.9766C45.2638 77.3801 38.9715 79.5001 32 79.5001C25.0285 79.5001 18.7362 77.3801 14.1981 73.9766C9.66011 70.5731 6.90002 65.9094 6.90002 60.8001C6.90002 55.6908 9.66011 51.0271 14.1981 47.6236C18.7362 44.2201 25.0285 42.1001 32 42.1001C38.9715 42.1001 45.2638 44.2201 49.802 47.6236C54.3399 51.0271 57.1 55.6908 57.1 60.8001Z"
                      stroke="url(#paint1_radial_2005_633)"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter2_di_2005_633)">
                    <circle
                      cx="32"
                      cy="25.5998"
                      r="12.8"
                      fill="url(#paint2_radial_2005_633)"
                      shape-rendering="crispEdges"
                    />
                    <circle
                      cx="32"
                      cy="25.5998"
                      r="12.3"
                      stroke="url(#paint3_radial_2005_633)"
                      shape-rendering="crispEdges"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_i_2005_633"
                  x="0"
                  y="-8"
                  width="64"
                  height="72"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-8" />
                  <feGaussianBlur stdDeviation="8" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.7712 0 0 0 0 0.78 0 0 0 0 0.7888 0 0 0 0.48 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_2005_633"
                  />
                </filter>
                <filter
                  id="filter1_di_2005_633"
                  x="2.40002"
                  y="33.6001"
                  width="59.2"
                  height="54.3999"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2005_633"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2005_633"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-8" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_2005_633"
                  />
                </filter>
                <filter
                  id="filter2_di_2005_633"
                  x="15.2"
                  y="4.7998"
                  width="33.6"
                  height="41.6001"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.541176 0 0 0 0 0.560784 0 0 0 0 0.576471 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2005_633"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2005_633"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-8" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow_2005_633"
                  />
                </filter>
                <radialGradient
                  id="paint0_radial_2005_633"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(32 41.6001) rotate(90) scale(38.4 51.2)"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_2005_633"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(32 41.6001) rotate(90) scale(38.4 51.2)"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial_2005_633"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(32 12.7998) rotate(90) scale(25.6)"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint3_radial_2005_633"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(32 12.7998) rotate(90) scale(25.6)"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <clipPath id="clip0_2005_633">
                  <rect width="64" height="64" rx="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="ml-[10px]">
            <p className="font-medium text-sm mb-1">Coin Logo</p>
            <p className="text-xs text-gray-500 mb-2">
              Min 400x400px, PNG, JPEG or SVG
            </p>
            <div className="flex items-center ">
              <input
                type="file"
                id="logoUpload"
                className="hidden"
                accept="image/*"
              />
              <button
                onClick={() => document.getElementById("logoUpload").click()}
                className="px-4 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Upload
              </button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Coin name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">
              Wallet address
            </label>
            <input
              type="text"
              placeholder="Enter address"
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">APY</label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center border rounded-lg">
                <input
                  type="number"
                  defaultValue="14"
                  className="w-[75%] px-2 py-2.5 text-sm  border-gray-200  focus:outline-none "
                />
                <span className="text-sm text-gray-500">days</span>
              </div>
              <div className="flex items-center border rounded-lg">
                <input
                  type="number"
                  defaultValue="12.2"
                  className="w-[85%] px-2  py-2.5 text-sm  border-gray-200 rounded-lg focus:outline-none  "
                />
                <span className="text-sm text-gray-500 ">%</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3.25H15.441C14.54 3.25 14.502 3.136 14.255 2.396L14.053 1.789C13.746 0.869001 12.889 0.25 11.919 0.25H8.08099C7.11099 0.25 6.253 0.868001 5.947 1.789L5.745 2.396C5.498 3.137 5.46 3.25 4.559 3.25H1C0.586 3.25 0.25 3.586 0.25 4C0.25 4.414 0.586 4.75 1 4.75H2.298L3.065 16.249C3.213 18.474 4.57701 19.75 6.80701 19.75H13.194C15.423 19.75 16.787 18.474 16.936 16.249L17.703 4.75H19C19.414 4.75 19.75 4.414 19.75 4C19.75 3.586 19.414 3.25 19 3.25ZM7.37 2.263C7.473 1.956 7.75799 1.75 8.08099 1.75H11.919C12.242 1.75 12.528 1.956 12.63 2.263L12.832 2.87C12.876 3.001 12.92 3.128 12.968 3.25H7.03C7.078 3.127 7.12301 3 7.16701 2.87L7.37 2.263ZM15.438 16.149C15.343 17.582 14.629 18.25 13.193 18.25H6.806C5.37 18.25 4.657 17.583 4.561 16.149L3.801 4.75H4.558C4.683 4.75 4.787 4.737 4.899 4.729C4.933 4.734 4.964 4.75 4.999 4.75H14.999C15.035 4.75 15.065 4.734 15.099 4.729C15.211 4.737 15.315 4.75 15.44 4.75H16.197L15.438 16.149ZM12.75 9V14C12.75 14.414 12.414 14.75 12 14.75C11.586 14.75 11.25 14.414 11.25 14V9C11.25 8.586 11.586 8.25 12 8.25C12.414 8.25 12.75 8.586 12.75 9ZM8.75 9V14C8.75 14.414 8.414 14.75 8 14.75C7.586 14.75 7.25 14.414 7.25 14V9C7.25 8.586 7.586 8.25 8 8.25C8.414 8.25 8.75 8.586 8.75 9Z"
                fill="#AFAFAF"
              />
            </svg>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Duration
                </label>
                <input
                  type="text"
                  placeholder="Enter duration"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Percentage
                </label>
                <input
                  type="text"
                  placeholder="Enter percentage"
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          <button className="w-full flex items-center justify-center space-x-2 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.33334V12.6667"
                stroke="#8D8D8D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33334 8H12.6667"
                stroke="#8D8D8D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-gray-600">Add field</span>
          </button>
        </div>

        {/* Create Button */}
        <button className="w-full mt-6 py-3 bg-[#00FF29] text-black rounded-lg hover:bg-[#00E025] transition-colors text-sm font-medium">
          Create coin
        </button>
      </div>
    </div>
  );
};

export default NewCoin;
