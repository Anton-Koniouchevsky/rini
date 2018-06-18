import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/images/not-found.png';

const NotFoundPage = () =>
  <div className="row-container row-container--top">
    <h2 className="row-container__header">Такой страницы не существует</h2>
    <img src="../assets/images/not-found.png" alt="Страница не найдена"/>
    <Link to="/" className="button button--success">На главную</Link>
  </div>

export default NotFoundPage;