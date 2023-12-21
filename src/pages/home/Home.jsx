import React, { useEffect, useState } from "react";
import "./home.scss";
import { getPolygons } from "../../services/data";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { signOff } from "../../store/auth/authThunk";

const Home = () => {
  const [polygons, setPolygons] = useState([]);
  const { userLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const [verticesPolygon , setVerticesPolygon] = useState([]);

  useEffect(() => {
    consultPolygons();
    // console.log(polygons[0]?.coordinates[0])
    // buildPolygons();
  }, []);

  const consultPolygons = async () => {
    try {
      const resul = await getPolygons();
      setPolygons(resul?.features);
      // console.log(resul.features[0].coordinates[0]);
      // console.log(resul?.features);
    } catch (error) {
      console.log(error);
    }
  };

  const setSignOff = () => {
    dispatch(signOff())
  }

  // const buildPolygons = () => {
  //   // console.log(polygons);

  //   polygons.forEach(element => {
  //     // console.log(element?.coordinates)
  //     element?.coordinates.forEach(coordinate => {
  //       // console.log(coordinate);
  //       const polygonVertices = [
  //         [coordinate[0] + 0.01, coordinate[1] - 0.01],
  //         [coordinate[0] - 0.01, coordinate[1] - 0.01],
  //         [coordinate[0] - 0.01, coordinate[1] + 0.01],
  //         [coordinate[0] + 0.01, coordinate[1] + 0.01],
  //       ];
  //       setVerticesPolygon(...verticesPolygon, polygonVertices)
  //       // coordinate.forEach(item => {
  //       //   // console.log(item)

  //       // })
  //     })

  //   })
  //   // polygons[0]?.coordinates[0].forEach(element => {
  //   //   element?.coordinates
  //   // });
  // }

  return (
    <div className="main__home">
      <section className="main__home__info">
        <div className="main__home__info__perfil">
          <figure className="main__home__info__perfil__image">
            <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
          </figure>
          <h4>{userLogged?.name}</h4>
          <button className="main__home__info__perfil__button" onClick={setSignOff}>
            Cerrar Sesión
          </button>
        </div>
      </section>
      <section className="main__home__map">
        <h4>Distribución Politica Barrios de Medellín</h4>
        <div className="main__home__map__container">
          <MapContainer
            id="mapid"
            center={{ lat: "6.25184", lng: "-75.56359" }}
            zoom={13}
            className="main__home__map__container__mapa"
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
    </div>
  );
};

export default Home;
