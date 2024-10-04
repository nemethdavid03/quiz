import Navbar from '@/components/Navbar'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="h-full flex items-center justify-center">

        {children}
      </div>
    </>

  )
}

export default AuthLayout
