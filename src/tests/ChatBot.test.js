import React from "react";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import ChatBot from "../components/organisms/ChatBot";

const mockData = {
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

describe('render tests', () => {
    it('displays the ChatBot component', () => {
        render(<ChatBot />);
        const chatBot = screen.getByTestId('chat-bot');
        expect(chatBot).toBeInTheDocument();
    });

    it('displays users message and ai response when text is entered into the input form and send button is clicked', async () => {
        let mock = new MockAdapter(axios);
        mock.onPost("http://localhost:1234/v1/chat/completions")
            .reply(200, mockData);
        render(<ChatBot />);
        const chatBot = screen.getByTestId('chat-bot');
        const textInput = screen.getByTestId('text-input');
        const sendButton = screen.getByTestId('send-button');

        fireEvent.change(textInput, {
            target: { value: 'Foo' }
        });

        fireEvent.click(sendButton);

        expect(chatBot.innerHTML).toContain('Foo');

        await waitFor(() => {
            expect(chatBot.innerHTML).toContain('Test ai response');
        })
    });
});
