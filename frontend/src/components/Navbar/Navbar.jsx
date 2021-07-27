import React from "react";
import styled from "styled-components";
export default function Navbar(props) {

  const { token, user } = props;
    

const HeaderElem = styled.header`
padding-top: 10px;
  background-color: whitesmoke;
  box-shadow: 0 0px 4px 4px grey;
  & > div {
    /* height: 72px; */
    padding: 0px 4px 8px 30px;
  }
  .logo {
    font-size: 2rem;
    font-weight: bold;
  }
  .right{
      float: right;
      display: flex;

      >div{
          margin-right: 4rem;
          margin-top: -30px;
          cursor: pointer;
      }
  }
`;

const NavLink=styled.div`
text-decoration: none;
`
;
    return (
      <HeaderElem>
        <div>
          <NavLink to="/" className="logo">
            School Teacher Management
          </NavLink>
          <div className="right">
            <div>
            {token ? (
              <p>{user.name}</p>
            ) : (
              <NavLink to="/signup">Sign Up</NavLink>
            )}</div>
          </div>
        </div>
      </HeaderElem>
    );
}
