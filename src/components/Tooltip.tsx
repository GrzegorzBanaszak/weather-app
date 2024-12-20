import React from "react";
import TooltipProps from "../interfaces/TooltipProps";

const Tooltip: React.FC<TooltipProps> = ({ children, message }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 mb-2 w-max bg-black text-white text-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
