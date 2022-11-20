import {
  Navbar,
  Accordion,
  Button,
  Input,
  CloseButton,
  Group,
} from "@mantine/core";
import { CATEGORY_TYPES_MAP } from "../../constants/constants";
import { ResumeSection, Category } from "../../constants/types";

export function ResumeSectionsAccordian(props: {
  showModalFn: (category: Category) => void;
  items: ResumeSection[];
  selectedItem?: ResumeSection;
  updateItems: (items: ResumeSection[]) => void;
}) {
  return (
    <Navbar
      fixed={false}
      width={{ base: 300 }}
      height={"100%"}
      position={{ left: 0 }}
    >
      <Accordion defaultValue="Settings">
        <Accordion.Item value="Settings"></Accordion.Item>
        {Array.from(CATEGORY_TYPES_MAP.entries()).map(([label, category]) => {
          return (
            <Accordion.Item
              key={category}
              value={label}
              title={label}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Accordion.Control>{label}</Accordion.Control>
              <Accordion.Panel>
                <Input.Wrapper>
                  <Button
                    color={"green"}
                    onClick={() => props.showModalFn(category as Category)}
                  >
                    Add new section
                  </Button>
                </Input.Wrapper>
                {props.items
                  .filter((i) => i.category === category)
                  .map((i) => {
                    return (
                      <Input.Wrapper
                        key={i.id}
                        label={i.label}
                        style={{ textAlign: "left", margin: "10px 0" }}
                      >
                        <Group
                          align="row"
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
                      </Input.Wrapper>
                    );
                  })}
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Navbar>
  );
}
