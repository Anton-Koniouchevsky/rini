import React from 'react';
import Modal from 'react-modal';
import { getRandomArrayItem } from '../utils/randomFunctions';
import ArithmeticTask from './tasks/ArithmeticTask';
import ScrambleTask from './tasks/ScrambleTask';
import SpeechSynthesisTask from './tasks/SpeechSynthesisTask';
import VocabularyTask from './tasks/VocabularyTask';
import * as vocabulary from '../assets/tasks/vocabulary.json';
import * as countries from '../assets/tasks/countries.json';
import CountryByFlagTask from './tasks/CountryByFlagTask';
import CapitalsTask from './tasks/CapitalsTask';
import SequenceTask from './tasks/SequenceTask';
import GreaterNumberTask from './tasks/GreaterNumberTask';
import MissedNumberTask from './tasks/MissedNumberTask';

Modal.setAppElement('#app');

const TaskModal = (props) => {
  const tasks = [
    <ArithmeticTask setTaskResult={props.setTaskResult} />,
    <ScrambleTask setTaskResult={props.setTaskResult} />,
    <SpeechSynthesisTask setTaskResult={props.setTaskResult} />,
    <VocabularyTask setTaskResult={props.setTaskResult} vocabulary={vocabulary} />,
    <CountryByFlagTask setTaskResult={props.setTaskResult} countries={countries} />,
    <CapitalsTask setTaskResult={props.setTaskResult} countries={countries} />,
    <GreaterNumberTask setTaskResult={props.setTaskResult} />,
    <MissedNumberTask setTaskResult={props.setTaskResult} />,
    <SequenceTask setTaskResult={props.setTaskResult} />,
  ];

  return (
    <Modal
      isOpen={!!props.isOpen}
      contentLabel="Task"
      className="task-modal" 
    >
      {getRandomArrayItem(tasks)}
    </Modal>
  );
}

export default TaskModal;