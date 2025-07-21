
import { verifyAccessToken } from '../services/tokenGenerator'
import express,{ Request,Response,NextFunction } from 'express'
import dotenv from 'dotenv'
dotenv.config()

export function adminAuth(req: Request, res: Response, next: NextFunction){

    const token = req.header('authorization')

    if (!token){
        res.status(403).json('Please Login First !')
        return;
    }

    try {
        const decoded: any = verifyAccessToken(token,process.env.JWR_SECRET!);

        (req as any).user = decoded;
        
        if (decoded.userRole !== 'admin'){
            res.status(403).json({message:"Access Deined, Admins only can access this !!"})
        }

        next();
       
    } catch (error) {
        res.status(400).json('Invalid Token !!')
    }
}

export function loggedInAuth(req: Request, res: Response, next: NextFunction){
    try {
        
        const token: string | any = req.header('authorization') 
        const decoded = verifyAccessToken(token,process.env.JWR_SECRET!)
    
        if (!decoded ){
            res.status(404).json({message: 'No or Invalid Token Provided !!'})
            return;
        }
        next()
    } catch (error) {
        console.log(error);
    }
}