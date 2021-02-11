import React, { useState, useEffect } from 'react';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from "./firebase";
import { useStateValue } from './stateProvider';
import firebase from 'firebase';

import './Chat.css';
import userEvent from '@testing-library/user-event';

function Chat() {

    const [input, setInput] = useState(""); // value iz inputa se cuva u stejtu
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName(snapshot.data().name))

            db.collection('rooms')
                .doc(roomId).collection('messages').orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => (setMessages(snapshot.docs.map(doc => doc.data()))
                ))
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);


    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed >>>", input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName, // userName comes from google autentification
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };


    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat-headerInfo">
                    <h3>{roomName}</h3>
                    <p>
                        last seen{" "}
                        {new Date(
                            messages[messages.length - 1]?.timestamp?.toDate()) // -1 last message
                            .toUTCString()
                        }
                    </p>
                </div>

                <div className="chat-headerRight">
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>


            <div className="chat-body">

                {messages.map(message => (
                    <p className={`chat-message ${message.name === user.displayName && `chat-reciever `}`}>
                        <span className="chat-name">{message.name}</span>
                        {message.message}
                        <span className="chat-timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>


            <div className="chat-footer">
                <InsertEmotionIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
