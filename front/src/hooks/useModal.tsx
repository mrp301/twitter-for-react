import { useLocation } from "react-router-dom";

const useModal = (pathname: string) => {
  const location = useLocation();

  return {
    pathname,
    state: {
      background: location,
    },
  };
};

export { useModal };
