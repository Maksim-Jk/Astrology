import { ITypographyProps } from "@/types/types";
import React from "react";

export const TypographyH2: React.FC<ITypographyProps> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-4 mb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};
