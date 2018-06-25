import React from 'react';
import Modal from 'react-modal';
import ArithmeticTask from './tasks/ArithmeticTask';
import ScrambleTask from './tasks/ScrambleTask';
import SpeechSynthesisTask from './tasks/SpeechSynthesisTask';
import VocabularyTask from './tasks/VocabularyTask';
import CountryByFlagTask from './tasks/CountryByFlagTask';
import CapitalsTask from './tasks/CapitalsTask';
import SequenceTask from './tasks/SequenceTask';
import GreaterNumberTask from './tasks/GreaterNumberTask';
import MissedNumberTask from './tasks/MissedNumberTask';
import { getRandomIndex } from '../utils/randomFunctions';

Modal.setAppElement('#app');

class TaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = [
      <ArithmeticTask setCorrectAnswer={this.setCorrectAnswer} />, 
      <SpeechSynthesisTask setCorrectAnswer={this.setCorrectAnswer} />,
      <VocabularyTask setCorrectAnswer={this.setCorrectAnswer} />,
      <CountryByFlagTask setCorrectAnswer={this.setCorrectAnswer} />,
      <CapitalsTask setCorrectAnswer={this.setCorrectAnswer} />,
      <GreaterNumberTask setCorrectAnswer={this.setCorrectAnswer} />,
      <MissedNumberTask setCorrectAnswer={this.setCorrectAnswer} />,
      <ScrambleTask setCorrectAnswer={this.setCorrectAnswer} setValue={this.setValue} />,
      <SequenceTask setCorrectAnswer={this.setCorrectAnswer} setValue={this.setValue} />,
    ];
    this.DnDTASKS = 7;
  }

  state = {};

  componentDidMount() {
    this.init();
  }

  init = () => {
    this.setState(() => ({value: '', currentTask: getRandomIndex(this.tasks.length)}));
  }

  handleKeyboardClick = (event) => {
    if(event.key === 'Enter') {
      this.handleClick();
    }
  }

  handleClick = () => {
    const isSuccessful = this.state.correctAnswer.includes(this.state.value.trim().toLowerCase());
    this.init();
    this.props.setTaskResult(isSuccessful);
  }

  setCorrectAnswer = (correctAnswer) => {
    this.setState(() => ({ correctAnswer }));
  }

  setValue = (value) => {
    this.setState(() => ({ value }));
  }

  handleChange = (event) => {
    event.persist();
    this.setState(() => ({ value: event.target.value }));
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.isOpen}
        contentLabel="Task"
        className="task-modal" 
      >
        
        <div className="custom-modal">
          {this.tasks[this.state.currentTask]}
          {this.state.currentTask < this.DnDTASKS && <input 
            className="custom-modal__input" 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange}
            onKeyPress={this.handleKeyboardClick} 
            autoFocus/>}
          <button onClick={this.handleClick} className="button button--success">Проверить</button>
        </div>
      </Modal>
    );
  }
} 

export default TaskModal;