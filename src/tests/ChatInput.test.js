import React from "react";
import { render, screen } from "@testing-library/react";
import ChatInput from '../components/ChatInput';

it("renders the ChatInput Component with correct child components", () => {
    render(<ChatInput />);
    const chatInput = screen.getByTestId('chat-input');
    const textBox = screen.getByTestId('text-input');
    const button = screen.getByTestId('send-button');

    expect(chatInput).toBeInTheDocument();
    expect(chatInput).toContainElement(textBox);
    expect(chatInput).toContainElement(button);
});