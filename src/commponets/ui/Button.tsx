import { ReactNode } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}
const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} text-white px-4 py-2   rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
