import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const SpellChoiceModal = (props) => { 
  const handleClick = (event) => {
    props.setSpellType(event.target.value || event.target.parentNode.value);
  }

  const handleClose = (event) => {
    props.closeSpellChoiceModal();
  }

  return (
    <Modal
      isOpen={!!props.isOpen}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="spell-modal" 
    >
      <div className="circle">
        <button className="spell-button fireAttack" value="fireAttack" onClick={handleClick}>
          <i className="fa fa-2x fa-fire"></i>
          <span>Огонь</span>
        </button>
        <button className="spell-button iceAttack" value="iceAttack" onClick={handleClick}>
          <i className="fa fa-2x fa-snowflake-o"></i>
          <span>Лёд</span>
        </button>
        <button className="spell-button psyAttack" value="psyAttack" onClick={handleClick}>
          <i className="fa fa-2x fa-bolt"></i>
          <span>Молния</span>
        </button>
        <button className="spell-button hill" value="hill" onClick={handleClick}>
          <i className="fa fa-2x fa-heartbeat"></i>
          <span>Лечение</span>
        </button>
        <button className="spell-button exit" onClick={handleClose}>
          <i className=" fa fa-2x fa-refresh"></i>
          <span>Назад</span>
        </button>
      </div>
    </Modal>
  );
}

export default SpellChoiceModal;