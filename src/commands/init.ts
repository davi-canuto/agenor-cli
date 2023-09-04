import buildYaml from '../helpers/buildYaml'
import { Command, Flags } from '@oclif/core'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import { exec } from 'child_process'

export default class Init extends Command {
  static description = 'Init YML form to create portifolio.'

  static flags = {
    code: Flags.boolean({
      description: 'Open YAML file with Visual Studio Code',
      required: false
    }),
  }

  async run(): Promise<void> {
    const yamlData = buildYaml()
    const {flags} = await this.parse(Init)

    const yamlString = yaml.dump(yamlData)

    fs.writeFileSync('./index.yml', yamlString, 'utf8')

    if (flags.code) {
      exec('code ./index.yml', (error) => {
        if (error) {
          this.log('Error in open with code, Your yml is it`s at your ./index.yml.');
        }
      });
    } else {
      this.log('Your yml is it`s at your ./index.yml.')
    }
  }
}