import React, { useRef } from "react";
import { colors } from "../../styles";
import { connect, styled } from "frontity";
import ContactLinks from "../ContactLinks";
import FollowerElement from "../FollowerElement";

const ContactsBlock = ({ state, actions }) => {
  const { mainText, bottomText, cursorText } = state.theme.contactsSettings;
  const wrapper = useRef();

  const renderContactLinks = () => {
    return (
      <div>
        <ContactLinks />
      </div>
    );
  };

  const renderPartnerText = () => {
    return (
      <StyledPartnerText
        dangerouslySetInnerHTML={{ __html: bottomText }}
      ></StyledPartnerText>
    );
  };

  const onFollowerElementClick = () => {
    actions.router.set("/contacts/");
  };

  return (
    <BlockWrapper>
      <ContentWrapper ref={wrapper} onClick={onFollowerElementClick}>
        <StyledMainText
          dangerouslySetInnerHTML={{ __html: mainText }}
        ></StyledMainText>
        <BottomContent>
          {renderContactLinks()}
          {renderPartnerText()}
        </BottomContent>
        <FollowerElement parent={wrapper}>{cursorText}</FollowerElement>
      </ContentWrapper>
    </BlockWrapper>
  );
};

export default connect(ContactsBlock);

const contentLeftPadding = "5.5rem";
const BlockWrapper = styled.div`
  width: 101vw;
  height: 100vh;
  background-color: ${colors.GOLD};
  z-index: 1;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  cursor: none;
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${contentLeftPadding};
  align-items: flex-end;
  padding-bottom: 13.5vh;
`;

const StyledPartnerText = styled.div`
  font-family: Maison Neue;
  font-size: 1.75rem;
  color: ${colors.WHITE};
`;

const StyledMainText = styled.div`
  font-size: 3.6875rem;
  font-family: Circular Std;
  color: ${colors.WHITE};
  margin-bottom: 24vh;
  padding-left: ${contentLeftPadding};
`;
