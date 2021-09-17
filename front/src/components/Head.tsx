import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { scrollTop } from "../lib/index";
import { useLocation } from "react-router-dom";

type Props = {
  title: string;
};

const Head: React.FC<Props> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    scrollTop();
  }, [location]);

  return (
    <Helmet>
      <title>{title} / twitter-for-react</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      ></meta>
    </Helmet>
  );
};

export default Head;
