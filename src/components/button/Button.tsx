import React from 'react'

import './button.css'

interface IButton {
  children: React.ReactNode
}

export const Button = ({children} : IButton) => {
  return (
    <button className='button'>
        {children}
    </button>
  )
}
