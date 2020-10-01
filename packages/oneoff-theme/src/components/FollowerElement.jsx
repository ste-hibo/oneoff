import React, { useEffect, useRef } from "react";
import { styled } from "frontity";
import { colors } from "../styles.js";

const FollowerElement = ({ children, parent }) => {
  const follower = useRef();

  const pos = { x: 0, y: 0 }; // cursor's coordinates
  const speed = 0.7; // between 0 and 1

  useEffect(() => {
    if (!parent.current) return;

    if (parent.current) {
      parent.current.addEventListener("mousemove", updateCursor);
      parent.current.addEventListener("mouseout", hideCursor);
    }
    return () => {
      if (parent.current) {
        parent.current.removeEventListener("mousemove", updateCursor);
        parent.current.removeEventListener("mouseout", hideCursor);
      }
    };
  }, []);

  const updateCursor = (e) => {
    const diffX = Math.round(e.clientX - pos.x);
    const diffY = Math.round(e.clientY - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const translate = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

    follower.current.style.transform = translate;
    follower.current.style.opacity = 1;
  };

  const hideCursor = () => {
    follower.current.style.opacity = 0;
  };

  return (
    <StyledFollowerElement ref={follower} style={{ opacity: 0 }}>
      {children}
    </StyledFollowerElement>
  );
};

export default FollowerElement;

const StyledFollowerElement = styled.div`
  position: fixed;
  left: -6.25rem;
  top: -6.25rem;
  width: 12.5rem;
  height: 12.5rem;
  background-color: ${colors.WHITE};
  font-family: Maison Neue;
  font-size: 1.125rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  letter-spacing: 1px;
  transition: opacity 0.25s;
  will-change: transform;
  pointer-events: none;
`;
