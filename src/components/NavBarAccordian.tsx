import {
  Navbar,
  Accordion,
  AccordionItem,
  InputWrapper,
  Button,
  Input,
  CloseButton,
  Group,
} from "@mantine/core";
import { CATEGORY_TYPES_MAP } from "../constants/constants";
import { ResumeSection, Category } from "../constants/types";

export function NavBarAccordian(props: {
  showModalFn: (category: Category) => void;
  items: ResumeSection[];
  updateItems: (items: ResumeSection[]) => void;
}) {
  return (
    <Navbar width={{ base: 500 }} height={"100%"} padding="xs">
      <Accordion initialItem={1}>
        <AccordionItem label="Settings">
        </AccordionItem>
        {Array.from(CATEGORY_TYPES_MAP.entries()).map(([label, category]) => {
          return (
            <AccordionItem
              key={category}
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
                      <Group
                        direction="row"
                        style={{
                          justifyContent: "space-between",
                        }}
                      >
                        <Input
                          style={{ width: "85%" }}
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
                        <CloseButton
                          onClick={() => {
                            const filtered = props.items.filter(
                              (e) => e.id !== i.id
                            );
                            props.updateItems(filtered);
                          }}
                        />
                      </Group>
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
