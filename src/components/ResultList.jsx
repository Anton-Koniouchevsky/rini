import React from 'react';
import { ResultListItem } from './ResultListItem';

const UserList = (props) => {
  return (
    <div className="user__results">
      <h2>Результаты игрока</h2>
      <ol className="user__results">
        {props.userResults.map(userResult => {
          return <ResultListItem key={userResult.uuid} {...userResult}/>
        })}
      </ol>    
    </div>
  )
};

export default UserList;