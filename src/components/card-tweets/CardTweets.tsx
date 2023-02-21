import './cardTweets.css'

import {
  ChatCircle,
  Heart,
  ArrowsCounterClockwise
} from 'phosphor-react'

interface ICardTweets {
  userName: string,
  userProfilePicture: string
  userMsg: string,
  tagUser: string
  likes: number,
  shares: number,
  comments: number,
}

export const CardTweets = ({comments, shares, likes, userName, tagUser, userMsg, userProfilePicture} : ICardTweets) => {
  return (
    <div className='tweet-card'>
      <div className='tweet-card__profile'>
        <img src={userProfilePicture} alt="profile-picture" />
      </div>
      <div className='tweet-card__info'>
        <span>
          <h2>{userName}</h2>
          <p>@{tagUser}</p>
        </span>

        <p>{userMsg}</p>
      
        <div>
          <div>
            <ChatCircle width={20} height={20} color="#828282"/> 
            <span>{comments}</span>
          </div>

          <div>
            <ArrowsCounterClockwise width={20} height={20} color="#828282"/> 
            <span>{shares}</span>
          </div>
          
          <div>
            <Heart width={20} height={20} color="#828282"/> 
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
