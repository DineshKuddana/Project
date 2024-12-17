// File: components/ui/sheet.js

import * as React from "react";

export const Sheet = ({ children }) => {
  return <div className="sheet">{children}</div>;
};

export const SheetContent = ({ children, side, className }) => {
  return (
    <div className={`sheet-content ${side} ${className}`}>
      {children}
    </div>
  );
};

export const SheetTrigger = ({ children }) => {
  return <button className="sheet-trigger">{children}</button>;
};
