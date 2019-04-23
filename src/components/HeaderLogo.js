import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import FixedBar from "../elements/FixedBar";

const HeaderLogo = styled(FixedBar)`
  background: -webkit-linear-gradient(
    240deg,
    hsl(189, 100%, 50%),
    hsl(174, 79%, 49%),
    hsl(188, 81%, 59%),
    hsl(213, 62%, 61%),
    hsl(240, 100%, 70%)
  );
  -webkit-text-fill-color: white;
  height: 3em;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: 849px) {
    font-size: 28px;
  }
`;

function Header({ data }) {
  return (
    <HeaderLogo>
      <Logo>Posts</Logo>
      <Link to="/about">
        <h1 style={{ color: "white" }}>
          <em>About</em>
        </h1>
      </Link>
    </HeaderLogo>
  );
}

export default Header;
