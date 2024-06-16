import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOption({Icon, avatar, title, onClick}) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption__icon' />}
        {avatar && <Avatar className='headerOption__icon' src={user?.photoURL}>{user?.email[0]}</Avatar>}
        {/* <h3 className='headerOption__title'>{user && avatar ? user.displayName : title}</h3> */}
        <h3 className={`headerOption__title ${title === 'Logout' ? 'logout__title': ''}`}>
        {title}
        </h3>
    </div>
  )
}

export default HeaderOption
