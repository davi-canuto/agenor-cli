import { Command, Flags } from '@oclif/core'
import { exec } from 'node:child_process'
import getYamlJson from '../helpers/get-yaml-json'
import Api from '../lib/api'
export default class Preview extends Command {
  static description = 'Preview portofilio by your YML.'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(Preview)

    const yamlData = getYamlJson()

    try {
      const response = await Api.post('/api/portifolio', yamlData)

      console.log(response)
      // this.portifolioId = response.id
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }
}
