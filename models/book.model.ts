import mongoose from 'mongoose'


const bookSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    year: {type: Number, required: true}

})

const Books = mongoose.model("Book",bookSchema)

export default Books;