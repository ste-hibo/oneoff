import React from "react";
import { colors } from "../../styles";
import { styled } from "frontity";
import ContactLinks from "../ContactLinks";

const ContactsBlock = () => {
  const text = "Contact us</br>For your next event";

  const renderContactLinks = () => {
    return (
      <ContactsWrapper>
        <ContactLinks />
      </ContactsWrapper>
    );
  };

  return (
    <BlockWrapper>
      <StyledText dangerouslySetInnerHTML={{ __html: text }}></StyledText>
      {renderContactLinks()}
    </BlockWrapper>
  );
};

export default ContactsBlock;

const BlockWrapper = styled.div`
  width: 101vw;
  height: 100vh;
  background-color: ${colors.GOLD};
  display: flex;
  align-items: center;
  z-index: 1;
`;

const StyledText = styled.div`
  font-size: 3.6875rem;
  font-family: Circular Std;
  color: ${colors.WHITE};
  padding-left: 10vw;
`;

const ContactsWrapper = styled.div`
`;
