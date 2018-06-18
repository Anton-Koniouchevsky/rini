import React from 'react';
import { connect } from "react-redux";
import Game from '../components/Game';
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
        <div className="row-container row-container--top">
          <h2 className="row-container__header">Играть</h2>
          {this.state.activeSession.enemyName &&
            <div>
              <div>Сохраненная игра</div>
              <div>Монстров пройдено: {this.state.activeSession.level}.</div>
              <button onClick={this.continueGame} className="button button--primary">Продолжить</button>
            </div>
          }
          <button onClick={this.startNewGame} className="button button--success">Начать новую игру</button>
        </div>
      );
    }
    if (this.state.gameIsStarted) {
      return (
        <Game
          activeSession={this.state.activeSession}
        />
      );
    }
    return (<LoadingStateComponent />);
  }
}

export default connect(mapCurrentUserToProps)(GamePage);