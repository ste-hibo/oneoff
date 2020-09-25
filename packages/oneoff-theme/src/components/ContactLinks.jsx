import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";
import { colors, calcLineThroughHeight } from "../styles";

const ContactLinks = ({ state }) => {
  const { contacts } = state.theme;

  return contacts.map((contact, i) => (
    <ContactLinkStyled key={`${contact[1]}_${i}`} link={contact[1]}>
      {contact[0]}
    </ContactLinkStyled>
  ));
};

export default connect(ContactLinks);

const fontSize = "1.6875rem";
const ContactLinkStyled = styled(Link)`
  color: ${colors.WHITE};
  padding-top: 0.2rem;
  font-family: Maison Neue Book;
  font-size: ${fontSize};

  &::after {
    background-color: ${colors.WHITE};
    height: ${calcLineThroughHeight(fontSize)};
  }
`;
