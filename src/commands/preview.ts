import { Command } from '@oclif/core'
import Api from '../lib/api'
import * as fs from 'node:fs'
export default class Preview extends Command {
  static description = 'Preview portofilio by your YML.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./form.json', 'utf8')
      const headers = {
        preview: true,
      }
      const existingBuffer = fs.readFileSync('./id.txt')
      let response

      if (existingBuffer) {
        const decryptedId = Buffer.from(existingBuffer).toString('ascii')

        response = await Api.put(
          `/api/portifolio/${decryptedId}`,
          JSON.parse(jsonData),
          headers,
        ).then((res: any) => res)
      } else {
        response = await Api.post(
          '/api/portifolio',
          JSON.parse(jsonData),
          headers,
        ).then((res: any) => res)
      }

      if (!response.success) {
        throw new Error('error in request')
      }

      const data = response.data

      const buff = Buffer.from(data._id)

      fs.writeFileSync('./id.txt', buff.toString('base64'), 'utf8')
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }
}
