import { useClickOutside } from "@mantine/hooks";
import { Key, useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import { ResumeSection } from "../../constants/types";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const ResumeGrid = (props: {
  items: ResumeSection[];
  selectedItem: ResumeSection | undefined;
  setSelectedItem: (item: ResumeSection | undefined) => void;
}) => {
  const [hoverState, setHoverState] = useState<ResumeSection | undefined>(
    undefined
  );
  const ref = useClickOutside(() => {
    props.setSelectedItem(undefined);
  });

  return (
    <ResponsiveGridLayout
      rowHeight={30}
      autoSize
      width={1200}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      maxRows={30}
      allowOverlap={false}
      margin={[15, 15]}
    >
      {props.items.map((i) => {
        return (
          <div
            data-grid={{
              x: i.contentSizing.x,
              y: i.contentSizing.y,
              w: i.contentSizing.w,
              h: i.contentSizing.h,
            }}
            key={i.id}
            ref={ref}
            onMouseEnter={() => setHoverState(i)}
            onMouseLeave={() => setHoverState(undefined)}
            onDoubleClick={(e) => {
              if (props.selectedItem !== i) {
                props.setSelectedItem(i);
              } else {
                props.setSelectedItem(undefined);
              }
            }}
            style={{
              cursor: "pointer",
              padding: "5px 5px",
              margin: "5px",
              borderRadius: "10px",
              border:
                hoverState === i ? "1px solid #e0e0e0" : "1px solid white",
              backgroundColor: props.selectedItem === i ? "#fff2d6" : "white",
            }}
          >
            {i.content(i.type, i.value, i.style)}
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};
