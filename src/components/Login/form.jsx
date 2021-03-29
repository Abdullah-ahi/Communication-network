import React, { Fragment, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './form.css'

export const Form = (props) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const nameIsValid = (name) => {
    return /[a-zA-Zа-яА-Я]{2,10}$/gi.test(name)
  }
  const telIsValid = (tel) => {
    return /(7)[0-9]{10}$/gi.test(tel)
  }
  const userDataIsValid = (name, tel) => {
    return nameIsValid(name) && telIsValid(tel)
  }
  const handleInputChange = (event) => {
    removeErrors();
    const fieldName = event.target.name;
    if (fieldName == 'name'){
      setName(event.target.value)
    }else {
      setTel(event.target.value)
    }
  }
  const handleRegister = () => {
    removeErrors();
    const { signIn } = props
    if (userDataIsValid(name, tel)){
      signIn({name, tel})
    }else {
      renderErrors()
    }
  }
  const renderErrors = () => {
    const data = {name: name, tel: tel}
    for (let key in data){
      if (key == 'name' && !nameIsValid(data[key])){
        renderNameError()
      }else if (key == 'tel' && !telIsValid(data[key])) {
        renderTelError()
      }
    }
  }
  const renderNameError = () => {
    const error = `<small class='error'>Неверный формат имени</small>`
    const nameInput = document.querySelector('.name');
    nameInput.insertAdjacentHTML('beforeend', error)
  }
  const renderTelError = () => {
    const error = `<small class='error'>Телефон должен быть введен в формате "79999999999"</small>`
    const telInput = document.querySelector('.tel');
    telInput.insertAdjacentHTML('beforeend', error)

  }
  const removeErrors = () => {
    let errors = Array.from(document.querySelectorAll('.error'))
    errors && errors.forEach(error => error.remove())
  }
  return (
    <Fragment>
      <div className="form-wrapper">
        <div className="form-container">
          <h3 className='register-form-description'>Вам необходимо зарегистрироваться</h3>
          <TextField placeholder="Василий" label="Имя" className="name" name="name" onChange={handleInputChange}/>
          <TextField placeholder="79999999999" label="Телефон" type="tel"  className="tel"  name="tel" onChange={handleInputChange}/>
          <Link to={userDataIsValid(name, tel) ? '/chats' : props.path}>
            <Button variant="contained" color="primary" className="register-button" onClick={handleRegister}>Зарегистрироваться</Button>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}