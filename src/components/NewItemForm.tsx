import {
  InputWrapper,
  Input,
  Select,
  Button,
  Group,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { ELEMENT_TYPES_MAP } from "../constants/constants";
import { Category, ElementTypes, NewItem } from "../constants/types";

export function NewItemForm(props: {
  saveNewItemFn: (item: NewItem, category: Category) => void;
  hideModalFn: () => void;
  category: Category;
}) {
  const [newItem, setNewItem] = useState<NewItem>({
    label: "",
    type: "normal",
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
      <InputWrapper label="Item styling">
        <Select
          data={Array.from(ELEMENT_TYPES_MAP.keys())}
          value={newItem?.type}
          onChange={(e: any) => {
            setNewItem({
              ...newItem,
              type: ELEMENT_TYPES_MAP.get(e) as ElementTypes,
            });
          }}
          placeholder="Normal"
        />
        {newItem.type === "list" && (
          <Group
            style={{
              margin: "10px auto",
              width: "100%",
              alignItems: "flex-end",
            }}
          >
            <TextInput label={`New item ${1}`} />
            <Button>Add</Button>
          </Group>
        )}
      </InputWrapper>
      <Group
        style={{
          width: "70%",
          margin: "20px auto",
          justifyContent: "space-evenly",
        }}
      >
        <Button onClick={() => props.saveNewItemFn(newItem, props.category)}>
          Save and exit
        </Button>
        <Button color="red" onClick={props.hideModalFn}>
          Cancel
        </Button>
      </Group>
    </>
  );
}
