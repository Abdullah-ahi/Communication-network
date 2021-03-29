import { send } from 'actions'
export function bot (store){
  return function (next){
    return function (action){
      if (action.type === send.toString()){
        const { chatId, author, isAuthor } = action.payload;
        const chatName = store.getState().chats.getIn(['chats', chatId, 'name'])
        if (author !== 'Bot' || isAuthor){
          setTimeout(() => {
            store.dispatch(send({chatId, author: 'Bot', text: `Здравствуйте ${author}! Добро пожаловать в чат "${chatName}"`}))
          }, 1000)
        }
      }
      return next(action)
    }
  }
}