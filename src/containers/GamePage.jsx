import React from 'react';
import { connect } from "react-redux";
import GameBlock from '../components/GameBlock';
import PreGameBlock from '../components/PreGameBlock';
import { mapCurrentUserToProps } from '../store/configureStore';
import { getActiveSession, setResult } from '../store/firebase/database';
import { getName } from '../utils/nameGenerator';
import LoadingStateComponent from '../components/LoadingStateComponent';

class GamePage extends React.Component {
  state = {
    activeSession: {},
    promiseIsSettled: false,
  };

  componentDidMount() {
    getActiveSession(this.props.currentUser.id)
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
      });
  }

  startNewGame = () => {
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
  }

  render() {
    if (this.state.promiseIsSettled) {
      return (
        <PreGameBlock 
          isUnfinished={this.state.activeSession.enemyName}
          level={this.state.activeSession.level}
          continueGame={this.continueGame}
          startNewGame={this.startNewGame}
        />
      );
    }
    if (this.state.gameIsStarted) {
      return (
        <GameBlock
          activeSession={this.state.activeSession}
        />
      );
    }
    return (<LoadingStateComponent />);
  }
}

export default connect(mapCurrentUserToProps)(GamePage);