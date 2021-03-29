import { createAction } from 'redux-actions';

export const send = createAction('SEND_MESSAGE');
export const remove = createAction('REMOVE_MESSAGE');
export const edit = createAction('EDIT_MESSAGE');
export const load = createAction('LOAD_CHATS');
export const signIn = createAction('SIGN_IN')
