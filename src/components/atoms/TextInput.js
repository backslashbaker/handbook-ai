function TextInput({handleChange}) {
    return (
        <input onChange={handleChange} data-testid='text-input' type='text' />
    )
}

export default TextInput;