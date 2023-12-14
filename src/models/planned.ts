import { z } from 'zod'

export const PlannedObject = z.object({
    date: z.coerce.date(),
    initial: z.number(),
    expansion: z.number(),
    watched: z.number(),
    left: z.number()
})
export type PlannedObject = z.infer<typeof PlannedObject>

export const PlannedArray = PlannedObject.array()
export type PlannedArray = z.infer<typeof PlannedArray>