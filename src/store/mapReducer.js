import { API } from '../API/API';

const SET_POSITION = "SET_POSITION",
      SET_ERROR = "SET_ERROR"

const InitialState = {
    data: [],
    isError: false
};

const PositionReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_POSITION: {
            return { ...state, data: action.data, isError: false };
        }
        case SET_ERROR: {
            return {...state, data: [], isError: true}
        }
        default:
            return state;
    }
}

export const setPositionAC = (data) => ({ type: SET_POSITION, data });
export const setErrorAC = () => ({ type: SET_ERROR });

export const getPositionDispatch = (query, type) => {
    switch (type) {
        case 'string': {
            return dispatch => {
                API.getWeatherString(query)
                    .then(result => dispatch(setPositionAC(result)))
                    .catch(error => dispatch(setErrorAC()));
            }
        }
        case 'latlng': {
            return dispatch => {
                API.getWeatherLatLng(query)
                    .then(result => dispatch(setPositionAC(result)))
                    .catch(error => dispatch(setErrorAC()));
            }
        }
        default: {
            return;
        }
    }
}

export default PositionReducer;