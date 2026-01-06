
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 transition-all duration-300 font-medium tracking-wide text-sm flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#111111] text-white hover:bg-[#C5A059] active:translate-y-[1px]",
    secondary: "bg-[#C5A059] text-white hover:bg-[#A88548] active:translate-y-[1px]",
    outline: "border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white active:translate-y-[1px]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
