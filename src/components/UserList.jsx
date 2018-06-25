import React from 'react';
import { UserListItem } from './UserListItem';

const UserList = (props) => {
  return (
    <table className="users-list">
      <thead>
        <tr className="users-list__header">
          <th>#</th>
          <th>Имя игрока</th>
          <th>Дата</th>
          <th>Пройдено уровней</th>
        </tr>
      </thead>
      <tbody>
        {props.userResults.map((userResult, index) => {
          return <UserListItem  key={userResult.uuid} 
                                {...userResult} 
                                index={index + 1}/>
        })}
      </tbody>
    </table>
  )
};

export default UserList;
