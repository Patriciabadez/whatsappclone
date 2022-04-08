import React, { useState, useEffect } from 'react';
import './App.css';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

export default () => {
  const [chatlist, setChatList] = useState([
    {chatId:123, title: "Fulano de Tal",image:'https://www.w3schools.com/w3images/avatar2.png'},
    {chatId:123, title: "Fulano de Tal",image:'https://www.w3schools.com/w3images/avatar2.png'},
    {chatId:123, title: "Fulano de Tal",image:'https://www.w3schools.com/w3images/avatar2.png'},
    
  ])
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar:'https://media-exp1.licdn.com/dms/image/C4D03AQGheYiFTbZk7g/profile-displayphoto-shrink_800_800/0/1638205797691?e=1654732800&v=beta&t=MYE5XReJVz8U2VKObfCv2FKxrgHxbu3ZwgHxwlolKGo',
    name:'Patricia Dias Baldez'
  })

  return (
    <div className='app-window'>
      <div className="sidebar">
        <header>
        <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191'}} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191'}} />
            </div>
          </div>
        </header>
        <div className='search'>
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#919191'}} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>
        <div className='chatlist'>
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={()=>setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className='contentarea'>
        {activeChat.chatId !== undefined &&
          <ChatWindow 
          user={user}
          />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );

}