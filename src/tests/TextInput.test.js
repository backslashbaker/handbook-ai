import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from '../components/atoms/TextInput';

it("renders the TextInput Component", () => {
    render(<TextInput />);
    expect(screen.getByTestId('text-input')).toBeInTheDocument();
});