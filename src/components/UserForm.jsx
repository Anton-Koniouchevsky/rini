import React from 'react';
import HeroChoose from './HeroChoose';
import NameInput from './userForm/NameInput';
import EmailInput from './userForm/EmailInput';
import PasswordInput from './userForm/PasswordInput';
import MusicCheckbox from './userForm/MusicCheckbox';
import EffectsCheckbox from './userForm/EffectsCheckbox';

class UserForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    hero: 'cat',
    sound: true,
    effects: true,
  }

  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }

  handleEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  handlePasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }

  handleHeroChange = (hero) => {
    this.setState(() => ({ hero }));
  }

  handleSoundSettingsChange = (e) => {
    const isChecked = e.target.checked;
    this.setState(() => ({ sound: isChecked }));
  }

  handleEffectsSettingsChange = (e) => {
    const isChecked = e.target.checked;
    this.setState(() => ({ effects: isChecked }));
  }

  handleSubmitForm = async (e) => {
    e.preventDefault();
    const { name, email, password, hero, sound, effects } = this.state;
    this.setState(
      await this.props.onSubmit({
        name,
        email,
        password,
        hero,
        sound, 
        effects,
      }),
    );
    !this.state.error && this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p className={this.state.error ? 
          'user-form__error-block user-form__error' : 
          'user-form__error-block'}>{this.state.error ? `${this.state.error}` : ''}</p>
        <form onSubmit={this.handleSubmitForm} className="user-form">
          {this.props.showName && <NameInput value={this.state.name} onChange={this.handleNameChange} />}
          <EmailInput value={this.state.email} onChange={this.handleEmailChange} />
          <PasswordInput value={this.state.password} onChange={this.handlePasswordChange} />
          {this.props.showHeroChoose &&
          <div>
            <MusicCheckbox checked={this.state.sound} onChange={this.handleSoundSettingsChange} />
            <EffectsCheckbox checked={this.state.effects} onChange={this.handleEffectsSettingsChange} />
            <HeroChoose
              currentHero={this.state.hero}
              handleHeroChange={this.handleHeroChange}
            />
          </div>
          }
          <button className="button button--primary">OK</button>
        </form>
      </div>
    );
  }
}

export default UserForm;