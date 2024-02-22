function TextInput({handleChange}) {
    return (
        <input id='text-input' onChange={handleChange} data-testid='text-input' type='text' />
    )
}

export default TextInput;