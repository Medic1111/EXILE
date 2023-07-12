import Hero from "../components/Hero/Hero";
import { render, screen } from "@testing-library/react";

describe("Testing the HERO for ", () => {
  // TEXT:present
  it("should render the name of the shop", () => {
    render(<Hero />);
    expect(screen.getByText("Exile Tattoo and Piercing")).toBeInTheDocument();
  });

  // LINK: Present
  it("should have a link to enter", () => {
    render(<Hero />);
    expect(
      screen.getByLabelText("link to enter the application")
    ).toBeInTheDocument();
  });

  // LINK: href

  // IMG: present

  // IMG: SRC
});
