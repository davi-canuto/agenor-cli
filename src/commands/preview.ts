import { Command } from '@oclif/core'
import Api from '../lib/api'
import getBuffer from '../helpers/get-buffer'
import * as fs from 'node:fs'
export default class Preview extends Command {
  static description = 'Preview portofilio by your JSON.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./form.json', 'utf8')
      const headers = {
        preview: true,
      }
      const existingBuffer = getBuffer()

      let response

      if (existingBuffer) {
        const decryptedId = Buffer.from(existingBuffer, 'base64').toString(
          'utf8',
        )

        response = await Api.put(
          `/api/portifolio/${decryptedId}`,
          JSON.parse(jsonData),
          headers,
        ).then((res: any) => res)

        if (!response.success) {
          throw new Error('error in request')
        }

        this.log('your preview is successfully updated.')
      } else {
        response = await Api.post(
          '/api/portifolio',
          JSON.parse(jsonData),
          headers,
        ).then((res: any) => res)

        if (!response.success) {
          throw new Error('error in request')
        }

        const data = response.data

        fs.writeFileSync(
          './id.txt',
          Buffer.from(data._id).toString('base64'),
          'utf8',
        )
      }
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }
}
