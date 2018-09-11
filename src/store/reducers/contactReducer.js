const defaultState = {
    selectedConversationId: null,
    showConversation: true,
    showNewConversation: false,
    conversationMessages: {
        messages: [
            {
                messageId: "asdfsdaf786234gof078",
                userId: "Edmund Peterson",
                message: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
                timestamp: 1519174747,
                isRead: true,
            },{
                messageId: "asdfsdaf7asdfsdaf8",
                userId: "Derek - SPAT Support",
                message: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
                timestamp: 1519178347    ,
                isRead: true,
                isAdmin: true
            },{
                messageId: "asdsdfgdfgdsfgf0asdf78",
                userId: "Jacob Goose",
                message: "Great that worked! Thanks so much.",
                timestamp: 1519179123,
                isRead: true,
            },{
                messageId: "asdfsdaf786234gof078",
                userId: "Edmund Peterson",
                message: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
                timestamp: 1519174747,
                isRead: true,
            },{
                messageId: "asdfsdaf7asdfsdaf8",
                userId: "Derek - SPAT Support",
                message: "Here why don't you try to add them first.",
                timestamp: 1519178347    ,
                isRead: true,
                isAdmin: true
            },{
                messageId: "asdsdfgdfgdsfgf0asdf78",
                userId: "Jacob Goose",
                message: "Great that worked! Thanks so much.",
                timestamp: 1519179123,
                isRead: true,
            },{
                messageId: "asdfsdaf786234gof078",
                userId: "Edmund Peterson",
                message: "I'm having difficulty with this thing ...",
                timestamp: 1519174747,
                isRead: true,
            },{
                messageId: "asdfsdaf7asdfsdaf8",
                userId: "Derek - SPAT Support",
                message: "Here why don't you try to add them first.",
                timestamp: 1519178347    ,
                isRead: true,
                isAdmin: true
            },{
                messageId: "asdsdfgdfgdsfgf0asdf78",
                userId: "Jacob Goose",
                message: "Great that worked! Thanks so much.",
                timestamp: 1519179123,
                isRead: true,
            },
        ]
    },
    newConversation: {

    }
}

export default(state = defaultState, action) => {
    switch(action.type) {
        case 'RESET_STATE_TO_DEFAULT':
            return {...defaultState}
        case 'CONVERSATION_SELECT':
            return {...state, showConversation: true, showNewConversation: false, selectedConversationId: action.payload}
        case 'CREATE_CONVERSATION':
            return {...state, showConversation: false, showNewConversation: true,}
        default: 
            return state
    }
}

