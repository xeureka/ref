
import express, { Application} from 'express'
import connectDB from './utils/db.connect'
import bookRoutes from './routes/books.routes'
import usersRoutes from './routes/user.routes'
const app: Application = express()

app.use(express.json())
app.use('/api/books',bookRoutes)
app.use('/api/users', usersRoutes)

const PORT = 3000

connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});