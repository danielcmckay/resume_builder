import { buildElement } from "../utils/buildElement";
import { ResumeSection } from "./types";

export const DEFAULT_TEMPLATE = (): ResumeSection[] => {
  return [
    {
      id: "name",
      title: "Name",
      label: "Name",
      value: "Danny McKay",
      type: "h1",
      category: "personal",
      contentSizing: {
        w: 4,
        h: 2,
        x: 0,
        y: 0,
      },
      style: {
        font: "Open Sans",
        fontSize: undefined,
      },
      content: (type, value, style) => {
        return buildElement(type, value, style);
      },
    },
    {
      id: "email",
      title: "Email",
      label: "Email",
      type: "normal",
      category: "personal",
      value: "dcmckay@gmail.com",

      contentSizing: {
        w: 1,
        h: 1,
        x: 5,
        y: 0,
      },
      style: {
        font: "Open Sans",
        fontSize: 12,
      },
      content: (type, value, style) => {
        return buildElement(type, value, style);
      },
    },
    {
      id: "phone",
      title: "Phone",
      label: "Phone",
      type: "normal",
      category: "personal",
      value: "608-212-5513",

      contentSizing: {
        w: 1,
        h: 1,
        x: 6,
        y: 1,
      },
      style: {
        font: "Open Sans",
        fontSize: 12,
      },
      content: (type, value, style) => {
        return buildElement(type, value, style);
      },
    },
    {
      id: "work-1",
      title: "Work 1",
      label: "Work 1",
      type: "normal",
      category: "work",
      value: "Thing",
      contentSizing: {
        w: 1,
        h: 2,
        x: 0,
        y: 6,
      },
      style: {
        font: "Open Sans",
        fontSize: 12,
      },
      content: (type, value, style) => {
        return buildElement(type, value, style);
      },
    },
    {
      id: "work-2",
      title: "Work 2",
      label: "Work 2",
      type: "normal",
      category: "work",
      value: "Thing",
      contentSizing: {
        w: 1,
        h: 2,
        x: 0,
        y: 8,
      },
      style: {
        font: "Open Sans",
        fontSize: 12,
      },
      content: (type, value, style) => {
        return buildElement(type, value, style);
      },
    },
  ];
};
