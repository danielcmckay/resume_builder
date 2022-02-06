import { ReactElement } from "react";

export type ElementTypes = "normal" | "h1" | "h2";

export type ResumeSection = {
  id: string;
  title: string;
  label: string;
  value: any;
  type: ElementTypes;
  content?: (type: ElementTypes, value: any) => ReactElement;
};

export type NewItem = { label: string; type: string; styling: string };
