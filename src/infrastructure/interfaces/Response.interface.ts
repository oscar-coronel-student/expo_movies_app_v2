import { ErrorPresentation } from "./Error.interface"

export type CustomSuccess<T extends Object> = {
    ok: true,
    data: T
}

export type CustomError = {
    ok: false,
    data: ErrorPresentation
}



export type AppResponse<T extends Object> = 
    | CustomSuccess<T>
    | CustomError

export type AppAsyncResponse<T extends Object> = Promise<AppResponse<T>>;