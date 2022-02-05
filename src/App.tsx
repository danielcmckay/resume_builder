import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Accordion,
  AccordionItem,
  AppShell,
  Box,
  Burger,
  Button,
  Container,
  Header,
  Input,
  InputWrapper,
  Navbar,
} from "@mantine/core";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

function App() {
  const [items, setItems] = useState(["1", "2", "3", "4"]);

  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    console.log(result);

    if (result.destination) {
      const itemSet = Array.from(items);
      const [reorderedItem] = itemSet.splice(result.source.index, 1);
      itemSet.splice(result?.destination?.index, 0, reorderedItem);

      setItems(itemSet);
    }
  };
  return (
    <div className="App">
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 400 }} height={"100%"} padding="xs">
            <Accordion>
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
                <InputWrapper label="Name" style={{ textAlign: "left" }}>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Input placeholder="John Smith" />
                    <Button color={"red"}>x</Button>
                  </Box>
                </InputWrapper>
                <InputWrapper label="Email" style={{ textAlign: "left" }}>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Input placeholder="smith@yahoo.com" type="email" />
                    <Button color={"red"}>x</Button>
                  </Box>
                </InputWrapper>
                <InputWrapper label="Phone" style={{ textAlign: "left" }}>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Input placeholder="555-555-5555" type="tel" />

                    <Button color={"red"}>x</Button>
                  </Box>
                </InputWrapper>
              </AccordionItem>
              <AccordionItem label="Work history" />
              <AccordionItem label="Skills" />
              <AccordionItem label="Education" />
            </Accordion>
          </Navbar>
        }
        header={
          <Header height={60} padding="xs" title="Hello">
            {<Burger opened={false} />}
          </Header>
        }
        fixed
        styles={(theme) => ({
          main: {
            height: "100%",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Container>
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
                          id={i}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          // style={{
                          //   border: "1px solid black",
                          //   borderRadius: "15px",
                          // }}
                        >
                          {i}
                        </Box>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Container>
      </AppShell>
    </div>
  );
}

export default App;
