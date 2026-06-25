
export type ErrorPresentation = 
    | {
        type: 'axios',
        message: string
        original_message: string
    }
    | {
        type: 'general',
        message: string
    }

export type ErrorTypes = ErrorPresentation['type']