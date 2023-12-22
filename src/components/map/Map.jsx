import React, { useEffect, useState } from 'react';
import './map.scss';
import { getPolygons } from '../../services/data';
import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {

  const [polygons, setPolygons] = useState([]);
 

  useEffect(() => {
    consultPolygons();
  }, []);

  const consultPolygons = async () => {
    try {
      const resul = await getPolygons();
      setPolygons(resul?.features);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="main__map">
          <h4>Distribución Politica Barrios de Medellín</h4>
          <div className="main__map__container">
            <MapContainer
              id="mapid"
              center={{ lat: "6.25184", lng: "-75.56359" }}
              zoom={13}
              className="main__map__container__mapa"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[4.53389, -75.68111]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              {polygons?.map((item, index) =>
                item.type === "Polygon" && item.coordinates ? (
                  <Polygon
                    pathOptions={{ color: "green" }}
                    positions={item.coordinates[0].map(([lng, lat]) => [
                      lat,
                      lng,
                    ])}
                    key={index}
                  />
                ) : null
              )}
            </MapContainer>
          </div>
        </section>
  )
}

export default Map