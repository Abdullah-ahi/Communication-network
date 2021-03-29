import { MessengerRedux } from 'containers/MessengerContainer';
import { formRedux } from 'containers/formContainer'

export const routes = [
  {
    path: '/',
    exact: true,
    component: formRedux
  },
  {
    path: '/chats',
    exact: true,
    component: MessengerRedux
  },
  {
    path: '/chats/:id',
    exact: true,
    component: MessengerRedux,
  }
]