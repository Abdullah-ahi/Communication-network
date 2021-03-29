import React, { useEffect } from 'react';
import classNames from 'classnames';
import './Message.css';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
export const Message = (props) => {
  const { author, text, isAuthor } = props;

  const messageClasses = classNames('message', {
    'own': isAuthor,
    'companion': !isAuthor,
  })
  const removeMessage = () => {
    const { chatId, remove, index } = props;
    remove({chatId, id: index})
  }
  const handleMessageEdit = () => {
    const { setText, setEditing, setIdx } = props;
    setEditing(true);
    setText(text);
    setIdx(props.index)
  }
  return (
    <div className={messageClasses}>
      <div className="message-author"><span>{author}</span>
        <div>
          {isAuthor ? <EditIcon className='edit-icon' onClick={handleMessageEdit}/> : ''}
          <CloseIcon className='remove-icon' onClick={removeMessage}/>
        </div>
      </div>
      <div className="message-text">{text}</div>
    </div>
  )
}