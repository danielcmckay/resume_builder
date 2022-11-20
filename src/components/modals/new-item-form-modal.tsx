import { Modal } from "@mantine/core";
import { NewItem, Category, ElementTypes } from "../../constants/types";
import { buildElement } from "../../utils/build-element";
import { NewItemForm } from "../resume-builder/new-item-form";

export const NewItemFormModal = (props: {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  category: Category;
  saveNewItemFn: (item: NewItem, category: Category) => void
}) => {
  return (
    <Modal
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      title="Add new section"
    >
      <NewItemForm
        saveNewItemFn={props.saveNewItemFn}
        category={props.category}
        hideModalFn={() => props.setOpened(false)}
      />
    </Modal>
  );
};
