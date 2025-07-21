
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export function signAccessToken(email: string, role: string = 'user'): string{
    
    const token = jwt.sign({userEmail: email, userRole: role }, process.env.JWR_SECRET!,{
        expiresIn: '15m'
    })
    
    return token
}

export function signRefreshToken(email: string,role: string = 'user'): string{
    return jwt.sign({userEmail: email, userRole: role }, process.env.refresh_secret!,{
        expiresIn: '17d'
    })
}


export function verifyAccessToken(token: string,secretKey: string):string | jwt.JwtPayload {
    try {
        const decoded = jwt.verify(token, process.env.JWR_SECRET!)
        return decoded;
    } catch (error) {
        throw new Error('Invalid Token')
    }
}

export function verifyRefreshToken(token: string,secretKey: string):string | jwt.JwtPayload {
    try {
        const decoded = jwt.verify(token, process.env.refresh_secret!)
        return decoded;
    } catch (error) {
        throw new Error('Invalid Token')
    }
}
