import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../store/actions/user';
import UserForm from '../components/UserForm';
import { fbLogIn } from '../store/firebase/auth';
import { getUser } from "../store/firebase/database";
import { mapCurrentUserToProps } from '../store/configureStore';

const LogInPage = (props) => {

  const submitForm = async ({ email, password }) => {
    const logInResult = await fbLogIn(email, password);
    if(logInResult.error) return logInResult;
    const id = logInResult.user.uid;
    const { name, hero, sound, effects } = await getUser(id);
    props.dispatch(logIn({
      id,
      name,
      email,
      hero,
      sound,
      effects
    }));
    return { error: ''};
  }

  if(props.currentUser.name) {
    return (
      <div className="row-container row-container--top">
      <h2 className="row-container__header">Вы уже вошли в систему</h2>
      <Link to="/" className="button button--success">На главную</Link>
    </div>
    );
  }


  return (
    <div className="row-container row-container--top">
      <h2 className="row-container__header">Вход</h2>
      <UserForm
        onSubmit={submitForm}
        showName={false}
        history={props.history}
      />
    </div>
  );
}

export default connect(mapCurrentUserToProps)(LogInPage);