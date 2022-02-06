import { InputWrapper, Input, Select, Box, Button } from "@mantine/core";
import { useState } from "react";
import { NewItem } from "../constants/types";

export function NewItemForm(props: {
  saveNewItemFn: (item: NewItem) => void,
  hideModalFn: () => void
}) {
const [newItem, setNewItem] = useState<NewItem>({
  label: "",
  type: "",
  styling: "",
});

  return (
    <>
      <InputWrapper label="Item label">
        <Input
          value={newItem?.label}
          onChange={(e: any) =>
            setNewItem({ ...newItem, label: e.target.value })
          }
        />
      </InputWrapper>
      <InputWrapper label="Item type">
        <Select
          data={["type1", "type2"]}
          value={newItem?.type}
          onChange={(e: any) => {
            setNewItem({ ...newItem, type: e });
          }}
        />
      </InputWrapper>
      <InputWrapper label="Item styling">
        <Select
          data={["style1", "style2"]}
          value={newItem?.styling}
          onChange={(e: any) =>
            setNewItem({ ...newItem, styling: e })
          }
        />
      </InputWrapper>
      <Box style={{ width: "100%" }}>
        <Button
          onClick={() => {
            // const itemCopy = [...items];
            // itemCopy.push({
            //   id: newItem!.label,
            //   label: newItem!.label,
            //   type: newItem!.type as ElementTypes,
            //   title: newItem!.label,
            //   value: "",
            //   content: (type, value) => {
            //     return <h1>{value}</h1>;
            //   },
            // });
            // setItems(itemCopy);
            // setShowModal(false);
          }}
        >
          Save and exit
        </Button>
        <Button color="red" onClick={props.hideModalFn}>
          Cancel
        </Button>
      </Box>
    </>
  );
}