import { Command } from '@oclif/core'
import Api from '../lib/api'
import getBuffer from '../helpers/get-buffer'
import getUrl from '../helpers/get-url'
import * as fs from 'node:fs'
import * as path from 'node:path'
export default class Preview extends Command {
  static description = 'View your portfolio by current JSON.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./form.json', 'utf8')
      const existingBuffer = getBuffer(false)

      let response

      if (existingBuffer) {
        const decryptedId = Buffer.from(existingBuffer, 'base64').toString(
          'utf8',
        )

        response = await Api.put(
          `/api/portifolio/${decryptedId}?preview=true`,
          JSON.parse(jsonData),
        ).then((res: any) => res)

        if (!response.success) {
          throw new Error('error in request')
        }

        const portifolioUrl = getUrl(response?.data?._id, true)

        this.log('Your preview is successfully updated.')
        this.log(`See results in ${portifolioUrl}`)
      } else {
        response = await Api.post(
          '/api/portifolio?preview=true',
          JSON.parse(jsonData),
        ).then((res: any) => res)

        if (!response.success) {
          throw new Error('error in request')
        }

        const data = response.data

        const portifolioUrl = getUrl(data._id, true)

        const currentDirectory = process.cwd()

        const idTxtPath = path.join(currentDirectory, 'preview-id.txt')

        fs.writeFileSync(
          idTxtPath,
          Buffer.from(data._id).toString('base64'),
          'utf8',
        )

        this.log('Success in create your preview.')
        this.log(`See results in ${portifolioUrl}`)
      }
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }
}
