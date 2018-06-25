import React from 'react';
import { connect } from "react-redux";
import { mapCurrentUserToProps } from '../store/configureStore';
import { getOnlineUsers, sendInvite } from '../store/firebase/database';
import firebase from 'firebase';
import DeclinePVPModal from '../components/DeclinePVPModal';
import PVPGamePage from './PVPGamePage';
import { Provider } from 'react-redux';


class GamePage extends React.Component {
  state = {
    onlineUsers: [],
  };

  componentDidMount() {
    getOnlineUsers().then(onlineUsers => this.setState(() => ({onlineUsers})));
  }

  handleNotification = (event) => {
    console.log('notify');
    
    sendInvite(this.props.currentUser.id, this.props.currentUser.name, event.target.dataset.id, event.target.dataset.name);
    firebase.database().ref(`/pvp`).on('child_removed', () => {this.setState(() => ({isAccepted: 'false'}))});
    firebase.database().ref(`/pvp`).on('child_changed', () => {this.setState(() => ({isAccepted: 'true'}))});
  }

  render() {
    console.log(this.state);
    if(this.state.isAccepted === 'true') {
      return (
        <PVPGamePage currentUser={this.props.currentUser} pvp={this.props.pvp} />
      );
    }
    return (
      <div>
        <div>PVP Game</div>
        <div>Online users:</div>
        <div>
          {this.state.onlineUsers.map(user => {
            return (
              <button 
                key={user.id} 
                data-id={user.id} 
                data-name={user.name}
                disabled={user.id === this.props.currentUser.id} 
                onClick={this.handleNotification}
              >
                {user.name}
              </button>)
            ;
          })}
        </div>
        <DeclinePVPModal isOpen={this.state.isAccepted === 'false'} handleClose = {() => {this.setState(() => ({isAccepted: false}))}} />
      </div>
    );
  }
}

export default connect(mapCurrentUserToProps)(GamePage);