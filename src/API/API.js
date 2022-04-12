import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});
const key = '355b822056cb9f7afe847b9c25ae58eb';

export const API = {
    getWeatherString(query) {
        return instance.get(`weather?q=${query}&appid=${key}&units=metric`)
            .then(response => {
                return response.data;
            });
    },
    getWeatherLatLng(query) {
        return instance.get(`weather?lat=${query.lat}&lon=${query.lng}&appid=${key}&units=metric`)
            .then(response => {
                return response.data;
            });
    }
}
