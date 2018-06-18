import React from 'react';
import { connect } from 'react-redux';
import { getUser, setUser, getUserResults } from '../store/firebase/database';
import NotFoundPage from './NotFoundPage';
import { mapCurrentUserToProps } from '../store/configureStore';
import HeroChoose from '../components/HeroChoose';
import { edit } from '../store/actions/user';
import ResultList from '../components/ResultList';
import LoadingStateComponent from '../components/LoadingStateComponent';
import MusicCheckbox from '../components/userForm/MusicCheckbox';
import EffectsCheckbox from '../components/userForm/EffectsCheckbox';

class UserPage extends React.Component {
  state = {};

  componentDidMount() {
    Promise.all([getUser(this.props.match.params.userId), getUserResults(this.props.match.params.userId)])
      .then( ([{ id, name, email, hero, sound, effects }, userResults]) => {
        this.setState({ 
          promiseIsResolved: true,
          id,
          name, 
          email,
          hero, 
          sound, 
          effects,
          userResults
        });
      })
      .catch( () => {
        this.setState({ 
          promiseIsRejected: true
        });
      });
  }

  handleHeroChange = (hero) => {
    this.setState(() => ({ hero, isChanged: true }));
  }

  handleSoundSettingsChange = (e) => {
    const isChecked = e.target.checked;
    this.setState(() => ({ sound: isChecked, isChanged: true }));
  }

  handleEffectsSettingsChange = (e) => {
    const isChecked = e.target.checked;
    this.setState(() => ({ effects: isChecked, isChanged: true }));
  }

  handleEdit = () => {
    const {id, name, email, hero, sound, effects} = { 
      id: this.state.id, 
      name: this.state.name, 
      email: this.state.email, 
      hero: this.state.hero,
      sound: this.state.sound, 
      effects: this.state.effects,
    };
    setUser({ id, name, email, hero, sound, effects });
    this.props.dispatch(edit({
      id,
      name,
      email,
      hero,
      sound,
      effects,
    }));
    this.setState(() => ({ isChanged: false }));
  }

  render() {
    if(this.state.promiseIsRejected) {
      return <NotFoundPage />
    } else if(this.state.promiseIsResolved) {
      return (
        <div className="row-container row-container--top">
          <h2 className="row-container__header">{this.state.name}</h2>
          <div className="user">
            <ResultList userResults={this.state.userResults} />
            {this.props.currentUser.id === this.state.id && 
            <div className="user__settings">
              <h2>Настройки</h2>
              <MusicCheckbox checked={this.state.sound} onChange={this.handleSoundSettingsChange} />
              <EffectsCheckbox checked={this.state.effects} onChange={this.handleEffectsSettingsChange} />
              <HeroChoose
                currentHero={this.state.hero}
                handleHeroChange={this.handleHeroChange}
              />
              {this.state.isChanged && <button onClick={this.handleEdit} className="button button--success">Edit</button>}
            </div>}
          </div>
        </div>
      );
    }
    return (<LoadingStateComponent />);
  }
} 

export default connect(mapCurrentUserToProps)(UserPage);