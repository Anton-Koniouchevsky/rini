import React from 'react';
import { UserListItem } from './UserListItem';

const UserList = (props) => {
  return (
    <div className="users-list">
      <table className="users-list__table">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя игрока</th>
            <th>Дата</th>
            <th>Пройдено уровней</th>
          </tr>
        </thead>
        <tbody>
          {props.userResults.map((userResult, index) => {
            return <UserListItem key={userResult.uuid} {...userResult} index={index + 1}/>
          })}
        </tbody>
      </table>
    </div>
  )
};

export default UserList;
