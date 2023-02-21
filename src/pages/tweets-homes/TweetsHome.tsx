import './tweetsHome.css'

import ProfileImg from '../../assets/ProfileGirl.svg'
import ProfilePicture from '../../assets/ProfileMan.svg';

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
      <CardTweets 
        userName='Daxzbr' 
        tagUser='daxzbr' 
        userMsg="Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: 

        ✅ npm start: De 32s para 400ms (sim, demorava 30s) 
        ✅ npm build: De 120s para 22s
        
        Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥"
        userProfilePicture={ProfilePicture} 
        likes={22} 
        comments={40} 
        shares={20} />

      <CardTweets 
        userName='Vanessa' 
        tagUser='vanessa' 
        userMsg='lidar com datas continua sendo uma das coisas mais chatas em programação... 
                por exemplo:   - o mês no JS começa em 0 (janeiro = 0)  - a semana começa em
                0 (domingo = 0)  - o mês no MySQL começa em 1 (janeiro = 1)  - a semana no MySQL
                começa na segunda-feira (domingo = 6)' 
        userProfilePicture={ProfileImg} 
        likes={2} 
        comments={4} 
        shares={20} />
    </div>

  )
}
