import React from "react";
import "./register.scss";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../store/auth/authThunk";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password.length < 6) {
      Swal.fire(
        "Oops!",
        "La contraseña debe tener mínimo 6 caracteres",
        "error"
      );
    }else{
      dispatch(createUser(data));
      Swal.fire(
        "Excelente!",
        "Haz Creado tu cuenta con exito",
        "success"
       );
       navigate('/');
    }
  };

  return (
    <main className="main__register">
      <div className="main__register__info">
        <figure className="main__register__logo">
          <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
        </figure>
        <form
          className="main__register__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4>Registro</h4>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Completo"
            {...register("name", { required: true })}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Edad"
            {...register("age", { required: true })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Url Imagen"
            {...register("image", { required: true })}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Telefono"
            {...register("phone", { required: true })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Correo"
            {...register("email", { required: true })}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          <button type="submit" className="main__register__button">
            Registrarse
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
