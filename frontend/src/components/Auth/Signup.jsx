// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router";
// import styled from "styled-components";
// import { userRegister } from "../redux/register/action";

// const LForm = styled.div`
//   form {
//     width: 500px;
//     display: flex;
//     gap: 20px;
//     flex-direction: column;
//   }
//   input {
//     border: none;
//     outline: none;
//     border-bottom: 2px solid;
//     height: 35px;
//     font-size: 20px;
//     padding-left: 20px;
//     margin: 20px, auto;
//   }
//   button {
//     background: #41af7d;
//     cursor: pointer;
//     border-radius: 5px;
//   }
// `;

// export default function Registration() {
//   const { message } = useSelector((state) => state.register);
//   const [form, setForm] = useState("");

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm({ ...form, [name]: value });
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     // setForm("");
//     dispatch(userRegister(form));
//     //console.log(form);
//   };

//   return (
//     <>
//       <LForm>
//         <form onSubmit={handleOnSubmit}>
//           <input
//             onChange={handleChange}
//             type="text"
//             placeholder="enter your name"
//             value={form.name}
//             name="name"
//           />
//           <input
//             onChange={handleChange}
//             type="text"
//             placeholder="enter your email"
//             value={form.email}
//             name="email"
//           />
//           <input
//             onChange={handleChange}
//             type="password"
//             placeholder="enter yor password"
//             name="password"
//             value={form.password}
//           />
//           <input
//             onChange={handleChange}
//             type="text"
//             placeholder="enter yor username"
//             name="username"
//             value={form.username}
//           />
//           <input
//             onChange={handleChange}
//             type="number"
//             placeholder="enter yor mobile"
//             name="mobile"
//             value={form.mobile}
//           />
//           <textarea
//             onChange={handleChange}
//             type="text"
//             name="description"
//             placeholder="Enter description here..."
//             value={form.description}
//           ></textarea>
//           <button type="submit">REGISTER</button>
//         </form>
//       </LForm>
//       {message === "Registration Success" && <Redirect to="/login" />}
//     </>
//   );
// }
