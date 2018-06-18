import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logOut } from '../store/actions/user';
import { fbLogOut } from '../store/firebase/auth';
import { mapCurrentUserToProps } from '../store/configureStore';

const Header = (props) => {
  const { id, name } = props.currentUser;
  
  const handleLogOut = async () => {
    await fbLogOut();
    props.dispatch((logOut()));
  }

  return (
    <header className="header">
      <Link to="/" className="header__link">
        <h1 className="logo">Rini</h1>
      </Link>
      <nav className="nav header__nav">
        {name &&
          <NavLink
            to="/play"
            className="nav__link nav__link--game"
            activeClassName="nav__link--active-game"
          >
            Игра
          </NavLink>}
        <NavLink to="/users" exact className="nav__link" activeClassName="nav__link--active">Результаты</NavLink>
        <NavLink to="/help" className="nav__link" activeClassName="nav__link--active">Как играть</NavLink>
        {name && <NavLink to={`/users/${id}`} className="nav__link" activeClassName="nav__link--active">{name}</NavLink>}
        {!name && <NavLink to="/log-in" className="nav__link" activeClassName="nav__link--active">Вход</NavLink>}
        {name && <NavLink to="/" onClick={handleLogOut} className="nav__link">Выход</NavLink>}
        {!name && <NavLink to="/sign-up" className="nav__link" activeClassName="nav__link--active" >Регистрация</NavLink>}
      </nav>
    </header>
  );
}

export default connect(mapCurrentUserToProps, null, null, {
  pure: false
})(Header); 