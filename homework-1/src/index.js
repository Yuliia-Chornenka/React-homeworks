import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const presidentsArray = [ 'Эндрю Джексон', 'Мартин Ван Бюрен', 'Уильям Гаррисон' ];
const presidentsObjectArray = [
    { firstName: 'Джон', lastName: 'Тайлер', presidentIndex: 10 },
    { firstName: 'Джеймс Нокс', lastName: 'Полк', presidentIndex: 11 },
    { firstName: 'Закари', lastName: 'Тейлор', presidentIndex: 12 },
    { firstName: 'Миллард', lastName: 'Филлмор', presidentIndex: 13 },
    { firstName: 'Франклин', lastName: 'Пирс', presidentIndex: 14 },
];

const events = [
    {
        "id": "666958530825467",
        "title": "Friday open-air party w/ Lucarelli, Mihas and Yarik JR | Hide",
        "place": "Hide",
        "date": "2020-06-12T20:00:00.000Z"
    },
    {
        "id": "786185895252176",
        "title": "Захист скверу імені Чкалова",
        "place": "Сквер Им. Чкалова",
        "date": "2020-06-10T09:00:00.000Z"
    },
    {
        "id": "623921328209118",
        "title": "Живая музыка на летней террасе",
        "place": "От Заката до Рассвета",
        "date": "2020-06-14T17:00:00.000Z"
    },
    {
        "id": "909559356190295",
        "title": "Amer (2009)",
        "place": "Кіноклуб Кіноха",
        "date": "2020-06-13T15:00:00.000Z"
    },
    {
        "id": "589272605321022",
        "title": "В парк Межигорье на теплоходе",
        "place": "Причал №6, Почтовая пл.",
        "date": "2020-06-13T07:45:00.000Z"
    }
];

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTimeDay(time) {
    if (time > 21 || time < 5) {
        return 'Ночь';
    } else if (time > 5 && time < 11) {
        return 'Утро';
    } else if (time > 11 && time < 17) {
        return 'День';
    } else if (time > 17 && time < 21) {
        return 'Вечер';
    } else {
        return 'Время суток не известно';
    }
}

function sortArrObj(arr, objKey) {
    arr.sort((a, b) => a[objKey] > b[objKey] ? 1 : -1);
}

sortArrObj(events, 'date');

ReactDOM.render(
    <div>
        <ul>
            <li>Джордж Вашингтон</li>
            <li>Джон Адамс</li>
            <li>Томас Джефферсон</li>
        </ul>
        <ol>
            <li value='4'>Джеймс Мэдисон</li>
            <li>Джеймс Монро</li>
            <li>Джон Куинси Адамс</li>
        </ol>
        <ul>
            {presidentsArray.map((president) => {
                return <li key={president}> {president} </li>
            })}
        </ul>
        <ul style={{ backgroundColor: '#ddd', fontWeight: 'bold', paddingTop: '1em', paddingBottom: '1em' }}>
            {presidentsObjectArray.map((presidentObj) => {
                const { firstName, lastName, presidentIndex } = presidentObj;
                if (presidentIndex % 2 !== 0) {
                    return <li key={presidentIndex}> {lastName}, {firstName}, {presidentIndex}-й </li>
                }
            })}
        </ul>
        <ul>
            {events.map((event) => {
                const { id, title, place, date } = event;
                const dateInfo = new Date(date);

                return (
                    <li key={id}>
                        <a href={`https://www.facebook.com/events/${id}/`} target='_blank'
                           style={{ opacity: dateInfo < new Date() ? '0.5' : '1' }}>
                            {title}
                        </a>
                        <p>
                            {getTimeDay(dateInfo.getHours())}, {addZero(dateInfo.getDate())}/
                            {addZero(dateInfo.getMonth() + 1)}/
                            {dateInfo.getFullYear()}, {addZero(dateInfo.getHours())}:
                            {addZero(dateInfo.getMinutes())}:
                            {addZero(dateInfo.getSeconds())}
                        </p>
                        <p> {place} </p>
                    </li>
                )
            })}
        </ul>

        <form action="https://postman-echo.com/post" method="post">
            <label className="user">Имя:
                <input type="text" name="name" required className="user__input" />
            </label>
            <label className="user">Пароль:
                <input type="password" name="password" minLength="4" required className="user__input" />
            </label>
            <label>Базовый тариф
                <input type="radio" name="plan" value="basic" defaultChecked={true} />
            </label>
            <label>Премиум тариф
                <input type="radio" name="plan" value="premium" />
            </label>
            <label>Присылайте мне новости на почту
                <input type="checkbox" name="newsletter" value={true} defaultChecked={true} />
            </label>
            <input type="submit" value="Купить" />
        </form>
    </div>,
    document.getElementById('root')
);

serviceWorker.unregister();
