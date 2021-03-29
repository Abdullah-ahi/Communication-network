import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './ChatList.css'

export const ChatList = (props) => {
  const { chats } = props
  return (
    <List className = 'chats-list'>
      {
        chats.map((chat, idx) => 
        <Link to={chat.link} key={idx} className='chat-name-link'>
          <ListItem className='chats-item'>
            <ListItemText primary={chat.name}/>
          </ListItem>
        </Link>
        )
      }
    </List>
  )
}