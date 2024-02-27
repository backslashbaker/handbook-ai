function Loading({isLoading}) {
    if (isLoading) {
        return (
            <p className='loading'>Waiting for a response from the local LLM...</p>
        )
    }

    return (
        <></>
    )
}

export default Loading;