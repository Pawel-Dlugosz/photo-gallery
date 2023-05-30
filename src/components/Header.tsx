import React, { ReactNode } from "react";

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <header className="bg-blue-600 shadow-md p-6 text-xl text-white font-medium">
      {children}
    </header>
  );
};

export default Header;
