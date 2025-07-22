import {Request,Response} from 'express'
import Users from '../models/user.model'


export const seeAllUsers = async (_: Request, res: Response) => {
    const users = await Users.find()
    res.json(users)
}