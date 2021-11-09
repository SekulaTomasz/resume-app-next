
const azureFunctionEndpoints = {
    sendEmail: "SendEmail"
}

const cmsEndpoints = {
    resume: () => "/resumes",
    resumeById: (id) => `/resumes/${id}`,
    
}


export {
    azureFunctionEndpoints,
    cmsEndpoints
}