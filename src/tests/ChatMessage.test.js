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

it('has the css class message-from-ai when the messageFromAi prop equals true', () => {
    render(<ChatMessage message={'Test message'} messageFromAi={true} />);
    const chatMessage = screen.getByTestId('chat-message');
    expect(chatMessage.outerHTML).toContain('class="message-from-ai"');
});

it('has the css class message-from-user when no messageFromAi prop given', () => {
    render(<ChatMessage message={'Test message'} />);
    const chatMessage = screen.getByTestId('chat-message');
    expect(chatMessage.outerHTML).toContain('class="message-from-user"');
});