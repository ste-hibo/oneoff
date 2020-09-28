import React from "react";
import { colors } from "../../styles";
import { styled } from "frontity";
import ContactLinks from "../ContactLinks";

const ContactsBlock = () => {
  const mainText = "Contact us</br>For your next event";
  const partnerText = "Partner of <strong>hibo</strong>";

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
        dangerouslySetInnerHTML={{ __html: partnerText }}
      ></StyledPartnerText>
    );
  };

  return (
    <BlockWrapper>
      <ContentWrapper>
        <StyledMainText
          dangerouslySetInnerHTML={{ __html: mainText }}
        ></StyledMainText>
        <BottomContent>
          {renderContactLinks()}
          {renderPartnerText()}
        </BottomContent>
      </ContentWrapper>
    </BlockWrapper>
  );
};

export default ContactsBlock;

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
