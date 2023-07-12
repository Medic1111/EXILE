import ContactForm from "../components/Contact/ContactForm/ContactForm";
import { render, screen } from "@testing-library/react";

describe("Testing the form for ", () => {
  it("Should render a submit input", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  });

  it("Should render a submit input", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("Should render a submit input", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Phone number")).toBeInTheDocument();
  });

  it("Should render a submit input", () => {
    render(<ContactForm />);
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });

  // Query returns null, get returns error if not found
  it("Should NOT render a feedback initially", () => {
    render(<ContactForm />);
    expect(screen.queryByText(/feedback/)).not.toBeInTheDocument();
    expect(screen.queryByText(/feedback/)).toBeNull();
  });
});
