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
  content: (type: ElementTypes, value: any) => ReactElement;
};

export type NewItem = { label: string; type: ElementTypes };
