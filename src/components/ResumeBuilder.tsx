import { Paper } from "@mantine/core";
import { ResumeSection } from "../constants/types";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export function ResumeBuilder(props: {
  items: ResumeSection[];
  updateItems: (items: ResumeSection[]) => void;
}) {
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
      <ResumeGrid items={props.items} />
    </Paper>
  );
}

const ResumeGrid = (props: { items: ResumeSection[] }) => {
  return (
    <ResponsiveGridLayout
      rowHeight={30}
      width={1200}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      maxRows={10}
      onDragStop={() => {
        console.log("hi");
      }}
      allowOverlap={false}
    >
      {props.items.map((i) => {
        return (
          <div
            data-grid={{
              x: 0,
              y: 0,
              w: 1,
              h: 1,
            }}
            key={i.id}
          >
            {i.content(i.type, i.value)}
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};
