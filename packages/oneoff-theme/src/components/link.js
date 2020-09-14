import React from "react";
import { connect } from "frontity";

const Link = ({
  state,
  actions,
  link,
  className,
  children,
  style,
  "aria-current": ariaCurrent,
}) => {
  const onClick = (event) => {
    if (link.startsWith("/")) {
      event.preventDefault();
      
      actions.router.set(link);
  
      window.scrollTo(0, 0);
    }
  };

  return (
    <a
      href={link}
      target={link ? link.startsWith("http") ? "_blank" : "auto" : null}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
      style={{ pointerEvents: "auto", ...style }}
    >
      {children}
    </a>
  );
};

export default connect(Link);
