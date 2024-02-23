import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/atoms/Header";

it("renders the Header Component with the title", () => {
  render(<Header />);
  expect(screen.getByText("Chat Bot")).toBeInTheDocument();
});
