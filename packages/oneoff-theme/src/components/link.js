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
    if (!link.startsWith("http")) {
      event.preventDefault();
      
      actions.router.set(link);
  
      window.scrollTo(0, 0);
    }
  };

  return (
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : "auto"}
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
