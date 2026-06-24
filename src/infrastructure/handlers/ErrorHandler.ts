import { isAxiosError, isCancel } from "axios";
import { ErrorPresentation } from "../interfaces/Error.interface";
import { CustomError } from "../interfaces/Response.interface";


export class ErrorHandler {

    static readonly getError = (error: unknown): CustomError => {
        if( isCancel( error ) ){
            
        } else if ( isAxiosError( error ) ){

        }
        
        const errorPresentation: ErrorPresentation = {
            type: 'general',
            message: ''
        };

        return { ok: false, data: errorPresentation };
    }

}