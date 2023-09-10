import { Command } from '@oclif/core'
import getYamlJson from '../helpers/get-yaml-json'
import Api from '../lib/api'
export default class Preview extends Command {
  static description = 'Preview portofilio by your YML.'

  async run(): Promise<void> {
    const yamlData = getYamlJson()

    try {
      const response = await Api.post('/api/portifolio', yamlData)
      console.log(response)

      // this.portifolioId = response.data?.__id
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }
}
