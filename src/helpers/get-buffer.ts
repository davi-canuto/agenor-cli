import * as fs from 'node:fs'
import * as path from 'node:path'

export default function getBuffer(preview: boolean): any {
  let buffer
  let idTxtPath

  try {
    const currentDirectory = process.cwd()
    idTxtPath = preview
      ? path.join(currentDirectory, 'preview-id.txt')
      : path.join(currentDirectory, 'id.txt')

    buffer = fs.readFileSync(idTxtPath, 'utf8')
  } catch {
    buffer = null
  }

  return buffer
}
