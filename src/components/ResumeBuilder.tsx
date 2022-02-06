import { Paper, Box } from "@mantine/core";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import { ResumeSection, ElementTypes } from "../constants/types";
import { ResumeElement } from "./ResumeElement";

export function ResumeBuilder(props: {
  items: ResumeSection[];
  updateItems: (items: ResumeSection[]) => void;
}) {
  const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (result.destination) {
      const itemSet = Array.from(props.items);
      const [reorderedItem] = itemSet.splice(result.source.index, 1);
      itemSet.splice(result?.destination?.index, 0, reorderedItem);

      props.updateItems(itemSet);
    } else {
      return;
    }
  };
  return (
    <Paper
      style={{
        height: 1800,
        width: 1200,
        padding: 100,
        overflowY: "scroll",
        boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.43)",
      }}
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {props.items.map((i) => (
                <Draggable
                  draggableId={props.items.indexOf(i).toString()}
                  index={props.items.indexOf(i)}
                  key={props.items.indexOf(i)}
                >
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      id={i.id}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ResumeElement item={i} />
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
  );
}
