import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatMessage from '../components/atoms/ChatMessage';

it('displays the ChatMessage component', () => {
    render(<ChatMessage />);
    const chatMessage = screen.getByTestId('chat-message');
});