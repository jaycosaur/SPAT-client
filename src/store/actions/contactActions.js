export const selectConversation = (conversationId) => {
    return {
        type: 'CONVERSATION_SELECT',
        payload: conversationId
    }
}

export const createConversation = () => {
    return {
        type: 'CREATE_CONVERSATION'
    }
}

export const submitMessage = (conversationId) => {
    return {
        type: 'SUBMIT_MESSAGE',
        payload: conversationId
    }
}

export const handleMessageType = (e) => {
    return {
        type: 'HANDLE_MESSAGE_TYPE',
        payload: e
    }
}

