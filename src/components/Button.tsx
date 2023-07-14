import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Button = ({children}: Props) => {
  return (
    <button className='py-1 bg-secondary shadow-sm leading-3 rounded-lg border-none text-primary cursor-pointer dark:bg-secondary_dark dark:text-primary_dark dark:shadow-3xl'>
        {children}
    </button>
  )
}

export default Button