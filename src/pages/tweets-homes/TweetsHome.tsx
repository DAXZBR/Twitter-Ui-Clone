import './tweetsHome.css'

import ProfileImg from '../../assets/ProfileGirl.svg'

import { Header } from '../../components/header/Header'
import { BarDivider } from '../../components/BarDivider'
import { CardTweets } from '../../components/card-tweets/CardTweets'

export const TweetsHome = () => {
  return (
    <div className='tweetshome-wrapper'>
      <div className='container'>
        <Header title='Home'/>
      </div>
      <div className='create-tweet-input'>
        <div>
          <div className='profile-picture'>
            <img src={ProfileImg} alt="profile-picture" />
          </div>
          <textarea placeholder='Whats happening?' />
        </div>
        <div>
          <button>Tweet</button>
        </div>
      </div>
      <BarDivider />
      <CardTweets />
    </div>

  )
}
