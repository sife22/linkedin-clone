import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Post from './Post';
import { db } from './firebase';
import { Timestamp } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        );
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    }

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type='text'
                            value={input}
                            onChange={(e) => setInput(e.target.value)} />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageIcon} title="Photo" color="dodgerblue" />
                    <InputOption Icon={SubscriptionsIcon} title="Vidéo" color="orange" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="gray" />
                    <InputOption Icon={ScheduleIcon} title="Calendar" color="grey" />
                </div>
            </div>
            <div className='feed_posts'>
                <FlipMove>
                {posts && posts.map(({ id, data: { name, message, description, photoUrl } }) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                ))}
                </FlipMove>
            </div>
        </div>
    )
}

export default Feed
