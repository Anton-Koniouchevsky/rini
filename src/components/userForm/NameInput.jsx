import React from 'react';

const NameInput = (props) => (
  <label className="user-form__label" htmlFor="name">Имя
    <input
      id="name"
      className="user-form__input"
      type="text"
      placeholder="Имя"
      required
      autoFocus
      {...props} />
  </label>
);

export default NameInput;