import { Box } from "@mantine/core";
import { ReactElement, useState } from "react";
import { ResumeSection } from "../constants/types";
import { useClickOutside } from "@mantine/hooks";

export const ResumeElement = (props: { item: ResumeSection }) => {
  const [hoverState, setHoverState] = useState(false);
  const [editState, setEditState] = useState(false);
  const ref = useClickOutside(() => setEditState(false));

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onClick={() => setEditState(true)}
      style={{
        padding: 0,
        margin: 0,
        border: hoverState ? "1px solid teal" : "1px solid white",
        borderRadius: "20px",
      }}
    >
      {!editState ? (
        props.item.content(props.item.type, props.item.value)
      ) : (
        <p>thing</p>
      )}
    </div>
  );
};
