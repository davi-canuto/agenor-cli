import * as fs from 'node:fs'
import * as path from 'node:path'

export default function getBuffer(): any {
  let buffer
  try {
    const currentDirectory = process.cwd()
    const idTxtPath = path.join(currentDirectory, 'id.txt')

    buffer = fs.readFileSync(idTxtPath, 'utf8')
  } catch {
    buffer = undefined
  }

  return buffer
}
