import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-5 py-3 rounded-md text-white cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
