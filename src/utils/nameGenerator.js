import { getRandomIndex } from './randomFunctions';

const samples = {
  title: [
    'Адский',
    'Коварный',
    'Ужасный',
    'Дикий',
    'Бешеный',
    'Зверский',
    'Свирепый',
    'Лютый',
    'Лукавый',
    'Ушлый',
  ],
  family: [
    'Огр',
    'Тролль',
    'Исполин',
    'Монстр',
    'Здоровяк',
    'Толстяк',
    'Амбал',
    'Страхолюд',
    'Страшила',
    'Гигант',
  ],
  name: [
    'Акамир',
    'Болеслав',
    'Бранимир',
    'Витомир',
    'Домаслав',
    'Милорад',
    'Пересвет',
    'Ратибор',
    'Светозар',
    'Молчан',
  ],
};

const getName = () => {
  return `${samples.title[getRandomIndex(10)]} ${samples.family[getRandomIndex(10)]} ${samples.name[getRandomIndex(10)]}`;
}

export { getName };