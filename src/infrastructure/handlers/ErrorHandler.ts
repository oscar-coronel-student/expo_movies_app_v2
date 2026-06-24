import { isAxiosError, isCancel } from "axios";
import { ErrorTypes } from "../interfaces/Error.interface";
import { CustomError } from "../interfaces/Response.interface";


export class ErrorHandler {

    static readonly getError = (error: unknown): CustomError => {
        let type: ErrorTypes = 'general';
        let message: string = '';
        let original_message: string = '';

        if( isCancel( error ) ){
            return {
                ok: false,
                data: {
                    type: 'timeout',
                    message: 'Límite de espera excedido',
                    original_message: error.message
                }
            };
        } else if ( isAxiosError( error ) ){
            return {
                ok: false,
                data: {
                    type: 'axios',
                    message: 'Error del Servidor',
                    original_message: error.message
                }
            };
        }

        return {
            ok: false,
            data: {
                type: 'general',
                message: typeof error === 'object'
                    ? JSON.stringify(error)
                    : ''
            }
        };
    }

}