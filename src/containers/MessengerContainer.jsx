import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Messenger } from 'components/Messenger';
import { send, remove, edit, signIn} from 'actions';
const MessengerContainer = (props) => {
  const { chats, messages, author, sendMessage, chatId, remove, lastId, edit, signIn, path } = props;

  return(
    <Messenger 
      chats={chats} messages={messages} author={author}
      send={sendMessage} chatId={chatId} remove={remove}
      lastId={lastId} edit={edit} signIn={signIn} path={path}
    />
  )
}
function mapStateToProps(state, ownProps){
  const { match } = ownProps;
  const { path } = match;
  const chats = state.chats.get('chats');
  const author = state.chats.get('author').toJS();
  const chatId = match ? match.params.id : null;
  let messages = null;
  let lastId = null;
  if (match && chats.has(match.params.id)){
    messages = chats.getIn([match.params.id, 'messages']).toJS();
    lastId=messages.length;
  }
  return {
    chats: chats.map((chat) => ({name: chat.get('name'), id: chat.get('id'), link: `/chats/${chat.get('id')}`, messages: chat.get('messages')})).toList().toJS(),
    messages,
    author,
    chatId,
    lastId,
    path,
  }
}
function mapDispatchToProps(dispatch){
  return {
    sendMessage: (message) => dispatch(send(message)),
    remove: (message) => dispatch(remove(message)),
    edit: (message) => dispatch(edit(message)),
    signIn: (data) => dispatch(signIn(data))
  }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer)