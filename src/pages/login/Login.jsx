import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginWithEmailAndPassword } from "../../store/auth/authThunk";

const Login = () => {

  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginWithEmailAndPassword(data));
  }

  return (
    <main className="main__login">
      <div className="main__login__info">
        <figure className="main__login__logo">
          <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
        </figure>
        <form className="main__login__form" onSubmit={handleSubmit(onSubmit)}>
        <h4>Iniciar Sesión</h4>
        <input type="text" className="form-control" placeholder="user@gmail.com" {...register("email", { required: true })} />
        <input type="password" className="form-control" placeholder="Contraseña" {...register("password", { required: true })} />
        <button type="submit" className="main__login__button">Iniciar Sesión</button>
        <Link to={'/register'}>Registrase</Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
