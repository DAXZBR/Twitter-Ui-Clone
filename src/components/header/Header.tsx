import React from 'react'
import StarIcon from  '/Sparkle.svg'
import './header.css'

interface IHeader {
  title: string
}

export const Header = ({title} : IHeader) => {
  return (
    <header>
        <h1>{title}</h1>
        <img src={StarIcon} alt="star-icon" />
    </header>
  )
}
