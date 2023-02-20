import { Button } from '../button/Button'

import { 
  TwitterLogo,
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle
} from 'phosphor-react'

import './sideBar.css'

export const SideBar = () => {
  return (
    <div className='sidebar-wrapper'>
      <TwitterLogo size={32} color="#1DA1F2" weight='fill' cursor="pointer"/>

      <span>
        <House size={32} weight='fill' cursor="pointer"/> Home
      </span>

      <span>
        <Hash size={32} cursor="pointer"/> Explorer
      </span>

      <span>
        <Bell size={32} cursor="pointer"/> Notifications
      </span>

      <span>
        <Envelope size={32} cursor="pointer"/> Messages
      </span>
      
      <span>
        <BookmarkSimple size={32} cursor="pointer"/> BookMarks
      </span>
      
      <span>
        <FileText size={32} cursor="pointer"/> Lists
      </span>
      
      <span>
        <User size={32} cursor="pointer"/> Profile
      </span>
      
      <span>
        <DotsThreeCircle size={32} cursor="pointer"/> More
      </span>

      <Button>
        Tweet
      </Button>
    </div>
  )
}
