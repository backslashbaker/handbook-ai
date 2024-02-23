import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import { http, HttpResponse } from 'msw';
import ChatBot from "../components/organisms/ChatBot";


const expectedResponse = {
    "id": "chatcmpl-sz183nigut90i1w3kz58we",
    "object": "chat.completion",
    "created": 1708707337,
    "model": "/Users/benjamin.johnson/.cache/lm-studio/models/TheBloke/stablelm-zephyr-3b-GGUF/stablelm-zephyr-3b.Q4_K_S.gguf",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Test ai response"
            },
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 67,
        "completion_tokens": 67,
        "total_tokens": 134
    }
}

http.post(
    'http://localhost:1234/v1/chat/completions',
    ({ request, params, cookies }) => {
        return HttpResponse.json(expectedResponse)
    },
)

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

it('displays response from ai when user submits a message', () => {
    render(<ChatBot />);
    const chatBot = screen.getByTestId('chat-bot');
    const textInput = screen.getByTestId('text-input');
    const sendButton = screen.getByTestId('send-button');

    fireEvent.change(textInput, {
        target: { value: 'Hi' }
    });

    fireEvent.click(sendButton);

    expect(chatBot.innerHTML).toContain('Test ai response')
});