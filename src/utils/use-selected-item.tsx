import { useEffect, useState } from "react";
import { ResumeSection } from "../constants/types";

export const useSelectedItem = (): [
  string | undefined,
  (item: ResumeSection | undefined) => void
] => {
  const [selectedItem, setSelectedItem] = useState<string | undefined>();

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem, setSelectedItem]);

  const updateSelectedItem = (item?: ResumeSection) => {
    setSelectedItem(item?.id);
  };

  return [selectedItem, updateSelectedItem];
};
