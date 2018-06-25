import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../store/actions/user';
import UserForm from '../components/UserForm';
import { fbSignUp, fbLogIn } from '../store/firebase/auth';
import { setUser } from "../store/firebase/database";
import { mapCurrentUserToProps } from '../store/configureStore';

const SignUpPage = (props) => {

  const submitForm = async ({ name, email, password, hero, sound, effects }) => {
    const signUpResult = await fbSignUp(email, password);
    if (signUpResult.error) return signUpResult;
    const logInResult = await fbLogIn(email, password);
    if (logInResult.error) return logInResult;
    const id = logInResult.user.uid;
    props.dispatch(logIn({
      id,
      name,
      hero,
      sound,
      effects,
    }));
    setUser({ id, name, hero, sound, effects });
    return { error: '' };
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
      <h2 className="row-container__header">Регистрация</h2>
      <UserForm
        onSubmit={submitForm}
        showName={true}
        showHeroChoose={true}
        history={props.history}
      />
    </div>
  );
}

export default connect(mapCurrentUserToProps)(SignUpPage);