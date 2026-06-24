
export type ErrorPresentation = 
    | {
        type: 'offline',
        message: string
    }
    | {
        type: 'axios',
        message: string
    }
    | {
        type: 'timeout',
        message: string
    }
    | {
        type: 'general',
        message: string
    }