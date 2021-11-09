
const messages = {
    sendMessageBaseError: "Could not send message. Please refresh the page or try again later.",
    invalidForm: (...names) => {        
        const template = `
            Hey, you need to pass ${names.join(' and ')} before you send a message! 
        `
        return template;
    }
}

export default messages;