import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.json("Docker Backend")
})


app.listen(3000, () =>{
    console.log(`backend server running at port 3000`)
})