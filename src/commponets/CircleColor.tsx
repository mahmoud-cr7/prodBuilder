import { HTMLAttributes } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}
const CircleColor = ({ color, ...rest }: IProps) => {
  return (
    <span
      className={`block w-5 h-5 rounded-full`}
      style={{ backgroundColor: color }}
      {...rest}
    ></span>
  );
};

export default CircleColor;
