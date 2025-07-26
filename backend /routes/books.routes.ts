import express,{Request,Response} from 'express'
import Books  from '../models/book.model'
import { adminAuth,loggedInAuth } from '../middleware/auth'
import {validateData} from '../middleware/validate'
import { bookInputSchema } from '../schemas/book.schema'

const router = express.Router()

router.get('/', async (req: Request,res: Response) =>{
    const books = await Books.find()

    res.json(books)
})


router.get('/:id',loggedInAuth, async (req: Request, res: Response) => {
  try {
    const book = await Books.findById(req.params.id);

    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }

    res.json(book);
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID Format!' });
  }
});

router.post('/',adminAuth,validateData(bookInputSchema) ,async (req: Request, res: Response) => {
    try {
        const {title, author, year} = req.body;

        const isDublicate = await Books.find({title: req.body.title});

        if (!isDublicate){
            res.status(400).json({message: 'The Book already Exist.'})
            return;
        }

        let newBook = new Books({
            title,
            author,
            year
        })

        const result = await newBook.save()
        res.status(201).json(result)

    } catch (error) {
        console.log('Error: ',error)
        res.json({message: 'Error Registering a Book !!'})
    }
})


export default router;

