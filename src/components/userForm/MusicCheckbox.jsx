import React from 'react';

const MusicCheckbox = (props) => (
  <label className="user-form__label" htmlFor="sound">Музыка
    <div>
      <input
        id="sound"
        className="user-form__checkbox"
        type="checkbox"
        {...props} />
      <label htmlFor="sound" className="toggle"><span></span></label>
    </div>
  </label>
);

export default MusicCheckbox;