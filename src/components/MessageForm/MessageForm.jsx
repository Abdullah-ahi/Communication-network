import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import './MessageForm.css'

export const MessageForm = (props) => {
  const [text, setText] = useState('');
  const { editingText, editing, setEditing } = props;
  
  useEffect(() => {
    editing && editingText && setText(editingText)
  })

  const handleInputChange = (event) => {
    setEditing(false)
    setText(event.target.value);
  }
  const handleSendMessage = () => {
    const { author, send, chatId, lastId } = props;
    if (messageIsEditing()){
      handleMessageEdit()
    }else {
      const message = {id: lastId, author: author.name, text, isAuthor: true}
      if (validMessage(text)){
        send({chatId, ...message})
        setText('')
        scrollList();
      }
    }
  }
  const messageIsEditing = () => {
    return editingText !== null;
  }
  const handleMessageEdit = () => {
    const { chatId, id, edit } = props;
    if(validMessage(text)){
      edit({chatId, id, text})
      handleCancelEdit();
    }
  }
  const scrollList = () => {
    let messagesList = document.querySelector('.messages-list');
    messagesList.scrollTop = 9999;
  }
  const handleKeyDown = (event) => {
    event.keyCode === 13 && handleSendMessage()
  }
  const handleCancelEdit = () => {
    const { setEditingText } = props;
    setEditingText(null)
    setEditing(false)
    setText('');
  }
  const validMessage = (message) => {
    return /[a-zA-Zа-яА-Я0-9,+-_ ]{1,70}$/gi.test(message)
  }
  const editBlockClasses = classNames('edit-message-block', {
    'visible-edit-block': editingText
  })
  return (
    <div className="message-form">
      <TextField className='message-text-input' onChange={handleInputChange} onKeyDown={handleKeyDown} value={text}/>
      <SendIcon onClick={handleSendMessage}/>
      <div className={editBlockClasses}>
        <span className='editing-text'>{editingText}</span>
        <CloseIcon onClick={handleCancelEdit}/>
      </div>
    </div>
  )
}