import request from 'supertest'
import {app} from '../server'

describe('User Controller', () => {
    it ('GET /api/users shoudl return a list of users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
    })
})