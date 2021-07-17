import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const NoMatch = () => {
  let location = useLocation();

  return (
    <>
      <p>404 page not found</p>
      <code>{location.pathname}</code>
    </>
  );
};

export { NoMatch };
