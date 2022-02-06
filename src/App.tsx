import { useState } from "react";
import {
  ActionIcon,
  AppShell,
  Drawer,
  Group,
  Header,
  Modal,
  Title,
} from "@mantine/core";

import { NewItemForm } from "./components/NewItemForm";
import { NavBarAccordian } from "./components/NavBarAccordian";
import { ResumeBuilder } from "./components/ResumeBuilder";
import {
  Category,
  ElementTypes,
  NewItem,
  ResumeSection,
} from "./constants/types";
import { buildElement } from "./utils/buildElement";
import { AuthPage } from "./pages/Auth";
import { DEFAULT_TEMPLATE } from "./constants/templates";

function App() {
  const [items, setItems] = useState<ResumeSection[]>(DEFAULT_TEMPLATE);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [newItemCategory, setNewItemCategory] = useState<Category>("personal");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div className="App">
      {!isLoggedIn ? (
        <AuthPage onLoginFn={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Modal
            opened={showModal}
            onClose={() => setShowModal(false)}
            title="Add new section"
          >
            <NewItemForm
              saveNewItemFn={(item: NewItem, category: Category) => {
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
              }}
              category={newItemCategory}
              hideModalFn={() => setShowModal(false)}
            />
          </Modal>
          <AppShell
            padding="md"
            navbar={
              <NavBarAccordian
                items={items}
                updateItems={(items: ResumeSection[]) => setItems(items)}
                showModalFn={(category: Category) => {
                  setNewItemCategory(category);
                  setShowModal(true);
                }}
              />
            }
            header={
              <Header height={60} padding="xs" title="Hello">
                <Group
                  style={{ justifyContent: "space-between", padding: "0 25px" }}
                >
                  <Title>Hire Me!</Title>
                  <ActionIcon onClick={() => setShowDrawer(true)}>
                    Info
                  </ActionIcon>
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
              updateItems={(items: ResumeSection[]) => setItems(items)}
            />
            <Drawer
              position="right"
              opened={showDrawer}
              onClose={() => {
                setShowDrawer(false);
              }}
            />
          </AppShell>
        </>
      )}
    </div>
  );
}

export default App;
