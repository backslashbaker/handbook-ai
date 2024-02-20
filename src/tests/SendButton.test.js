import React from "react";
import { render, screen } from "@testing-library/react";
import SendButton from '../components/atoms/SendButton';

it("renders the SendButton Component", () => {
    render(<SendButton />);
    expect(screen.getByTestId('send-button')).toBeInTheDocument();
});