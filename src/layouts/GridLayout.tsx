import React, {ReactNode} from 'react'

import './gridContainer.css'

interface IGridProps {
  children: ReactNode
}

export const GridLayout = ({children}: IGridProps) => {
  return (
    <div className='grid-container'>
      {children}
    </div>
  )
}
