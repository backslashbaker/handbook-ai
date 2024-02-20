import React from "react";
import {createEvent, fireEvent, render, screen} from "@testing-library/react";
import TextInput from '../components/atoms/TextInput';

it("renders the TextInput Component", () => {
    render(<TextInput />);
    const textBox = screen.getByTestId('text-input');
    expect(textBox).toBeInTheDocument();
    expect(textBox.outerHTML).toContain('type="text"')
});

it("calls the handleChange prop when onChange event is triggered", () => {
    render(<TextInput />);
    const handleChange = jest.fn();
    const onChangeSpy = jest.fn();
    const textBox = screen.getByTestId('text-input');
    fireEvent.change(textBox, {
        target: { value: 'Foo' }
    });
    expect(onChangeSpy).toHaveBeenCalled()
    expect(handleChange).toHaveBeenCalled()
});