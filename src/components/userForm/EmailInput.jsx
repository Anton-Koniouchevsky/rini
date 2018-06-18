import React from 'react';

const EmailInput = (props) => (
  <label className="user-form__label" htmlFor="email">Почта
    <input
      id="email"
      className="user-form__input"
      type="text"
      placeholder="Почта"
      required
      {...props} />
  </label>
);

export default EmailInput;