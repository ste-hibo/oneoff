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
    if (link.startsWith("http")) {
      window.open(link, '_blank');
    }

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);

    // Scroll the page to the top
    window.scrollTo(0, 0);
  };

  return (
    <a
      href={link}
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
