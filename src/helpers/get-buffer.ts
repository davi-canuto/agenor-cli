import * as fs from 'node:fs'

export default function getBuffer(): any {
  let buffer
  try {
    buffer = fs.readFileSync('./id.txt', 'utf8')
  } catch {
    buffer = undefined
  }

  return buffer
}
