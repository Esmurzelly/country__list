import React from 'react'

type Props = {
  children: React.ReactNode;
}

const Main = ({children}: Props) => {
  return (
    <div className='py-2 sm:pb-16'>
      <div className='w-full max-w-[1240px] mx-auto py-8'>
        {children}
      </div>
    </div>
  )
}

export default Main