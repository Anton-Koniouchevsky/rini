import React from 'react';

const LuckyTask = (props) => { 

  const handleClick = () => {
    props.setTaskResult(true);
  }
  
  return (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Ты вытянул счастливый билет!</h3>
      <button onClick={handleClick} className="button button--success">Проверить</button>
    </div>
  );
}

export default LuckyTask;