import { Category, ElementTypes } from "./types";

export const ELEMENT_TYPES_MAP = new Map<string, ElementTypes>([
  ["Normal", "normal"],
  ["Heading 1", "h1"],
  ["Heading 2", "h2"],
  ["Heading 3", "h3"],
  ["Heading 4", "h4"],
  ["Heading 5", "h5"],
  ["Heading 6", "h6"],
  ["Block quote", "quote"],
  ["Code", "code"],
]);

export const CATEGORY_TYPES_MAP = new Map<string, Category>([
  ["Personal information", "personal"],
  ["Work history", "work"],
  ["Skills", "skills"],
  ["Education history", "education"],
  ["Custom", "custom"],
]);
