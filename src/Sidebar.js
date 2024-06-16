import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://e0.pxfuel.com/wallpapers/833/722/desktop-wallpaper-dual-screen-android-dual-screen-background-space-dual-screen.jpg' alt='' />
                <Avatar className='sidebar__avatar' src={user.photoURL}>
                    {/* Si il y a de photo, on affiche le premier lettre de son mail */}
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who views you</p>
                    <p className='sidebar__statNumber'>2,222</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,341</p>
                </div>
            </div>
            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('laravel')}
                {recentItem('nodejs')}
                {recentItem('flask')}
                {recentItem('django')}
            </div>
        </div>
    )
}

export default Sidebar
