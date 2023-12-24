import { ITypographyProps } from "@/types/types";
import React from "react";

export const TypographyP: React.FC<ITypographyProps> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
