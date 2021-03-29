import React from 'react';
import { Form } from 'components/Login';
import { connect } from 'react-redux';
import { signIn } from 'actions';
const formContainer = (props) => {
  const { signIn, path } = props;
  return(
    <Form signIn={signIn} path={path}/>
  )
}
function mapStateToProps(state, ownProps){
  const { path } = ownProps.match;
  return {
    path,
  }
}
function mapDispatchToProps(dispatch){
 return {
  signIn: (data) => dispatch(signIn(data))
 }
}
export const formRedux = connect(mapStateToProps, mapDispatchToProps)(formContainer)
