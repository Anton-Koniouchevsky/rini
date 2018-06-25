import React from 'react';
import Modal from 'react-modal';
import { withRouter } from "react-router-dom";

Modal.setAppElement('#app');

const EndGameModal = (props) => { 

  const handleClick = (event) => {
    if (!event.target.value) {
      props.restart();
    } else {
      props.history.push(event.target.dataset.destination);
    }
  }

  return (
    <Modal
      isOpen={!!props.isOpen}
      contentLabel="The Game End"
      className="custom-modal"
    >
      <h3 className="custom-modal__header">Поражение!</h3>
      <div>Уровней пройдено: {props.level}</div>
      <div>
        <button data-destination="" onClick={handleClick} className="button button--primary">Начать заново</button>
        <button data-destination="/users" onClick={handleClick} className="button button--primary">Рекорды</button>
        <button data-destination="/" onClick={handleClick} className="button button--primary">На главную</button>
      </div>
    </Modal>
  );
}

export default withRouter(EndGameModal);