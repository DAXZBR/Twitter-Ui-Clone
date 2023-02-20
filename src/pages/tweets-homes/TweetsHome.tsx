import React from 'react'

import './tweetsHome.css'

import ProfilePicture from '/ProfileGirl.svg'

import { Header } from '../../components/header/Header'
import { Button } from '../../components/button/Button'
import { BarDivider } from '../../components/BarDivider'

export const TweetsHome = () => {
  return (
    <div className='tweetshome-wrapper'>
      <div className='container'>
        <Header title='Home'/>
      </div>
      <BarDivider />
      <div className='create-tweet-input'>
        <div>
          <div className='profile-picture'>
            <img src={ProfilePicture} alt="profile-picture" />
          </div>
          <textarea placeholder='Whats happening?' />
        </div>
        <div>
          <button>Tweet</button>
        </div>
      </div>
    </div>

  )
}
