import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatInput from '../components/molecules/ChatInput';

it("renders the ChatInput Component with correct child components", () => {
    render(<ChatInput />);
    const chatInput = screen.getByTestId('chat-input');
    const textBox = screen.getByTestId('text-input');
    const button = screen.getByTestId('send-button');

    expect(chatInput).toBeInTheDocument();
    expect(chatInput).toContainElement(textBox);
    expect(chatInput).toContainElement(button);
});

it("sets chatMessage when the SendButton is clicked", () => {
    const setChatMessage = jest.fn();
    render(<ChatInput setChatMessage={setChatMessage} />);
    const button = screen.getByTestId('send-button');
    userEvent.click(button)
    expect(setChatMessage).toHaveBeenCalled();
});