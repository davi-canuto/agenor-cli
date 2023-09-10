import { Command, Flags } from '@oclif/core'
import { exec } from 'node:child_process'
import getYamlJson from '../helpers/get-yaml-json'
export default class Preview extends Command {
  static description = 'Preview portofilio by your YML.'

  static flags = {}

  async run(): Promise<void> {
    const { flags } = await this.parse(Preview)

    const yamlData = getYamlJson()
  }
}
