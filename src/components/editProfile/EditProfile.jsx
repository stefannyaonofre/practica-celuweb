import React, { useState } from "react";
import editImage from "/icons/pencil.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/auth/authThunk";
import "./editProfile.scss";

const EditProfile = () => {
  const { userLogged } = useSelector((state) => state.auth);
  const [edit, setEdit] = useState({});
  const [valueUser, setValueUser] = useState({ ...userLogged });
  const dispatch = useDispatch();

  const editUser = (event) => {
    setEdit({
      ...edit,
      [event.target?.name]: true,
    });
  };

  const handleEdit = (event) => {
    setEdit({
      ...edit,
      [event.target?.name]: false,
    });
    dispatch(updateUser(userLogged.id, valueUser));
  };

  const onChangeEdit = (event) => {
    setValueUser({
      [event.target?.name]: event.target?.value,
    });
  };

  return (
    <main className="main__edit">
      <div className="main__edit__container">
        <h4>Información de Usuario</h4>
        <div className="main__edit__container__item">
          <span>Imagen de Perfil</span>
          {edit.name ? (
            <div className="main__edit__container__item__edit">
              <input type="text" onChange={onChangeEdit} name="name" value={valueUser?.name} />
              <button onClick={handleEdit} type="submit" name="name">
                Guardar
              </button>
            </div>
          ) : (
            <div className="main__edit__container__item__info">
              <span>{userLogged?.name}</span>
              <figure name="name" className="iconedit" onClick={editUser}>
                <img src={editImage} name="name" />
              </figure>
            </div>
          )}
          {edit?.age ? (
            <div className="main__edit__container__item__edit">
              <input type="text" onChange={onChangeEdit} name="age" value={valueUser?.age} />
              <button onClick={handleEdit} type="submit" name="age">
                Guardar
              </button>
            </div>
          ) : (
            <div className="main__edit__container__item__info">
              <span>Edad</span>
              <span>{userLogged?.age}</span>
              <figure name="age" className="iconedit" onClick={editUser}>
                <img src={editImage} name="age" />
              </figure>
            </div>
          )}
          {edit.image ? (
            <div className="main__edit__container__item__edit">
              <input type="text" onChange={onChangeEdit} name="image" />
              <button onClick={handleEdit} type="submit" name="image">
                Guardar
              </button>
            </div>
          ) : (
            <div className="main__edit__container__item__info">
              <figure className="main__edit__container__item__info__image">
                <img src={userLogged.image} />
              </figure>
              <figure name="image" className="iconedit" onClick={editUser}>
                <img src={editImage} name="image" />
              </figure>
            </div>
          )}
          {edit?.phone ? (
            <div className="main__edit__container__item__edit">
              <input type="text" onChange={onChangeEdit} name="phone" value={valueUser?.phone} />
              <button onClick={handleEdit} type="submit" name="phone">
                Guardar
              </button>
            </div>
          ) : (
            <div className="main__edit__container__item__info">
              <span>Teléfono</span>
              <span>{userLogged?.phone}</span>
              <figure name="phone" className="iconedit" onClick={editUser}>
                <img src={editImage} name="phone" />
              </figure>
            </div>
          )}
          {edit?.email ? (
            <div className="main__edit__container__item__edit">
              <input type="text" onChange={onChangeEdit} name="email" value={valueUser?.email} />
              <button onClick={handleEdit} type="submit" name="email">
                Guardar
              </button>
            </div>
          ) : (
            <div className="main__edit__container__item__info">
              <span>{userLogged?.email}</span>
              <figure name="email" className="iconedit" onClick={editUser}>
                <img src={editImage} name="email" />
              </figure>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default EditProfile;
