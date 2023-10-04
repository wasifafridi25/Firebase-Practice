import React from "react";
import NavImg from "../Assets/logo.png";

export default function Nav({ register, login, user, loading }) {
  return (
    <nav>
      <div className="left">
        <img src={NavImg} alt="" className="nav__img" />
        <p>Backend Simplified</p>
      </div>
      <div className="right">
        <button className="btn" onClick={login}>
          Login
        </button>
        <button className="btn" onClick={register}>
          Register
        </button>

        {loading ? (
          "Loading..."
        ) : Object.keys(user).length !== 0 && (
          <button className="profile">{user.email[0].toUpperCase()}</button>
        ) 
        }
      </div>
    </nav>
  );
}
