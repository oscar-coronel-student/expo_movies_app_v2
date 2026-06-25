import { AxiosError, isAxiosError } from "axios";
import { CustomError } from "../interfaces/Response.interface";


export class ErrorHandler {

    static readonly getError = (error: unknown): CustomError => {
        if ( isAxiosError( error ) ){
            return {
                ok: false,
                data: {
                    type: 'axios',
                    message: ErrorHandler.getAxiosErrorMessage(error),
                    original_message: error.message
                }
            };
        }

        return {
            ok: false,
            data: {
                type: 'general',
                message:
                    typeof error === 'object' && error !== null && 'message' in error && typeof (error as any).message === 'string'
                        ? (error as any).message
                        : typeof error === 'object' && error !== null
                        ? JSON.stringify(error)
                        : String(error)
            }
        };
    }

    static readonly getAxiosErrorMessage = (error: AxiosError): string => {
        if( error.code === AxiosError.ERR_NETWORK) return `Verifique su conexión a internet`;
        if( error.code === AxiosError.ERR_CANCELED ) return `Solicitud cancelada`;
        if( error.code === AxiosError.ECONNREFUSED ) return `El servidor no está disponible`;
        if( error.code === AxiosError.ECONNABORTED ) return `La solicitud tardó demasiado en responder`;
        
        if( !error.response ){
            return `No se pudo conectar con el servidor`;
        }

        // El servidor respondió
        const status = error.response.status;
        if( status === 400 ) return `Datos inválidos`;
        if( status === 401 ) return `Sesión expirada`;
        if( status === 403 ) return `Sin permisos`;
        if( status === 404 ) return `Recurso no encontrado`;
        if( status === 429 ) return `Estás haciendo demasiadas solicitudes, intenta más tarde`;
        if( status === 500 ) return `Error inesperado en el servidor`;
        if( status === 502 ) return `Error en la comunicación con el servidor`;
        if( status === 503 ) return `Servicio en mantenimiento`;
        if( status === 504 ) return `Tiempo de espera del servidor agotado`;
        
        return `Error del servidor`;
    }

}