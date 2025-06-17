

import { z } from 'zod'


export const bookInputSchema = z.object({
    title: z.string(),
    author: z.string(),
    year: z.number()
})

// export type BookInput = z.infer<typeof bookInputSchema>