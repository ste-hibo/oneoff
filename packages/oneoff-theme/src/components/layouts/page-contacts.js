import React from "react";
import { connect, styled } from "frontity";
import { colors } from "../../styles";
import { getTextWithoutParagraph } from "../../../utilities";
import ContactForm from "../ContactForm";

const PageContacts = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const { contacts } = state.theme;
  const {
    address,
    big_text,
    bottom_text,
  } = page.acf;

  const renderBigText = () => {
    return big_text ? (
      <StyledBigText
        dangerouslySetInnerHTML={{
          __html: getTextWithoutParagraph(big_text),
        }}
      ></StyledBigText>
    ) : null;
  };

  const renderAddress = () => {
    return address ? (
      <StyledAddress
        dangerouslySetInnerHTML={{
          __html: address,
        }}
      ></StyledAddress>
    ) : null;
  };

  const renderContacts = () => {
    return (
      <ContactsWrapper>
        <div>{`T. ${contacts[1][0]}`}</div>
        <div>{`M. ${contacts[0][0]}`}</div>
      </ContactsWrapper>
    );
  };

  const renderBottomText = (params) => {
    return (
      <StyledBottomText
        dangerouslySetInnerHTML={{
          __html: bottom_text,
        }}
      ></StyledBottomText>
    );
  };

  return (
    <Container>
      <StyledTextBlock>
        {renderBigText()}
        {renderAddress()}
        {renderContacts()}
        {renderBottomText()}
      </StyledTextBlock>
      <StyledFormBlock>
        <ContactForm/>
      </StyledFormBlock>
    </Container>
  );
};

export default connect(PageContacts);

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const StyledTextBlock = styled.div`
  height: 100%;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  flex: 1;
  margin: auto;
  padding-top: 20vh;
  padding-left: 4.5rem;
`;

const StyledFormBlock = styled.div`
  height: 100%;
  background-color: ${colors.WHITE};
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

const StyledBigText = styled.h1`
  font-size: 3.073vw;
  font-family: Circular Std;
  margin-bottom: 2rem;
`;

const StyledAddress = styled.div`
  font-family: Maison Neue Book;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 4.6875rem;
`;

const ContactsWrapper = styled.div`
  font-family: Maison Neue Light;
  font-size: 1.1875rem;
  margin-top: 1.6875rem;
  line-height: 1.7;
`;

const StyledBottomText = styled.div`
  font-family: Maison Neue;
  font-size: 1.0625rem;
  width: fit-content;
  margin-top: 3.5rem;
  border-top: 1px solid ${colors.WHITE}6e;
  padding-top: 2.5rem;
`;
