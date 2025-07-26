
import {z, ZodError} from 'zod'
import { Request,Response,NextFunction } from 'express'


export function validateData(schema: z.ZodObject<any, any>){
    return (req:Request, res:Response, next: NextFunction) =>{

        const parsed = schema.safeParse(req.body);

        if (!parsed.success){
            res.status(400).json({errors: parsed.error.format()})
            return;
        }
        req.body = parsed.data;
        next()
    }
}


