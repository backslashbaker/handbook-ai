import React from "react";
import {render, screen} from "@testing-library/react";
import ChatOutput from '../components/molecules/ChatOutput';

it('displays the ChatOutput component', () => {
    render(<ChatOutput />);
    const chatOutput = screen.getByTestId('chat-output');
    expect(chatOutput).toBeInTheDocument();
});

it('displays messages from user and ai when given an array of objects with the keys "messageText" and "fromAi"', () => {
    const testMessages = [
        {messageText: 'Test message from user', fromAi: false},
        {messageText: 'Test message from ai', fromAi: true}
    ];

    render(<ChatOutput messages={testMessages} />);
    const chatOutput = screen.getByTestId('chat-output');
    const messages = screen.getAllByTestId('chat-message');

    expect(messages.length).toBe(2);
    expect(chatOutput.innerHTML).toContain('Test message from user');
    expect(chatOutput.innerHTML).toContain('Test message from ai');
    expect(messages[0].outerHTML).toContain('class="message-from-user"');
    expect(messages[1].outerHTML).toContain('class="message-from-ai"');
});