import React, {forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import userEvent from '@testing-library/user-event';

const Post = forwardRef(({ name, description, message, photoURL }, ref)=> {
    return (
        <div ref={ref} className='post'>
            <div className='post__header'>
                <Avatar src={photoURL}>{name[0]}</Avatar>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className='post__body'>
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpIcon} color='grey' title='Like' />
                <InputOption Icon={ChatIcon} color='grey' title='Comment' />
                <InputOption Icon={ShareIcon} color='grey' title='Share' />
                <InputOption Icon={ReplyAllIcon} color='grey' title='Send' />
            </div>
        </div>
    )
})

export default Post
