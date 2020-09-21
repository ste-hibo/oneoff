import React from "react";
import { connect } from "frontity";

const Showcase = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <div></div>
  )
};

export default connect(Showcase);
