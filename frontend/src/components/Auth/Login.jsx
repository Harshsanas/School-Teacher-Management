import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import { userLogin } from "../login/action";

const LForm = styled.div`
margin-top: 200px;
margin-left: 500px;
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

export default function Login() {
  const [form, setForm] = useState("");

  const { isAuth } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    //setForm("");
    dispatch(userLogin(form));
    console.log(form);
  };

  return (
    <>
      {!isAuth ? (
        <LForm>
          <form onSubmit={handleOnSubmit}>
            <input
              onChange={handleChange}
              type="text"
              placeholder="enter yor username"
              name="username"
              value={form.username}
            />
            <input
              onChange={handleChange}
              type="password"
              placeholder="enter yor password"
              name="password"
              value={form.password}
            />

            <button type="submit">LOGIN</button>
          </form>
        </LForm>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </>
  );
}
