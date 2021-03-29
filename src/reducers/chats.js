import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { send, remove, edit, signIn } from 'actions';

const initialState = new Map({
  chats: new Map({
    0: fromJS({
        id: 0,
        name: 'Рабочие вопросы',
        messages: [
          {id: 1, author: 'Bot', text: 'Welcome to my messenger'}
        ]
      }),
    1: fromJS({
        id: 1,
        name: 'Чат для общения',
        messages: [
          {id: 1, author: 'Bot', text: 'Добро пожаловать'}
        ]
      })
  }),
  author: new Map()
})

export const chatsReducer = handleActions({

  [send]: (state, action) => {
    const { chatId, ...message } = action.payload;
    return state.mergeIn(['chats', chatId, 'messages'], message)
  },
  [remove]: (state, action) => {
    const { chatId, id } = action.payload;
    return state.removeIn(['chats', chatId, 'messages', id])
  },
  [edit]: (state, action) => {
    const { chatId, id, text } = action.payload;
    return state.setIn(['chats', chatId, 'messages', id, 'text'], text)
  },
  [signIn]: (state, action) => {
    return state.set('author', fromJS(action.payload))
  }
}, initialState)