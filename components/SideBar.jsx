import React, { useState } from "react";
import main from '/main.svg'
import users from '/users.svg'
import transactions from '/transactions.svg'
import coins from '/coin.svg'

const SideBar = () => {
    const [activeLink, setActiveLink] = useState(null);

  const links = [
    {
      svg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.8335 6.9585C2.111 6.9585 0.708496 5.55683 0.708496 3.8335C0.708496 2.11016 2.111 0.708496 3.8335 0.708496C5.556 0.708496 6.9585 2.11016 6.9585 3.8335C6.9585 5.55683 5.556 6.9585 3.8335 6.9585ZM3.8335 1.9585C2.80016 1.9585 1.9585 2.79933 1.9585 3.8335C1.9585 4.86766 2.80016 5.7085 3.8335 5.7085C4.86683 5.7085 5.7085 4.86766 5.7085 3.8335C5.7085 2.79933 4.86683 1.9585 3.8335 1.9585ZM12.1668 6.9585C10.4443 6.9585 9.04183 5.55683 9.04183 3.8335C9.04183 2.11016 10.4443 0.708496 12.1668 0.708496C13.8893 0.708496 15.2918 2.11016 15.2918 3.8335C15.2918 5.55683 13.8893 6.9585 12.1668 6.9585ZM12.1668 1.9585C11.1335 1.9585 10.2918 2.79933 10.2918 3.8335C10.2918 4.86766 11.1335 5.7085 12.1668 5.7085C13.2002 5.7085 14.0418 4.86766 14.0418 3.8335C14.0418 2.79933 13.2002 1.9585 12.1668 1.9585ZM3.8335 15.2918C2.111 15.2918 0.708496 13.8902 0.708496 12.1668C0.708496 10.4435 2.111 9.04183 3.8335 9.04183C5.556 9.04183 6.9585 10.4435 6.9585 12.1668C6.9585 13.8902 5.556 15.2918 3.8335 15.2918ZM3.8335 10.2918C2.80016 10.2918 1.9585 11.1327 1.9585 12.1668C1.9585 13.201 2.80016 14.0418 3.8335 14.0418C4.86683 14.0418 5.7085 13.201 5.7085 12.1668C5.7085 11.1327 4.86683 10.2918 3.8335 10.2918ZM12.1668 15.2918C10.4443 15.2918 9.04183 13.8902 9.04183 12.1668C9.04183 10.4435 10.4443 9.04183 12.1668 9.04183C13.8893 9.04183 15.2918 10.4435 15.2918 12.1668C15.2918 13.8902 13.8893 15.2918 12.1668 15.2918ZM12.1668 10.2918C11.1335 10.2918 10.2918 11.1327 10.2918 12.1668C10.2918 13.201 11.1335 14.0418 12.1668 14.0418C13.2002 14.0418 14.0418 13.201 14.0418 12.1668C14.0418 11.1327 13.2002 10.2918 12.1668 10.2918Z" fill="currentColor"/>
</svg>
`,
      label: "Main",
    },
    {
      svg: `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00737 7.95833C5.05403 7.95833 3.4657 6.36917 3.4657 4.41667C3.4657 2.46417 5.05403 0.875 7.00737 0.875C8.9607 0.875 10.549 2.46417 10.549 4.41667C10.549 6.36917 8.9607 7.95833 7.00737 7.95833ZM7.00737 2.125C5.7432 2.125 4.7157 3.1525 4.7157 4.41667C4.7157 5.68083 5.7432 6.70833 7.00737 6.70833C8.27153 6.70833 9.29903 5.68083 9.29903 4.41667C9.29903 3.1525 8.2707 2.125 7.00737 2.125ZM10.3306 17.125H3.66905C1.65238 17.125 0.541504 16.0209 0.541504 14.0159C0.541504 11.7984 1.7965 9.20833 5.33317 9.20833H8.6665C12.2032 9.20833 13.4582 11.7975 13.4582 14.0159C13.4582 16.0209 12.3473 17.125 10.3306 17.125ZM5.33317 10.4583C2.04734 10.4583 1.7915 13.1809 1.7915 14.0159C1.7915 15.3192 2.35321 15.875 3.66905 15.875H10.3306C11.6465 15.875 12.2082 15.3192 12.2082 14.0159C12.2082 13.1817 11.9523 10.4583 8.6665 10.4583H5.33317Z" fill="currentColor"/>
</svg>
`,
      label: "Users",
    },
    {
      svg: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.50072 8.83337C1.47822 8.83337 1.45494 8.83252 1.4316 8.83002C1.08827 8.79252 0.840768 8.48333 0.878268 8.14083C1.18077 5.37666 2.84908 2.99586 5.34075 1.77252C5.53492 1.67752 5.76408 1.68918 5.94658 1.80334C6.12991 1.91751 6.24158 2.11831 6.24158 2.33415V4.87585C6.24158 5.22085 5.96158 5.50085 5.61658 5.50085C5.27158 5.50085 4.99158 5.22085 4.99158 4.87585V3.42505C3.38908 4.54005 2.33822 6.2908 2.12155 8.27663C2.08655 8.5958 1.81489 8.83337 1.50072 8.83337ZM16.5674 9.1708C16.2274 9.13413 15.9166 9.38085 15.8791 9.72418C15.6616 11.71 14.6116 13.4609 13.0082 14.5759V13.125C13.0082 12.78 12.7282 12.5 12.3832 12.5C12.0382 12.5 11.7582 12.78 11.7582 13.125V15.6667C11.7582 15.8825 11.8699 16.0833 12.0532 16.1975C12.1541 16.26 12.2682 16.2917 12.3832 16.2917C12.4774 16.2917 12.5716 16.2708 12.6591 16.2275C15.1507 15.005 16.8191 12.6242 17.1207 9.85917C17.1591 9.51667 16.9107 9.2083 16.5674 9.1708ZM8.37491 4.83333C8.37491 2.65083 10.1507 0.875 12.3332 0.875C14.5157 0.875 16.2916 2.65083 16.2916 4.83333C16.2916 7.01583 14.5157 8.79167 12.3332 8.79167C10.1507 8.79167 8.37491 7.01583 8.37491 4.83333ZM9.62491 4.83333C9.62491 6.32667 10.8399 7.54167 12.3332 7.54167C13.8266 7.54167 15.0416 6.32667 15.0416 4.83333C15.0416 3.34 13.8266 2.125 12.3332 2.125C10.8399 2.125 9.62491 3.34 9.62491 4.83333ZM9.62491 13.1667C9.62491 15.3492 7.84908 17.125 5.66658 17.125C3.48408 17.125 1.70824 15.3492 1.70824 13.1667C1.70824 10.9842 3.48408 9.20833 5.66658 9.20833C7.84908 9.20833 9.62491 10.9842 9.62491 13.1667ZM8.37491 13.1667C8.37491 11.6733 7.15991 10.4583 5.66658 10.4583C4.17324 10.4583 2.95824 11.6733 2.95824 13.1667C2.95824 14.66 4.17324 15.875 5.66658 15.875C7.15991 15.875 8.37491 14.66 8.37491 13.1667Z" fill="currentColor"/>
</svg>
`,
      label: "Transactions",
    },
    {
      svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.125 11.8908C18.1242 10.2325 16.0142 8.955 13.125 8.79333V4.99166C13.1242 2.83916 10.3 1.875 7.5 1.875C4.7 1.875 1.87583 2.83833 1.875 4.99166V14.175C1.875 16.3275 4.7 17.2917 7.5 17.2917C7.78917 17.2917 8.08584 17.265 8.38084 17.2358C9.45917 17.8383 10.9817 18.125 12.5 18.125C15.2992 18.125 18.125 17.1608 18.125 15.0083V11.8908C18.125 11.8917 18.125 11.8917 18.125 11.8908ZM16.875 11.8925C16.875 12.7742 15.0042 13.76 12.5 13.76C9.99583 13.76 8.125 12.7742 8.125 11.8925C8.125 11.5692 8.38084 11.2325 8.82334 10.935C8.83834 10.9267 8.85002 10.915 8.86419 10.9058C9.63419 10.4058 10.9442 10.025 12.5 10.025C15.0042 10.025 16.875 11.0108 16.875 11.8925ZM11.875 7.94169C11.875 8.31752 11.545 8.63164 11.2308 8.85081C10.0717 8.98831 9.07084 9.31252 8.32001 9.76919C8.05334 9.79169 7.78498 9.80835 7.50081 9.80835C5.14415 9.80835 3.12581 8.78169 3.12581 7.94169V7.06502C4.20998 7.77502 5.85748 8.11 7.50081 8.11C9.14415 8.11 10.7916 7.77502 11.8758 7.06502V7.94169H11.875ZM3.125 9.87417C4.1275 10.5525 5.60334 10.9767 7.07418 11.0467C6.94751 11.3142 6.875 11.5958 6.875 11.8917C6.875 11.8917 6.875 11.8917 6.875 11.8925V12.8992C4.79833 12.74 3.125 11.8242 3.125 11.0592V9.87417ZM7.5 3.125C9.65083 3.125 11.875 3.82336 11.875 4.99252C11.875 6.20586 9.62083 6.86 7.5 6.86C5.37917 6.86 3.125 6.20586 3.125 4.99252C3.125 3.82336 5.34917 3.125 7.5 3.125ZM3.125 14.175V12.9908C4.0825 13.6383 5.47 14.0542 6.875 14.1508V15.0083C6.875 15.3875 6.96667 15.7275 7.12667 16.0342C5.09917 15.9584 3.125 15.2758 3.125 14.175ZM12.5 16.875C11.1508 16.875 9.77334 16.6 8.93417 16.1067C8.43501 15.8133 8.12581 15.4433 8.12581 15.0083V13.8967C9.14081 14.585 10.6958 15.01 12.5008 15.01C14.3058 15.01 15.8608 14.585 16.8758 13.8967V15.0083C16.875 16.1767 14.6508 16.875 12.5 16.875Z" fill="currentColor"/>
</svg>
`,
      label: "Coins",
    },
  ];


  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="w-[280px] fixed left-0 top-0 min-h-screen h-full border-r border-[#E9EAEC] bg-white py-6 px-6">
      <a href="#" className="">
      <svg width="216" height="48" viewBox="0 0 216 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="3.5" width="45" height="41" rx="6" fill="#48FF2C"/>
<circle cx="22.5" cy="24" r="13.5" fill="black"/>
<path d="M28.9722 23.6593L27.0405 23.1075C25.264 22.5996 23.8998 21.236 23.3919 19.4588L22.8401 17.5272C22.753 17.2233 22.2458 17.2233 22.1587 17.5272L21.6069 19.4588C21.0991 21.236 19.7348 22.6003 17.9583 23.1075L16.0267 23.6593C15.8744 23.7025 15.7695 23.842 15.7695 24C15.7695 24.1579 15.8744 24.2968 16.0267 24.3407L17.9583 24.8925C19.7348 25.4004 21.0991 26.7639 21.6069 28.5411L22.1587 30.4727C22.2026 30.625 22.3415 30.7299 22.4994 30.7299C22.6574 30.7299 22.7962 30.625 22.8401 30.4727L23.3919 28.5411C23.8998 26.7639 25.264 25.3996 27.0405 24.8925L28.9722 24.3407C29.1245 24.2975 29.2293 24.1579 29.2293 24C29.2293 23.842 29.1245 23.7032 28.9722 23.6593Z" fill="white"/>
<path d="M71.272 32.788C70.104 32.788 69.04 32.588 68.08 32.188C67.136 31.788 66.384 31.196 65.824 30.412C65.264 29.612 64.968 28.62 64.936 27.436H68.176C68.208 28.22 68.488 28.876 69.016 29.404C69.56 29.932 70.304 30.196 71.248 30.196C72.064 30.196 72.712 30.004 73.192 29.62C73.672 29.236 73.912 28.716 73.912 28.06C73.912 27.724 73.856 27.428 73.744 27.172C73.648 26.916 73.456 26.676 73.168 26.452C72.88 26.228 72.472 26.012 71.944 25.804C71.432 25.58 70.752 25.332 69.904 25.06C68.8 24.692 67.912 24.268 67.24 23.788C66.568 23.308 66.08 22.772 65.776 22.18C65.488 21.572 65.344 20.916 65.344 20.212C65.344 19.156 65.592 18.276 66.088 17.572C66.6 16.852 67.28 16.316 68.128 15.964C68.992 15.596 69.944 15.412 70.984 15.412C72.04 15.412 72.992 15.596 73.84 15.964C74.704 16.332 75.4 16.876 75.928 17.596C76.456 18.316 76.728 19.204 76.744 20.26H73.456C73.44 19.652 73.2 19.124 72.736 18.676C72.288 18.228 71.664 18.004 70.864 18.004C70.224 18.004 69.68 18.172 69.232 18.508C68.784 18.844 68.56 19.34 68.56 19.996C68.56 20.476 68.736 20.884 69.088 21.22C69.456 21.556 69.944 21.852 70.552 22.108C71.176 22.348 71.864 22.604 72.616 22.876C73.032 23.02 73.496 23.204 74.008 23.428C74.536 23.652 75.04 23.956 75.52 24.34C76 24.708 76.392 25.18 76.696 25.756C77.016 26.316 77.176 27.012 77.176 27.844C77.176 28.868 76.912 29.748 76.384 30.484C75.872 31.22 75.168 31.788 74.272 32.188C73.392 32.588 72.392 32.788 71.272 32.788ZM83.8928 32.5C82.6128 32.5 81.6448 32.188 80.9888 31.564C80.3488 30.94 80.0288 30.004 80.0288 28.756V23.164H78.4928V20.596H80.0288V17.692H83.1008V20.596H85.8128V23.164H83.1008V28.78C83.1008 29.228 83.2208 29.532 83.4608 29.692C83.7008 29.852 84.0128 29.932 84.3968 29.932H85.8128V32.5H83.8928ZM91.2749 32.788C90.5709 32.788 89.9149 32.644 89.3069 32.356C88.6989 32.068 88.2029 31.66 87.8189 31.132C87.4509 30.588 87.2669 29.948 87.2669 29.212C87.2669 28.332 87.4829 27.612 87.9149 27.052C88.3469 26.492 88.9389 26.076 89.6909 25.804C90.4589 25.532 91.3149 25.396 92.2589 25.396H95.0909C95.0909 24.852 95.0029 24.396 94.8269 24.028C94.6669 23.66 94.4189 23.38 94.0829 23.188C93.7629 22.98 93.3629 22.876 92.8829 22.876C92.3229 22.876 91.8189 23.004 91.3709 23.26C90.9389 23.5 90.6749 23.908 90.5789 24.484H87.5069C87.5869 23.62 87.8829 22.876 88.3949 22.252C88.9069 21.628 89.5629 21.148 90.3629 20.812C91.1629 20.476 92.0189 20.308 92.9309 20.308C94.0509 20.308 94.9949 20.516 95.7629 20.932C96.5469 21.348 97.1469 21.94 97.5629 22.708C97.9789 23.46 98.1869 24.356 98.1869 25.396V29.02C98.2189 29.372 98.3469 29.612 98.5709 29.74C98.7949 29.868 99.0909 29.932 99.4589 29.932V32.5C98.7069 32.5 98.0749 32.428 97.5629 32.284C97.0669 32.14 96.6589 31.932 96.3389 31.66C96.0189 31.372 95.7469 31.012 95.5229 30.58C95.1549 31.204 94.5789 31.732 93.7949 32.164C93.0269 32.58 92.1869 32.788 91.2749 32.788ZM92.1629 30.316C92.6909 30.316 93.1709 30.196 93.6029 29.956C94.0509 29.716 94.4109 29.38 94.6829 28.948C94.9549 28.516 95.0909 28.02 95.0909 27.46V27.364H92.4509C92.0989 27.364 91.7629 27.42 91.4429 27.532C91.1229 27.628 90.8669 27.788 90.6749 28.012C90.4829 28.22 90.3869 28.508 90.3869 28.876C90.3869 29.372 90.5549 29.74 90.8909 29.98C91.2429 30.204 91.6669 30.316 92.1629 30.316ZM100.939 32.5V15.7H104.011V25.636L107.971 20.596H111.931L106.699 26.572L112.003 32.5H108.043L104.011 27.436V32.5H100.939ZM115.158 19.06C114.614 19.06 114.142 18.868 113.742 18.484C113.358 18.084 113.166 17.612 113.166 17.068C113.166 16.508 113.358 16.036 113.742 15.652C114.142 15.268 114.614 15.076 115.158 15.076C115.718 15.076 116.19 15.268 116.574 15.652C116.958 16.036 117.15 16.508 117.15 17.068C117.15 17.612 116.958 18.084 116.574 18.484C116.19 18.868 115.718 19.06 115.158 19.06ZM113.622 32.5V20.596H116.694V32.5H113.622ZM118.939 32.5V20.596H121.987V21.988C122.403 21.428 122.955 21.012 123.643 20.74C124.347 20.452 125.051 20.308 125.755 20.308C127.131 20.308 128.259 20.756 129.139 21.652C130.019 22.532 130.459 23.812 130.459 25.492V32.5H127.411V25.9C127.411 25.004 127.179 24.284 126.715 23.74C126.267 23.18 125.603 22.9 124.723 22.9C123.843 22.9 123.163 23.18 122.683 23.74C122.219 24.284 121.987 25.004 121.987 25.9V32.5H118.939ZM137.484 38.068C136.396 38.068 135.42 37.948 134.556 37.708C133.692 37.468 133.004 37.076 132.492 36.532C131.996 36.004 131.748 35.308 131.748 34.444C131.748 33.884 131.868 33.396 132.108 32.98C132.348 32.58 132.716 32.228 133.212 31.924C132.796 31.684 132.484 31.38 132.276 31.012C132.068 30.644 131.964 30.22 131.964 29.74C131.964 28.684 132.46 27.868 133.452 27.292C133.1 26.924 132.828 26.508 132.636 26.044C132.444 25.564 132.348 25.068 132.348 24.556C132.348 23.692 132.556 22.948 132.972 22.324C133.388 21.684 133.964 21.188 134.7 20.836C135.436 20.484 136.276 20.308 137.22 20.308C137.908 20.308 138.54 20.404 139.116 20.596H143.388V22.9H141.732C141.828 23.172 141.908 23.444 141.972 23.716C142.052 23.988 142.092 24.268 142.092 24.556C142.092 25.388 141.876 26.124 141.444 26.764C141.012 27.404 140.428 27.908 139.692 28.276C138.972 28.628 138.148 28.804 137.22 28.804C136.82 28.804 136.452 28.772 136.116 28.708C135.78 28.628 135.452 28.508 135.132 28.348C134.78 28.524 134.604 28.804 134.604 29.188C134.604 29.892 135.188 30.244 136.356 30.244H138.54C139.5 30.244 140.316 30.38 140.988 30.652C141.676 30.908 142.196 31.316 142.548 31.876C142.9 32.436 143.076 33.148 143.076 34.012C143.076 34.844 142.828 35.564 142.332 36.172C141.836 36.78 141.164 37.244 140.316 37.564C139.468 37.9 138.524 38.068 137.484 38.068ZM137.484 35.668C138.252 35.668 138.9 35.54 139.428 35.284C139.972 35.044 140.244 34.676 140.244 34.18C140.244 33.236 139.588 32.764 138.276 32.764H136.548C135.908 32.764 135.412 32.884 135.06 33.124C134.724 33.364 134.556 33.716 134.556 34.18C134.556 34.548 134.692 34.836 134.964 35.044C135.236 35.268 135.596 35.428 136.044 35.524C136.492 35.62 136.972 35.668 137.484 35.668ZM137.196 26.404C137.804 26.404 138.3 26.236 138.684 25.9C139.084 25.548 139.284 25.1 139.284 24.556C139.284 24.028 139.084 23.588 138.684 23.236C138.3 22.884 137.804 22.708 137.196 22.708C136.588 22.708 136.092 22.884 135.708 23.236C135.34 23.588 135.156 24.028 135.156 24.556C135.156 25.1 135.332 25.548 135.684 25.9C136.052 26.236 136.556 26.404 137.196 26.404Z" fill="black"/>
</svg>

      </a>
      <div className="mt-20">
      


{links.map((link, index) => (
        <div
          key={index}
          onClick={() => handleLinkClick(index)}  // Handle link click to set active state
          className={`flex items-center gap-[20px] p-4 rounded-lg cursor-pointer
            ${activeLink === index ? 'bg-[#F8F8F8] text-black' : 'bg-white text-[#78859B]'} 
            hover:bg-[#F8F8F8] hover:text-black transition-all`}>
           <span
                className="text-2xl"
                dangerouslySetInnerHTML={{ __html: link.svg }}
              ></span>
          <span>{link.label}</span>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SideBar;
