import { Navbar, Accordion, AccordionItem, InputWrapper, Button, Box, Input, Select, CloseButton } from "@mantine/core";
import { ResumeSection, ElementTypes } from "../constants/types";

export function NavBarAccordian(props: {
  showModalFn: () => void,
  items: ResumeSection[]
  updateItems: (items: ResumeSection[]) => void
}) {
  
  return (
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
            <Button color={"green"} onClick={props.showModalFn}>
              Add new section
            </Button>
          </InputWrapper>
          {props.items.map((i) => {
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
                      const idx = props.items.findIndex((v) => v.id === i.id);
                      const itemsCopy = [...props.items];
                      itemsCopy[idx] = changedItem;
                      props.updateItems(itemsCopy);
                    }}
                    value={i.type}
                  />
                  <CloseButton
                    onClick={() => {
                      const filtered = props.items.filter((e) => e.id !== i.id);
                      props.updateItems(filtered);
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
  );
}