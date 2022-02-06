import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactElement,
  useState,
} from "react";
import {
  Accordion,
  AccordionItem,
  AppShell,
  Box,
  Button,
  CloseButton,
  Header,
  Input,
  InputWrapper,
  Modal,
  Navbar,
  Paper,
  Select,
} from "@mantine/core";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

type ElementTypes = "normal" | "h1" | "h2";

type ResumeSection = {
  id: string;
  title: string;
  label: string;
  value: any;
  type: ElementTypes;
  content?: (type: ElementTypes, value: any) => ReactElement;
};

type NewItem = { label: string; type: string; styling: string };

function App() {
  const [items, setItems] = useState<ResumeSection[]>([
    {
      id: "name",
      title: "Name",
      label: "Name",
      value: "Danny McKay",
      type: "h1",
      content: (type, value) => {
        return type === "normal" ? <p>{value}</p> : <h1>{value}</h1>;
      },
    },
    {
      id: "email",
      title: "Email",
      label: "Email",
      type: "normal",
      value: "dcmckay@",
    },
    {
      id: "phone",
      title: "Phone",
      label: "Phone",
      type: "normal",
      value: "1111111111",
    },
  ]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<NewItem>({
    label: "",
    type: "",
    styling: "",
  });

  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (result.destination) {
      const itemSet = Array.from(items);
      const [reorderedItem] = itemSet.splice(result.source.index, 1);
      itemSet.splice(result?.destination?.index, 0, reorderedItem);

      setItems(itemSet);
    } else {
      return;
    }
  };
  return (
    <div className="App">
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title="Add new section"
      >
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
            onChange={(e: any) => setNewItem({ ...newItem, styling: e })}
          />
        </InputWrapper>
        <Box style={{ width: "100%" }}>
          <Button
            onClick={() => {
              const itemCopy = [...items];
              itemCopy.push({
                id: newItem!.label,
                label: newItem!.label,
                type: newItem!.type as ElementTypes,
                title: newItem!.label,
                value: "",
                content: (type, value) => {
                  return <h1>{value}</h1>;
                },
              });

              setItems(itemCopy);
              setShowModal(false);
            }}
          >
            Save and exit
          </Button>
          <Button color="red" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Box>
      </Modal>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 400 }} height={"100%"} padding="xs">
            <Accordion initialItem={0}>
              <AccordionItem
                opened
                label="Personal information"
                title="Personal Information"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <InputWrapper>
                  <Button color={"green"} onClick={() => setShowModal(true)}>
                    Add new section
                  </Button>
                </InputWrapper>
                {items.map((i) => {
                  return (
                    <InputWrapper
                      key={i.id}
                      label={i.label}
                      style={{ textAlign: "left", margin: "10px 0" }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Input placeholder={i.label} value={i.value} />
                        <Select
                          data={["normal", "h1", "h2"]}
                          onChange={(val) => {
                            const changedItem = {
                              ...i,
                              type: val as ElementTypes,
                            };
                            const idx = items.findIndex((v) => v.id === i.id);
                            const itemsCopy = [...items];
                            itemsCopy[idx] = changedItem;
                            setItems(itemsCopy);
                          }}
                          value={i.type}
                        />
                        <CloseButton
                          onClick={() => {
                            const filtered = items.filter((e) => e.id !== i.id);
                            setItems(filtered);
                          }}
                        />
                      </Box>
                    </InputWrapper>
                  );
                })}
              </AccordionItem>
              <AccordionItem label="Work history" />
              <AccordionItem label="Skills" />
              <AccordionItem label="Education" />
            </Accordion>
          </Navbar>
        }
        header={
          <Header height={60} padding="xs" title="Hello">
            Hire Me!
          </Header>
        }
        fixed
        styles={(theme) => ({
          main: {
            height: "100%",
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
        <Paper
          style={{
            height: 1800,
            width: 1200,
            padding: 100,
            overflow: "scroll",
            boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.43)",
          }}
        >
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="list">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {items.map((i) => (
                    <Draggable
                      draggableId={items.indexOf(i).toString()}
                      index={items.indexOf(i)}
                      key={items.indexOf(i)}
                    >
                      {(provided) => (
                        <Box
                          ref={provided.innerRef}
                          id={i.id}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {!i.content ? (
                            <p>{i.value}</p>
                          ) : (
                            i.content(i.type as ElementTypes, i.value)
                          )}
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Paper>
      </AppShell>
    </div>
  );
}

export default App;
