import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

class DeclinePVPModal extends React.Component {
  constructor(props) {
    super(props);
    this.state.isOpen = props.isOpen;
  }

  state = {};

  render () {
    return (
      <Modal
        isOpen={!!this.props.isOpen}
        contentLabel="The Game End"
        className="custom-modal"
      >
        <h3 className="custom-modal__header">С тобой отказались играть :(</h3>
        <div>
          <button onClick={this.props.handleClose} className="button button--success">ОК</button>
        </div>
      </Modal>
    );
  }
} 

export default DeclinePVPModal;