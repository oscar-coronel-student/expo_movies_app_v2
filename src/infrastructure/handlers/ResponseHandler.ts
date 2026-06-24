import { CustomSuccess } from "../interfaces/Response.interface";


export class ResponseHandler {

    static readonly getResponse = <T extends Object>( data: T ): CustomSuccess<T> => {
        return { ok: true, data };
    }

}