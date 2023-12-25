import { ITypographyProps } from "@/types/types";
import React from "react";

export const TypographyH1: React.FC<ITypographyProps> = ({ className, children }) => {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 lg:mb-12 mt-6 ${className}`}
    >
      {children}
    </h1>
  );
};
