import { Helmet } from "react-helmet";

type Props = {
  title: string;
};

const Head: React.FC<Props> = ({ title }) => {
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
