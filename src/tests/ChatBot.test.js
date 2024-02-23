import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import ChatBot from "../components/organisms/ChatBot";

it('displays the ChatBot component', () => {
    render(<ChatBot />);
    const chatBot = screen.getByTestId('chat-bot');
    expect(chatBot).toBeInTheDocument();
});

it('displays users message when text is entered into the input form and send button is clicked', () => {
    render(<ChatBot />);
    const chatBot = screen.getByTestId('chat-bot');
    const textInput = screen.getByTestId('text-input');
    const sendButton = screen.getByTestId('send-button');

    fireEvent.change(textInput, {
        target: { value: 'Foo' }
    });

    fireEvent.click(sendButton);

    expect(chatBot.innerHTML).toContain('Foo')
});