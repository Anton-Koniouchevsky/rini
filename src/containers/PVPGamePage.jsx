import React from 'react';
import { connect } from "react-redux";
import PVPGame from '../components/PVPGame';
import { mapStateToProps } from '../store/configureStore';
import { getActiveSession, setResult } from '../store/firebase/database';
import { getName } from '../utils/nameGenerator';
import LoadingStateComponent from '../components/LoadingStateComponent';

class PVPGamePage extends React.Component {
  state = {
    
  };

  componentDidMount() {
    /* getActiveSession(this.props.currentUser.id)
      .then((activeSession) => {
        this.setState(() => ({
          promiseIsSettled: true,
          activeSession: activeSession || {},
        }));
      })
      .catch(() => {
        this.setState(() => ({
          promiseIsSettled: true,
          activeSession: {},
        }));
      }); */
  }

/*   startNewGame = () => {
    if (this.state.activeSession.level) {
      setResult(this.props.currentUser.id, this.props.currentUser.name, this.state.activeSession.level);
    }
    this.setState(() => ({
      activeSession: {
        level: 0,
        heroHP: 100,
        enemyHP: 100,
        enemyName: getName(),
      },
      promiseIsSettled: null,
      gameIsStarted: true,
    }));
  }

  continueGame = () => {
    this.setState(() => ({
      promiseIsSettled: null,
      gameIsStarted: true,
    }));
  } */

  render() {
    console.log(this.props);
    
    return (<PVPGame currentUser={this.props.currentUser} pvp={this.props.pvp} />);
  }
}

export default PVPGamePage;