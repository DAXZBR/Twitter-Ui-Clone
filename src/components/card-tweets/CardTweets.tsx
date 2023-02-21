import './cardTweets.css'
import ProfilePicture from '../../assets/ProfileMan.svg';

import {
  ChatCircle,
  Heart,
  ArrowsCounterClockwise
} from 'phosphor-react'

const dataUserMock =
{
  UserName: "Daxzbr",
  userProfilePicture: ProfilePicture,
  userMsg: "lorem teste de rede blabalbalblabbalblasldkflaskdflkasdf",
  tagUser: "daxzbr",
  likes: 20,
  shares: 10,
  comments: 20,
}

interface ICardTweets {
  UserName: string,
  userProfilePicture: string
  userMsg: string,
  tagUser: string
  likes: number,
  shares: number,
  comments: number,
}

export const CardTweets = () => {
  return (
    <div className='tweet-card'>
      <div className='tweet-card__profile'>
        <img src={ProfilePicture} alt="profile-picture" />
      </div>
      <div className='tweet-card__info'>
        <span>
          <h2>{dataUserMock.UserName}</h2>
          <p>@{dataUserMock.tagUser}</p>
        </span>

        <p>{dataUserMock.userMsg}</p>
      
        <div>
          <div>
            <ChatCircle width={16} /> 
            <span>{dataUserMock.comments}</span>
          </div>

          <div>
            <ArrowsCounterClockwise width={16} /> 
            <span>{dataUserMock.shares}</span>
          </div>
          
          <div>
            <Heart width={16} /> 
            <span>{dataUserMock.likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
