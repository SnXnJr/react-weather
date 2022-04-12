import { Marker } from 'react-leaflet'
import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('../../img/marker.png'),
    iconSize: new L.Point(32, 32),
    className: 'leaflet-div-icon'
});
const MapMarker = (props) => {
    return (
        <Marker position={props.position} icon={iconPerson}></Marker>
    )
}
export default MapMarker