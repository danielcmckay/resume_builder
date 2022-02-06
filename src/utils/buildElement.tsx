import { Title, Text, Code, Blockquote } from "@mantine/core";
import { ElementTypes } from "../constants/types";

export const buildElement = (type: ElementTypes, value: any) => {
  switch (type) {
    case "h1":
      return <Title order={1}>{value}</Title>;
    case "h2":
      return <Title order={2}>{value}</Title>;
    case "h3":
      return <Title order={3}>{value}</Title>;
    case "h4":
      return <Title order={4}>{value}</Title>;
    case "h5":
      return <Title order={5}>{value}</Title>;
    case "h6":
      return <Title order={6}>{value}</Title>;
    case "normal":
      return <Text>{value}</Text>;
    case "code":
      return <Code>{value}</Code>;
    case "quote":
      return <Blockquote>{value}</Blockquote>;
  }
};
