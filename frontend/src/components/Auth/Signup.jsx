import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { connect } from "react-redux";

import styled from "styled-components";

import {userRegister} from "../register/action"

const LForm = styled.div`
  form {
    width: 500px;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  input {
    border: none;
    outline: none;
    border-bottom: 2px solid;
    height: 35px;
    font-size: 20px;
    padding-left: 20px;
    margin: 20px, auto;
  }
  button {
    background: #41af7d;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export default function Signup(props) {

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",

    errors: {
      name: "",
      email: "",
      password: "",
    },
  });

    const history = useHistory();

    const handleChange = (event) => {
      const { name, value } = event.target;
      const errors = { ...state.errors };
      switch (name) {
        case "email":
          errors.email =
            value.indexOf("@") === -1 ? "email must be include @ " : "";
          break;
        case "password":
          let passwordError;
          let vr = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/;
          if (value.length < 6) {
            passwordError = "password must b included 6 charecters";
          }
          if (!vr.test(value)) {
            passwordError =
              "password must be include 8 at least one letter, one number and one special character";
          }
          errors.password = passwordError;
          break;
        case "phone":
          if (/^\d{10}$/.test(value)) {
            errors.phone = "";
          } else {
            errors.phone = "Invalid number; must be ten digits";
          }
          break;
        default:
          break;
      }
      setState({ ...state, [name]: value, errors });
    };
    const { name, email, password, phone, errors } = state;

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(history);
      const data = await props.dispatch(
        userRegister({
          name,
          email,
          password,
        })
      );
      console.log(data);
      if (data) {
        history.push("/login");
      }
    };

  return (
    <section>
      <div className="container">
        <form className="flex-40" onSubmit={handleSubmit}>
          <h2>CREATE ACCOUNT</h2>
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="user name"
              className="form-control"
              value={name}
              onChange={handleChange}
            />
            <span className="text-red-500">{errors.firstName}</span>
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="form-control"
            />
            <span className="text-red-500">{errors.email}</span>
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              className="form-control"
            />
            <span className="text-red-500">{errors.password}</span>
          </div>
          <div className="form-control">
            <button className="hover:bg-black rounded" type="submit">
              CREATE
            </button>
          </div>
          <Link to="/login" className="link">
            Already have account? login
          </Link>
        </form>
      </div>
    </section>
  );
}
