import { readFileSync } from 'fs'
import { writeFile } from 'fs/promises'
import { ZodTypeAny } from 'zod'

export function readModelSync<Z extends ZodTypeAny>(model: Z, filename: string) {
    const content = readFileSync(filename, { encoding: 'utf-8' })
    const json = JSON.parse(content)
    return model.parse(json)
}

export async function writeModel(model: unknown, filename: string) {
    await writeFile(filename, JSON.stringify(model))
}