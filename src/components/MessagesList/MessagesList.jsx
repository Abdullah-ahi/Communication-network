import React from 'react';
import { Message } from 'components/Message';
import './MessagesList.css'

export const MessagesList = (props) => {
  const { messages, chatId, remove, setText, setEditing, setIdx } = props;
  console.log(messages)
  return (
    <div className="messages-list">
      {messages.map((message, idx) => <Message chatId={chatId} remove={remove} 
                                               index={idx} key={idx} setText={setText} 
                                               setEditing={setEditing} {...message} setIdx={setIdx}
                                      />)}
    </div>
  )
}