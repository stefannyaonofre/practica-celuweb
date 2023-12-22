import React, { useState } from "react";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { signOff } from "../../store/auth/authThunk";
import EditProfile from "../../components/editProfile/EditProfile";
import Map from "../../components/map/Map";

const Home = () => {

  const { userLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isMap, setIsMap] = useState(true);

  const setSignOff = () => {
    dispatch(signOff());
  };

  const seeMap = () => {
    setIsMap(true)
  }

  const seeEditProfile = () => {
    setIsMap(false)
  }

  return (
    <div className="main__home">
      <section className="main__home__info">
        <div className="main__home__info__perfil">
          <figure className="main__home__info__perfil__image">
            <img src={userLogged?.image} />
          </figure>
          <h4>{userLogged?.name}</h4>
          <span onClick={seeMap}>Mapa</span>
          <span onClick={seeEditProfile}>Editar Perfil</span>
          <button
            className="main__home__info__perfil__button"
            onClick={setSignOff}
          >
            Cerrar Sesión
          </button>
        </div>
      </section>
      {isMap == true ? (
        <Map/>
      ) : (
        <EditProfile />
      )}
    </div>
  );
};

export default Home;
