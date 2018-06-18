import React from 'react';
import GameStatesSlider from '../components/GameStatesSlider';
import TaskSlider from '../components/TaskSlider';

const HelpPage = () => (
  <div>
    <section>
      <h2 className="row-container__header center">Как играть</h2>
      <article className="row-container__content">
        Ты и твой враг ходите по очереди. Во время своего хода ты можешь выбрать одно из четырех заклинаний, успешность применения которых зависит от твоих знаний. Если уровень здоровья твоего врага становится равным нулю ты переходишь на следующий уровень. Если уровень твоего здоровья становится равным нулю - игра заканчивается. Но не расстраивайся, ты всегда можешь начать играть заново и стать №1!
      </article>
      <GameStatesSlider />
    </section>
    <section>
      <h2 className="row-container__header center">Задания</h2>
      <article className="row-container__content">
        В игре представлены на данный момент девять типов задач, которые проверят твои знания в математике, английском и географии.
      </article>
      <TaskSlider />
    </section>
    <section className="row-container row-container--top">
      <h2 className="row-container__header">Технические особенности</h2>
      <article className="row-container__content">
        <ul>
          <li>Для хранения данных об игроках и играх, а также для аутентификации пользователей используется firebase.</li>
          <li>Одностраничное приложение построено на React+Redux+Router.</li>
          <li>Анимация игры выполнена в canvas'е.</li>
          <li>Проект собран с помощью webpack.</li>
          <li>За стили отвечает SCSS.</li>
        </ul>
      </article>
    </section>
  </div>
);

export default HelpPage;