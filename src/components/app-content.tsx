import {
  Modal,
  AppShell,
  Header,
  Group,
  Title,
  ActionIcon,
  Drawer,
  Navbar,
} from "@mantine/core";
import { useState } from "react";
import { DEFAULT_TEMPLATE } from "../constants/templates";
import {
  NewItem,
  Category,
  ElementTypes,
  ResumeSection,
} from "../constants/types";
import { buildElement } from "../utils/build-element";
import { ResumeSectionsAccordian } from "./aside/resume-sections-accordian";
import { ResumeBuilder } from "./resume-builder/resume-builder";
import { NewItemFormModal } from "./modals/new-item-form-modal";

export const AppContent = () => {
  const [items, setItems] = useState<ResumeSection[]>(DEFAULT_TEMPLATE);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(true);
  const [newItemCategory, setNewItemCategory] = useState<Category>("personal");
  const [selectedItem, setSelectedItem] = useState<ResumeSection | undefined>();

  const saveNewItem = (item: NewItem, category: Category) => {
    const itemCopy = [...items];
    itemCopy.push({
      id: item.label,
      label: item.label,
      type: item.type as ElementTypes,
      title: item.label,
      value: `New ${item.label}`,
      category,
      contentSizing: {
        w: 1,
        h: 1,
        x: 2,
        y: 0,
      },
      style: {
        font: "Open Sans",
        fontSize: 12,
      },
      content: (type, value, style) => {
        return buildElement(type, value, style);
      },
    });
    setItems(itemCopy);
    setShowModal(false);
  };

  return (
    <>
      <NewItemFormModal
        opened={showModal}
        setOpened={(opened: boolean) => setShowModal(opened)}
        saveNewItemFn={saveNewItem}
        category={newItemCategory}
      />
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }}>
            <ul>
              <li>thing1</li>
              <li>thing2</li>
              <li>thing3</li>
            </ul>
          </Navbar>
        }
        header={
          <Header height={60} title="Hello">
            <Group
              style={{ justifyContent: "space-between", padding: "0 25px" }}
            >
              <Title>Resume builder</Title>
              <ActionIcon onClick={() => setShowDrawer(true)}>Info</ActionIcon>
            </Group>
          </Header>
        }
        styles={(theme) => ({
          main: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <ResumeBuilder
          items={items}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          updateItems={(items: ResumeSection[]) => setItems(items)}
        />
        <Drawer
          position="right"
          overlayOpacity={0}
          opened={showDrawer}
          onClose={() => {
            setShowDrawer(false);
          }}
        >
          <ResumeSectionsAccordian
            selectedItem={selectedItem}
            items={items}
            updateItems={(items: ResumeSection[]) => setItems(items)}
            showModalFn={(category: Category) => {
              setNewItemCategory(category);
              setShowModal(true);
            }}
          />
        </Drawer>
      </AppShell>
    </>
  );
};
