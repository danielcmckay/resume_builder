import { ReactElement } from "react";

export type ElementTypes =
  | "normal"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "quote"
  | "code";

export type ResumeSection = {
  id: string;
  title: string;
  label: string;
  value: any;
  type: ElementTypes;
  width?: number;
  category: Category;
  content: (
    type: ElementTypes,
    value: any,
    style: ElementStyling
  ) => ReactElement;
  contentSizing: ElementProps;
  style: ElementStyling;
};

export type ElementProps = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ElementStyling = {
  font: ElementFonts;
  fontSize: number | undefined;
};

export type NewItem = { label: string; type: ElementTypes };

export type Category = "personal" | "work" | "skills" | "education" | "custom";

export type ElementFonts =
  | "Open Sans"
  | "Roboto Mono"
  | "Cormorant Garamond"
  | "Merriweather";
