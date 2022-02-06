import { Box, Button, Center, Group, Paper, Select } from "@mantine/core";
import { ElementFonts, ElementTypes, ResumeSection } from "../constants/types";
import { ELEMENT_TYPES_MAP, FONT_SIZES } from "../constants/constants";
import { ResumeGrid } from "./ResumeGrid";
import { useState } from "react";

export function ResumeBuilder(props: {
  items: ResumeSection[];
  updateItems: (items: ResumeSection[]) => void;
}) {
  const [selectedItem, setSelectedItem] = useState<ResumeSection | undefined>();

  return (
    <Group>
      <Box
        style={{
          backgroundColor: "white",
          width: 1000,
          height: "80px",
          boxShadow: "5px 5px 22px 0px rgba(0,0,0,0.25)",
          borderRadius: "5px",
          margin: "5px auto",
          padding: "5px",
        }}
      >
        <Center>
          <Group style={{ alignItems: "flex-end" }}>
            <Select
              label="Font"
              data={[
                "Open Sans",
                "Roboto Mono",
                "Cormorant Garamond",
                "Merriweather",
              ]}
              size="xs"
              defaultValue={"Open Sans"}
              disabled={!selectedItem}
              value={selectedItem?.style.font}
              onChange={(val: ElementFonts) => {
                if (selectedItem) {
                  const changedItem = {
                    ...selectedItem,
                    style: {
                      fontSize: selectedItem.style.fontSize,
                      font: val,
                    },
                  };
                  const idx = props.items.findIndex(
                    (v) => v.id === selectedItem.id
                  );
                  const itemsCopy = [...props.items];
                  itemsCopy[idx] = changedItem;
                  props.updateItems(itemsCopy);
                }
              }}
            />
            <Select
              label="Font size"
              size="xs"
              defaultValue={"10"}
              data={FONT_SIZES}
              disabled={!selectedItem}
              value={selectedItem?.style.fontSize as unknown as string}
              onChange={(val: string) => {
                if (selectedItem) {
                  const changedItem = {
                    ...selectedItem,
                    style: {
                      fontSize: parseInt(val),
                      font: selectedItem.style.font,
                    },
                  };
                  const idx = props.items.findIndex(
                    (v) => v.id === selectedItem.id
                  );
                  const itemsCopy = [...props.items];
                  itemsCopy[idx] = changedItem;
                  props.updateItems(itemsCopy);
                }
              }}
            />
            <Select
              label="Formatting"
              size="xs"
              defaultValue={"normal"}
              data={Array.from(ELEMENT_TYPES_MAP.keys())}
              disabled={!selectedItem}
              onChange={(val) => {
                if (val && selectedItem) {
                  const changedItem = {
                    ...selectedItem,
                    type: ELEMENT_TYPES_MAP.get(val) as ElementTypes,
                  };
                  const idx = props.items.findIndex(
                    (v) => v.id === selectedItem.id
                  );
                  const itemsCopy = [...props.items];
                  itemsCopy[idx] = changedItem;
                  props.updateItems(itemsCopy);
                }
              }}
              value={
                Array.from(ELEMENT_TYPES_MAP.entries()).find(
                  ([name, val]) => val === selectedItem?.type
                )?.[0] ?? "normal"
              }
            />
            <Button>Export</Button>
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
          boxShadow: "5px 5px 22px 0px rgba(0,0,0,0.25)",
        }}
      >
        <ResumeGrid
          items={props.items}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </Paper>
    </Group>
  );
}
