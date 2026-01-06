
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
  // We apply the btn-luxe class which contains the main animation logic
  // Variants can still adjust specific tweaks if needed, but the base is btn-luxe
  return (
    <button 
      className={`btn-luxe ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
