import { combineReducers } from 'redux';
import { chatsReducer } from './chats';
import { connectRouter } from 'connected-react-router';

export const initReducer = history => combineReducers({
  router: connectRouter(history),
  chats: chatsReducer,
})