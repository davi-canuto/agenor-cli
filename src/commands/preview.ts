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

      const response: any = await Api.post(
        '/api/portifolio',
        JSON.parse(jsonData),
        headers,
      ).then((response: any) => response)

      if (!response.success) {
        throw new Error('error in request')
      }

      const data = response.data

      // encode
      const buff = Buffer.from(data._id)

      fs.writeFileSync('./id.txt', buff.toString('base64'), 'utf8')

      // decode example
      // let buff = Buffer.from(str, 'base64')
      // let text = buff.toString('ascii')
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }
}
