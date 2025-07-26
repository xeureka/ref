import expres from 'express'
import { signAccessToken,signRefreshToken,verifyRefreshToken } from '../services/tokenGenerator'

const router = expres.Router()

// Dummy Login
router.post('/login', (req,res) => {
    const userId = '123'
    const accessToken = signAccessToken(userId)
    const refreshToken = signRefreshToken(userId)

    res
        .cookie('accessToken', accessToken, {httpOnly: true})
        .cookie('refreshToken', refreshToken, {httpOnly: true})
        .json({message: 'Logged in'})
})

router.post('/refresh-token', (req,res) => {
    const token = req.cookies['refreshToken']

    try {
        const payload = verifyRefreshToken(token) as any;
        const newAccessToken = signAccessToken(payload.userId)
        res.cookie('accessToken', newAccessToken,{httpOnly: true}).json({ok: true})
    } catch (error) {
        res.sendStatus(403)
    }
})

router.post('/logout', (req,res) => {
    res
        .clearCookie('accessToken')
        .clearCookie('refreshToken')
        .json({message: 'Logged out'})
})

export default router


// We need a front to detect when the access token has expired and then send request to the /auth/refresh-token endpont to get a new access token ideally without user interaction 

/** code sinniper for the frontend logic
 * // Fetch wrapper with silent refresh
const fetchWithAuth = async (url: string, options = {}) => {
  const res = await fetch(url, {
    ...options,
    credentials: 'include',
  });

  if (res.status === 401) {
    // Access token expired — try refreshing
    const refresh = await fetch('/auth/refresh-token', { method: 'POST', credentials: 'include' });
    if (refresh.ok) {
      return fetch(url, { ...options, credentials: 'include' });
    } else {
      throw new Error('Unauthenticated');
    }
  }

  return res;
};

 */