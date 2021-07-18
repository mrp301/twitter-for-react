export type Props = {
  color: string;
  size: number;
};

export const CreateSvg: React.FC<Props> = ({ color, size, children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={color}
    fill={color}
    viewBox="0 0 512 512"
  >
    {children}
  </svg>
);
