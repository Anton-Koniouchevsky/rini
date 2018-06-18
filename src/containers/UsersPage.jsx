import React from 'react';
import UserList from '../components/UserList';
import { getTopUsers } from '../store/firebase/database';
import NotFoundPage from './NotFoundPage';
import LoadingStateComponent from '../components/LoadingStateComponent';

class UsersPage extends React.Component {
  state = {};
  
  componentDidMount() {
    getTopUsers()
      .then((userResults) => {        
        this.setState({ 
          promiseIsResolved: true,
          userResults
        });
      })
      .catch( () => {
        this.setState({ 
          promiseIsRejected: true
        });
      });    
  }

  render() {
    if(this.state.promiseIsRejected) {
      return <NotFoundPage />
    } else if(this.state.promiseIsResolved) {
      return (
        <div className="row-container row-container--top">
          <h2 className="row-container__header">Таблица рекордов</h2>
          <UserList userResults={this.state.userResults} />
        </div>
      );
    }
    return (<LoadingStateComponent />);
  }
} 

export default UsersPage;