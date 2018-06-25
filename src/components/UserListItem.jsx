import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({id, name, date, level, index}) => (
  <tr className="user-stats">
    <td className="user-stats__column">{index}.</td>
    <td className="user-stats__column">
      <Link to={{pathname: `/users/${id}`}} className="user-stats__profile-link" >{name}</Link>
    </td>
    <td className="user-stats__column">{new Date(date).toLocaleDateString()} </td>
    <td className="user-stats__column">{level}</td>
  </tr>
);

export { UserListItem };