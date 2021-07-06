import React, { useState} from 'react'
import { db, auth } from '../firebase';
import firebase from 'firebase';
import { Button, Input } from '@material-ui/core';

export const SendMessage = ({scroll}) => {

    const [msg, setMsg] = useState('');

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('') 
        scroll.current.scrollIntoView({ behaviour:'smooth'})
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder="Message..." />
                    <Button type="submit">Send</Button>
                </div>
                
            </form>
            
        </div>
    )
}

export default SendMessage;
