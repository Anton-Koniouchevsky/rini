import React from 'react';

const EffectsCheckbox = (props) => (
  <label className="user-form__label" htmlFor="effects">Эффекты
    <div>
      <input
        id="effects"
        className="user-form__checkbox"
        type="checkbox"
        {...props} />
      <label htmlFor="effects" className="toggle"><span></span></label>
    </div>
  </label>
);

export default EffectsCheckbox;