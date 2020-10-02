import React, { useEffect } from "react";
import { connect, Global } from "frontity";
import { colors } from "../styles";

const ContactForm = ({ state, libraries }) => {
  const data = state.source.get("/contacts");
  const contactForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    const wpcf7Elm = document.querySelector(".wpcf7");
    wpcf7Elm.addEventListener("submit", submitForm, false);

    return () => {
      wpcf7Elm.removeEventListener("submit", submitForm);
    };
  }, []);

  const submitForm = (ev) => {
    document.addEventListener("click", closeSuccessPanel, false);
  };

  const closeSuccessPanel = (ev) => {
    const successPanel = document.querySelector(".css-xwf3m5-SuccessMessage");
    if (successPanel) {
      successPanel.remove();
    }
    document.removeEventListener("click", closeSuccessPanel);
  }

  return (
    <>
      <Html2React html={contactForm.content.rendered} />
      <Global
        styles={`
        div[role=form] {
          padding-left: 5vw;
        }

        form {
          font-family: Maison Neue Book;
          display: flex;
          flex-wrap: wrap;
          width: 58vw;
          font-size: 1.0625rem;

          p {
            margin-right: 4.75rem;
            margin-bottom: 8vh;
          }

          p:nth-of-type(5) {
            padding-right: 10rem;
            margin-bottom: 1rem;
          }

          p:nth-of-type(5), p:nth-of-type(6) {
            width: 100%;
          }

          p:nth-of-type(7) {
            width: 83%;
            display: flex;
            justify-content: center;
          }

          textarea {
            width: 100%;
            font-family: Maison Neue Book;
            border-color: ${colors.BLACK};
            font-size: 1.2rem;
            height: 12.75rem;

            &:focus {
              outline: none;
            }
          }

          label {
          }

          input {
            border: none;
            border-bottom: 1px solid ${colors.BLACK};
            font-size: 1.0625rem;

            &[type=checkbox] {
            }

            &:focus {
              outline: none;
            }
          }

          input[type=submit] {
            border: none;
            font-size: 1rem;
            padding: 1.35rem 5rem;
            color: white;
            text-transform: uppercase;
            background-color: ${colors.GOLD};
            font-family: Maison Neue Demi;
            cursor: pointer;
            transition: background .25s;

            &:hover {
              background-color: ${colors.BLACK};
            }
          }
        }

        .css-xwf3m5-SuccessMessage, .css-1v5tu5l-ErrorMessage, .css-dp40ev-Processing {
          width: 44.5vw;
          margin-top: -4rem;
          padding: 0.75rem 1.25rem;
          border: none !important;
          text-align: center;
        }

        .css-xwf3m5-SuccessMessage {
          width: 100vw;
          height: 110vh;
          position: absolute;
          top: 0;
          left: 0;
          background-color: black;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 3rem;
        }

        .css-1v5tu5l-ErrorMessage {
          color: ${colors.ERROR};
        }
      `}
      />
    </>
  );
};

export default connect(ContactForm);
