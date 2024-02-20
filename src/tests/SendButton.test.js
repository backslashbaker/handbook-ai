import React from "react";
import { render, screen } from "@testing-library/react";
import SendButton from '../components/atoms/SendButton';

it("renders the SendButton Component", () => {
    render(<SendButton />);
    expect(screen.getByTestId('send-button')).toBeInTheDocument();
});

it("renders a fontawesome up arrow icon inside the SendButton Component", () => {
    render(<SendButton />);
    const button = screen.getByTestId('send-button');
    expect(button.outerHTML).toContain('data-icon="arrow-up"')
});

it("SendButton Component contains a button with the title 'send'", () => {
    render(<SendButton />);
    const button = screen.getByTestId('send-button');
    expect(button.outerHTML).toContain('title="send"')
});