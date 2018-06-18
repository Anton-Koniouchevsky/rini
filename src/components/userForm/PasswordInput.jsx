import React from 'react';

const PasswordInput = (props) => (
  <label className="user-form__label" htmlFor="password">Пароль
    <input
      id="password"
      className="user-form__input"
      type="password"
      placeholder="Пароль"
      required
      {...props} />
  </label>
);

export default PasswordInput;

