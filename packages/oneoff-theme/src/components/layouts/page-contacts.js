import React from "react";
import { connect, styled } from "frontity";
import { colors } from "../../styles";

const PageContacts = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const {
    address,
    big_text,
    email,
    phone,
    policy_agreement,
    send_button_text,
  } = page.acf;

  return (
    <Container>
      <StyledTextBlock></StyledTextBlock>
      <StyledFormBlock />
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
  flex: 1;
`;

const StyledFormBlock = styled.div`
  height: 100%;
  background-color: ${colors.WHITE};
  flex: 2;
`;
