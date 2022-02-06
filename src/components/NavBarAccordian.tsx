import {
  Navbar,
  Accordion,
  AccordionItem,
  InputWrapper,
  Button,
  Box,
  Input,
  Select,
  CloseButton,
} from "@mantine/core";
import { CATEGORY_TYPES_MAP, ELEMENT_TYPES_MAP } from "../constants/constants";
import { ResumeSection, ElementTypes, Category } from "../constants/types";

export function NavBarAccordian(props: {
  showModalFn: (category: Category) => void;
  items: ResumeSection[];
  updateItems: (items: ResumeSection[]) => void;
}) {
  return (
    <Navbar width={{ base: 500 }} height={"100%"} padding="xs">
      <Accordion initialItem={0}>
        {Array.from(CATEGORY_TYPES_MAP.entries()).map(([label, category]) => {
          return (
            <AccordionItem
              label={label}
              title={label}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <InputWrapper>
                <Button
                  color={"green"}
                  onClick={() => props.showModalFn(category as Category)}
                >
                  Add new section
                </Button>
              </InputWrapper>
              {props.items
                .filter((i) => i.category === category)
                .map((i) => {
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
                        <Input
                          placeholder={i.label}
                          value={i.value}
                          onChange={(e: any) => {
                            if (e.target.value) {
                              const changedItem = {
                                ...i,
                                value: e.target.value,
                              };
                              const idx = props.items.findIndex(
                                (v) => v.id === i.id
                              );
                              const itemsCopy = [...props.items];
                              itemsCopy[idx] = changedItem;
                              props.updateItems(itemsCopy);
                            }
                          }}
                        />
                        <Select
                          data={Array.from(ELEMENT_TYPES_MAP.keys())}
                          onChange={(val) => {
                            console.log(val);
                            if (val) {
                              const changedItem = {
                                ...i,
                                type: ELEMENT_TYPES_MAP.get(
                                  val
                                ) as ElementTypes,
                              };
                              const idx = props.items.findIndex(
                                (v) => v.id === i.id
                              );
                              const itemsCopy = [...props.items];
                              itemsCopy[idx] = changedItem;
                              props.updateItems(itemsCopy);
                            }
                          }}
                          value={
                            Array.from(ELEMENT_TYPES_MAP.entries()).find(
                              ([name, val]) => val === i.type
                            )?.[0] ?? "normal"
                          }
                        />
                        <CloseButton
                          onClick={() => {
                            const filtered = props.items.filter(
                              (e) => e.id !== i.id
                            );
                            props.updateItems(filtered);
                          }}
                        />
                      </Box>
                    </InputWrapper>
                  );
                })}
            </AccordionItem>
          );
        })}
      </Accordion>
    </Navbar>
  );
}
