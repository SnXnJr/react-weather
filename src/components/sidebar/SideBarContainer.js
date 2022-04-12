import React, { useState } from 'react'
import {getPositionDispatch} from '../../store/mapReducer'

function timeStamp(date) {
    var currentDate = new Date(date * 1000);
    return currentDate.toDateString();
}
function getImgUrl(icon) {
    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return url;
}

function SideBarContainer(props) {

    const isError = props.state.isError;

    const [query, setQuery] = useState(''),
        weather = props.state.data;

    const search = evt => {
        if (evt.key === "Enter") {
            setQuery('');
            props.dispatch(getPositionDispatch(query, 'string'));
        }
    }
    return (
        <div className="sideBarWrapper">
            <div className="sideBarContainer">
                <div className="inputWrapper">
                    <input type="text"
                        onKeyPress={search}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Поиск..." />
                        {isError ? (<p>Ничего не найдено</p>) : ''}
                </div>
                {(typeof weather.main != 'undefined') ? (
                    <div>
                        <div className="placeInfo">
                            <h2>{weather.name}, {weather.sys.country}</h2>
                            <p>{timeStamp(weather.dt)}</p>
                        </div>
                        <div className="temperature">
                            {Math.round(weather.main.temp)}&deg; С
                        </div>
                        <div className="weatherConditions">
                            <img src={getImgUrl(weather.weather[0].icon)} />
                            {weather.weather[0].main}
                        </div>
                    </div>
                ) : ('')}
            </div>
        </div>
    )
}

export default SideBarContainer
