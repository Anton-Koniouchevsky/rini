import React from 'react';

const PreGameBlock = (props) => {
  return (
    <div className="row-container row-container--top">
      <h2 className="row-container__header">Играть</h2>
      {props.isUnfinished &&
        <div>
          <div>Сохраненная игра</div>
          <div>Монстров пройдено: {props.level}.</div>
          <button onClick={props.continueGame} className="button button--primary">Продолжить</button>
        </div>
      }
      <button onClick={props.startNewGame} className="button button--success">Начать новую игру</button>
    </div>
  )
};

export default PreGameBlock;
