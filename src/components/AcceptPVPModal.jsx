import React from 'react';
import Modal from 'react-modal';
import { mapStateToProps } from '../store/configureStore';
import { connect } from "react-redux";
import { accept, decline } from '../store/actions/pvp';
import { setInvite } from '../store/firebase/database';

Modal.setAppElement('#app');

class AcceptPVPModal extends React.Component {
  constructor(props) {
    super(props);
    this.state.isOpen = props.isOpen;
  }

  state = {};

  handleAccept = () => {
    console.log('accept');
    this.setState(() => ({isOpen: false}));
    this.props.dispatch(accept());
    setInvite(this.props.currentUser.id, Object.assign(this.props.pvp, {isAccepted: true}));
  }

  handleDecline = () => {
    console.log('decline');
    this.setState(() => ({isOpen: false}));
    this.props.dispatch(decline());
    setInvite(this.props.currentUser.id, {});
  }

  render () {
    return (
      <Modal
        isOpen={!!this.state.isOpen}
        contentLabel="The Game End"
        className="custom-modal"
      >
        <h3 className="custom-modal__header">{this.props.pvp.user1Name} вызывает тебя на битву!</h3>
        <div>
          <button onClick={this.handleAccept} className="button button--success">Принять</button>
          <button onClick={this.handleDecline} className="button button--primary">Отклонить</button>
        </div>
      </Modal>
    );
  }
} 

export default connect(mapStateToProps)(AcceptPVPModal);