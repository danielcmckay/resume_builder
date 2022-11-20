import { render, screen } from "@testing-library/react";
import { AppContent } from "./components/app-content";

test("renders learn react link", () => {
  render(<AppContent />);

  // verify header
  const logoHeader = screen.getByRole("heading", { name: /Resume builder/i });
  expect(logoHeader).toBeInTheDocument();

  // renders info sidebar
  const infoButton = screen.getByRole("button", { name: "Info" });
  expect(infoButton).toBeInTheDocument();

  // renders nav sidebar
  const accordian = screen.getByTestId("accordian-sidebar");
  expect(accordian).toBeInTheDocument();

  // personal information tab is collapsed
  const personalInformationAccordian = screen.getByTestId("personal-accordian");
  expect(personalInformationAccordian).toBeInTheDocument();
});
