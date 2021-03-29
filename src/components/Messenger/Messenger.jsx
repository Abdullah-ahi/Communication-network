import React, { Fragment, useState } from 'react';
import { ChatList } from 'components/ChatList';
import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';
import { Form } from 'components/Login';
import './Messenger.css';

export const Messenger = (props) => {
  const { chats, messages, author, send, chatId, remove, lastId, edit, signIn, path } = props;

  const [editingText, setEditingText] = useState(null);
  const [editing, setEditing] = useState(false);
  const [MessageIdx, setIdx] = useState(null)

  const setText = (text) => {
    setEditingText(text)
  }
  const SetEditState = (state) => {
    setEditing(state)
  }
  const getMessageIndex = (index) => {
    setIdx(index)
  }

  return (
    <Fragment>
      {
        author.name
        ?
        <div className="main">
          <ChatList chats={chats}/>{
          messages ? 
          <div className="messages-list-wrapper">
            <MessagesList messages={messages} chatId={chatId} remove={remove} 
                          setText={setText} setEditing={SetEditState} setIdx={getMessageIndex}/>
            <MessageForm 
              author={author} send={send} chatId={chatId} lastId={lastId} editingText={editingText} 
              editing={editing} setEditing={SetEditState} setEditingText={setText} id={MessageIdx} edit={edit}/>
          </div>
          :
          <h2 className='empty-messages-plug'>Выберите чат</h2>
          }
        </div>
        :
        <Form signIn={signIn} path={path}/>
      }
    </Fragment>
  )
}