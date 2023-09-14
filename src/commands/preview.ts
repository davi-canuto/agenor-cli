import { Command } from '@oclif/core'
import Api from '../lib/api'
import * as fs from 'node:fs'
export default class Preview extends Command {
  static description = 'Preview portofilio by your YML.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./index.json', 'utf8')

      const response: any = await Api.post(
        '/api/portifolio',
        JSON.parse(jsonData),
      ).then((response: any) => response)

      if (!response.success) {
        throw new Error('error in request')
      }

      const data = response.data
      const portifolioId = data._id
      console.log(portifolioId)
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }
}
