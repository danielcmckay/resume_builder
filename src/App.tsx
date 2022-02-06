import { useState } from "react";
import { AppShell, Header, Modal } from "@mantine/core";

import { NewItemForm } from "./components/NewItemForm";
import { NavBarAccordian } from "./components/NavBarAccordian";
import { ResumeBuilder } from "./components/ResumeBuilder";
import { ElementTypes, NewItem, ResumeSection } from "./constants/types";
import { buildElement } from "./utils/buildElement";

function App() {
  const [items, setItems] = useState<ResumeSection[]>([
    {
      id: "name",
      title: "Name",
      label: "Name",
      value: "Danny McKay",
      type: "h1",
      content: (type, value) => {
        return buildElement(type, value);
      },
    },
    {
      id: "email",
      title: "Email",
      label: "Email",
      type: "normal",
      value: "dcmckay@gmail.com",
      content: (type, value) => {
        return buildElement(type, value);
      },
    },
    {
      id: "phone",
      title: "Phone",
      label: "Phone",
      type: "normal",
      value: "608-212-5513",
      content: (type, value) => {
        return buildElement(type, value);
      },
    },
  ]);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="App">
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title="Add new section"
      >
        <NewItemForm
          saveNewItemFn={(item: NewItem) => {
            const itemCopy = [...items];
            itemCopy.push({
              id: item.label,
              label: item.label,
              type: item.type as ElementTypes,
              title: item.label,
              value: `New ${item.label}`,
              content: (type, value) => {
                return buildElement(type, value);
              },
            });
            setItems(itemCopy);
            setShowModal(false);
          }}
          hideModalFn={() => setShowModal(false)}
        />
      </Modal>
      <AppShell
        padding="md"
        navbar={
          <NavBarAccordian
            items={items}
            updateItems={(items: ResumeSection[]) => setItems(items)}
            showModalFn={() => setShowModal(true)}
          />
        }
        header={
          <Header height={60} padding="xs" title="Hello">
            Hire Me!
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
      </AppShell>
    </div>
  );
}

export default App;
