import { Box, Center, Group, Paper, Select } from "@mantine/core";
import { ResumeSection } from "../constants/types";
import { Responsive, WidthProvider } from "react-grid-layout";
import { ELEMENT_TYPES_MAP } from "../constants/constants";
import { ResumeGrid } from "./ResumeGrid";

export function ResumeBuilder(props: {
  items: ResumeSection[];
  updateItems: (items: ResumeSection[]) => void;
}) {
  return (
    <Group>
      <Box
        style={{
          backgroundColor: "white",
          width: 1000,
          height: "80px",
          boxShadow: "5px 5px 22px 0px rgba(0,0,0,0.47)",
          borderRadius: "5px",
          margin: "10px auto",
          padding: "5px",
        }}
      >
        <Center>
          <Group>
            <Select
              label="Font"
              data={["font 1", "font 2"]}
              size="xs"
              defaultValue={"font 1"}
            />
            <Select
              label="Font size"
              size="xs"
              defaultValue={"10"}
              data={["10", "11", "12", "14", "16", "18", "20"]}
            />
            <Select
              label="Formatting"
              size="xs"
              defaultValue={"Normal"}
              data={Array.from(ELEMENT_TYPES_MAP.keys())}
              onChange={(val) => {
                console.log(val);
                // if (val) {
                //   const changedItem = {
                //     ...i,
                //     type: ELEMENT_TYPES_MAP.get(
                //       val
                //     ) as ElementTypes,
                //   };
                //   const idx = props.items.findIndex(
                //     (v) => v.id === i.id
                //   );
                //   const itemsCopy = [...props.items];
                //   itemsCopy[idx] = changedItem;
                //   props.updateItems(itemsCopy);
                // }
              }}
              // value={
              //   Array.from(ELEMENT_TYPES_MAP.entries()).find(
              //     ([name, val]) => val === i.type
              //   )?.[0] ?? "normal"
              // }
            />
          </Group>
        </Center>
      </Box>
      <Paper
        style={{
          height: 1400,
          width: 1000,
          padding: 50,
          margin: "10px auto",
          overflow: "scroll",
          boxShadow: "5px 5px 22px 0px rgba(0,0,0,0.47)",
        }}
      >
        <ResumeGrid items={props.items} />
      </Paper>
    </Group>
  );
}
