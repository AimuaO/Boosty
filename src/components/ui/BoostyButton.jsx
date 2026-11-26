import React from "react";

const variants = {
  primary:
    "bg-[#202D2D] text-white border-2 border-[#202D2D] hover:bg-[#2B3B3B] hover:border-[#2B3B3B]",
  secondary:
    "bg-[#E8F2F2] text-[#202D2D] border-2 border-[#374646] hover:border-[#F3B921]",
  quiet:
    "bg-transparent text-[#202D2D] border-2 border-transparent hover:bg-[#F3F6F5]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  icon: "w-10 h-10 p-0",
};

const BoostyButton = ({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => (
  <Component
    className={`inline-flex items-center justify-center gap-2 rounded-full font-bold leading-6 transition-colors ${
      variants[variant] || variants.primary
    } ${sizes[size] || sizes.md} ${className}`}
    {...props}
  >
    {children}
  </Component>
);

export default BoostyButton;
