import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

it("renders the Header Component", () => {
  render(<Header />);
  expect(screen.getByText("Chat Bot")).toBeInTheDocument();
});
