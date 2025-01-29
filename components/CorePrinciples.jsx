import React from 'react';
import Image from 'next/image';

const CorePrinciples = () => {
    
const principles = [
    {
      id: 1,
      img: '/managment.svg',
      title: 'Bank-grade risk management',
      description: `Our clients don't take on unknown risks when dealing with us`,
      colSpan: 'md:col-span-5',
    },
    {
      id: 2,
      img: '/complicated.svg',
      title: 'Simplifying the complicated',
      description: 'We make validation and staking as simple as online shopping',
      colSpan: 'md:col-span-7',
    },
    {
      id: 3,
      img: '/education.svg',
      title: 'Ongoing education',
      description: 'We strive to explain and educate our clients about the growing world of staking via unique online content',
      colSpan: 'md:col-span-7',
    },
    {
      id: 4,
      img: '/transparency.svg',
      title: 'Transparency',
      description: 'We have strong commitment to clarity and transparency of our operations',
      colSpan: 'md:col-span-5',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-40'>
      <h1 className="sm:text-[42px] text-3xl font-[700]">Our core principles</h1>
      <div className="mt-10 w-full grid md:grid-cols-12 gap-4">
        {principles.map((principle) => (
          <div
            key={principle.id}
            className={`${principle.colSpan} bg-[#191E25] rounded-[12px] py-6 px-8`}
          >
            <Image 
              src={principle.img} 
              alt={principle.title}
              width={48}
              height={48}
              priority
            />
            <h1 className="text-[24px] font-[700] py-3">{principle.title}</h1>
            <p className="text-[#71798A] lg:w-[70%] font-medium leading-tight">{principle.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorePrinciples;
