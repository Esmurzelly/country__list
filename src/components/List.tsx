import React from 'react'

type Props = {
    children: React.ReactNode;
}

const List = ({children}: Props) => {
  return (
    <section className='grid grid-cols-1 gap-8 py-8 w-full md:grid-cols-4 md:gap-16 sm:grid-cols-2 sm:py-10 sm:gap-12'>
        {children}
    </section>
  )
}

export default List