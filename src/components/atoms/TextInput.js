function TextInput({handleChange, handleKeyPress}) {
    return (
            <textarea onKeyDown={handleKeyPress} autoFocus={true} id='text-input' onChange={handleChange} data-testid='text-input'></textarea>
    )
}

export default TextInput;