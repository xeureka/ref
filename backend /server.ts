

import express, { Application} from 'express'
import connectDB from './utils/db.connect'
import bookRoutes from './routes/books.routes'
import usersRoutes from './routes/user.routes'
export const app = express()

app.use(express.json())
app.use('/api/books',bookRoutes) // sample API end point 
app.use('/api/users', usersRoutes)

const PORT = 3000

connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/**  creating of a public API
 * exposing ertain routes, securing them , provide documentation
 * 
 * 1. expose public routes this is done like the normal ones no other things required here to authenticate the users
 * 
 * authentication for external consumers
 * 
 * API keys (simple and common)
 * generate and assign API keys to users
 * required header like the jwt token
 * the other one is we can also use jwt here
 * the other important thing is adding rate limiting here
 */

/** LETS SEE ABOUT TESTING RIGHT NOW
 * unit testing : teset a single function/service in isonation buisness logic utils
 * 
 * integration test: test multiple coponenets working together (route + DB) routes controllers
 * 
 * End to End testing simulate real world usage API + DB + user flow
 * full stack or API level testing
 * 
 * testing looks easy too we will gonna use them often in the project ke ezi behuala okay
 */
