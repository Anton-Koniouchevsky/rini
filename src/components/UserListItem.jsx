import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({id, name, date, level, index}) => (
  <tr>
    <td>{index}.</td>
    <td><Link to={{pathname: `/users/${id}`}} className="users-list__link" >{name}</Link></td>
    <td>{new Date(date).toLocaleDateString()} </td>
    <td>{level}</td>
  </tr>
);

export { UserListItem };