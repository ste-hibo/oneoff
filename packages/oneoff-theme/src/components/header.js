import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import Image from "@frontity/components/image";

const Header = ({ state }) => {
  const logoBlackUrl = `${state.frontity.url}wp-content/uploads/2020/09/logo-small.png`;
  const logoWhiteUrl = `${state.frontity.url}wp-content/uploads/2020/09/logo-small-white.png`;

  return (
    <>
      <Container>
        <StyledLink link="/">
          <Logo src={logoBlackUrl} alt="Logo"/>
        </StyledLink>
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Logo = styled(Image)`
  margin: 0;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
