'use client'

import React from 'react'
import { useAdminAuth } from '@/hooks/useAdminAuth'
import Usdt from '@/components/Usdt'
import MainLayout from '@/components/layout/MainLayout'
import StakingAssets from '@/components/StakingAssets'
 

const Admin = () => {
  // This will automatically redirect non-admin users
  useAdminAuth();

  return (
    <div className='bg-[#F0F1F1]'>
      <MainLayout>
        <Usdt />
        <StakingAssets />
      </MainLayout>
    </div>
  )
}

export default Admin