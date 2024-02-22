import React from "react";
import {render, screen} from "@testing-library/react";
import ChatMessage from '../components/atoms/ChatMessage';

it('displays the ChatMessage component', () => {
    render(<ChatMessage />);
    const chatMessage = screen.getByTestId('chat-message');
    expect(chatMessage).toBeInTheDocument();
});

it('displays the chat message when given a message prop', () => {
   render(<ChatMessage message={'Test message'} />);
   const chatMessage = screen.getByTestId('chat-message');
   expect(chatMessage.innerHTML).toContain('Test message');
});