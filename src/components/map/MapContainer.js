import React, {useState, useEffect} from 'react'
import { useMapEvents, MapContainer, ZoomControl } from 'react-leaflet'
import {getPositionDispatch} from '../../store/mapReducer'
import Layers from './Layers'
import MapMarker from './MapMarker'

const WorldMapContainer = (props) => {

    const mapPosition = props.state.data;

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
          click(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            props.dispatch(getPositionDispatch(e.latlng, 'latlng'));
          }
        })
        useEffect(() => {
            if   (typeof mapPosition.main != 'undefined') {
                const coord = Object.values(mapPosition.coord).reverse();
                setPosition(coord);
                map.flyTo(coord, map.getZoom())
            }
        }, [mapPosition]);
        return position === null ? null : (
          <MapMarker position={position}/>
        )
      }

    return (
        <div className="mapContainer">
            <MapContainer
                center={[53.893009, 27.567444]}
                zoom={12}
                zoomControl={false}
                style={{ height: '100vh', width: '100%'}}>
                <Layers/>
                <ZoomControl position='topright'/>
                <LocationMarker />
            </MapContainer>
        </div>
    )
}

export default WorldMapContainer