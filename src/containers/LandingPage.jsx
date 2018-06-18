import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/images/cup.jpg';
import '../assets/images/money.jpg';
import '../assets/images/play.jpg';

const LandingPage = () => (
    <div>
      <section className="row-container row-container--promo">
        <h2 className="row-container__header">Учись играючи!</h2>
        <article className="row-container__content">Играть и учиться одновременно? Легко! Присоединяйся к <h2 className="logo">Rini!</h2></article>
        <div className="row-container__controls">
          <Link to='/sign-up' className="button button--success">Зарегистрироваться</Link>
          <Link to='/help' className="button button--white">Как играть?</Link>
        </div>
      </section>
      <section className="row-container row-container--pros">
        <div className="row-container__content">
          <section className="block">
            <img className="block__image" src="../assets/images/cup.jpg" alt="Стань победителем!" width="150" height="150" />
            <article className="block__content">
              <h3 className="block__header">Стань номером один!</h3>
              <p className="block__text">Соревнуйся с другими участниками, решая различные задания.</p>
            </article>
          </section>
          <section className="block">
            <img className="block__image" src="../assets/images/play.jpg" alt="Стань победителем!" width="150" height="150" />
            <article className="block__content">
              <h3 className="block__header">Играй с пользой!</h3>
              <p className="block__text">Главное оружие героя - твои знания. Порази всех врагов наповал!</p>
            </article>
          </section>
          <section className="block">
            <img className="block__image" src="../assets/images/money.jpg" alt="Стань победителем!" width="150" height="150" />
            <article className="block__content">
              <h3 className="block__header">Это бесплатно. Навсегда!</h3>
              <p className="block__text">Никакой рекламы, только получение новых знаний в игровой форме!</p>
            </article>
          </section>
          <div className="row-container__controls">
            <Link to='/play' className="button button--primary">Начать играть</Link>
          </div>
        </div>
      </section>
    </div>
);

export default LandingPage;