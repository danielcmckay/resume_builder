import { Title, Text, Code, Blockquote, List } from "@mantine/core";
import { ElementStyling, ElementTypes } from "../constants/types";

export const buildElement = (
  type: ElementTypes,
  value: any,
  style: ElementStyling
) => {
  switch (type) {
    case "h1":
      return (
        <Title
          style={{ fontFamily: style.font, fontSize: style.fontSize }}
          order={1}
        >
          {value}
        </Title>
      );
    case "h2":
      return (
        <Title
          style={{ fontFamily: style.font, fontSize: style.fontSize }}
          order={2}
        >
          {value}
        </Title>
      );
    case "h3":
      return (
        <Title
          style={{ fontFamily: style.font, fontSize: style.fontSize }}
          order={3}
        >
          {value}
        </Title>
      );
    case "h4":
      return (
        <Title
          style={{ fontFamily: style.font, fontSize: style.fontSize }}
          order={4}
        >
          {value}
        </Title>
      );
    case "h5":
      return (
        <Title
          style={{ fontFamily: style.font, fontSize: style.fontSize }}
          order={5}
        >
          {value}
        </Title>
      );
    case "h6":
      return (
        <Title
          style={{ fontFamily: style.font, fontSize: style.fontSize }}
          order={6}
        >
          {value}
        </Title>
      );
    case "normal":
      return (
        <Text style={{ fontFamily: style.font, fontSize: style.fontSize }}>
          {value}
        </Text>
      );
    case "code":
      return <Code>{value}</Code>;
    case "quote":
      return <Blockquote>{value}</Blockquote>;
    case "list":
      return <List>{value}</List>;
  }
};
