import { render, screen } from "@testing-library/react";
import DropDown from "../components/DropDown/DropDown";
import userEvent from "@testing-library/user-event";

describe("Check DropDown component for it ", () => {
  it("should not render an li with for shop", () => {
    render(<DropDown />);
    expect(screen.queryByTestId("shop")).not.toBeInTheDocument();
    expect(screen.queryByTestId("shop")).toBeNull();
  });
  it("should not render an li with for shop", () => {
    render(<DropDown />);
    expect(screen.queryByTestId("tattoo")).not.toBeInTheDocument();
    expect(screen.queryByTestId("tattoo")).toBeNull();
  });

  it("should not render an li with for shop", () => {
    render(<DropDown />);
    expect(screen.queryByTestId("piercing")).not.toBeInTheDocument();
    expect(screen.queryByTestId("piercing")).toBeNull();
  });
  // TRIGGER SHOP
  it("should render a clickable li with for shop", () => {
    render(<DropDown />);
    expect(screen.queryByTestId("trigger-shop")).toBeInTheDocument();
    expect(screen.queryByTestId("trigger-shop")).not.toBeNull();
  });
  // TRIGGER PIERCING
  it("should render a clickable li with for piercing", () => {
    render(<DropDown />);
    expect(screen.queryByTestId("trigger-piercing")).toBeInTheDocument();
    expect(screen.queryByTestId("trigger-piercing")).not.toBeNull();
  });
  // TRIGGER TATTOO
  it("should render a clickable li with for tattoo", () => {
    render(<DropDown />);
    expect(screen.queryByTestId("trigger-tattoo")).toBeInTheDocument();
    expect(screen.queryByTestId("trigger-tattoo")).not.toBeNull();
  });
});

describe("DropDown Behavior", () => {
  // TRIGGER SHOP
  it("should click li for shop and show new li", async () => {
    render(<DropDown />);
    expect(screen.queryByTestId("shop")).not.toBeInTheDocument();
    expect(screen.queryByTestId("shop")).toBeNull();
    const clickLi = screen.queryByTestId("trigger-shop");
    await userEvent.click(clickLi);
    // FIND BY when waiting for element to appear (uses waitFor under the hood)
    expect(
      await screen.findByTestId("shop", {}, { timeout: 5000 })
    ).toBeInTheDocument();
  });
});
