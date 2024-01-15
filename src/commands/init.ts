import constructJson from '../helpers/construct-json'
import { Command, Flags } from '@oclif/core'
import select from '@inquirer/select'
import { exec } from 'node:child_process'
import * as fs from 'node:fs'
export default class Init extends Command {
  static description = 'Init JSON form to create your portfolio.'

  static flags = {
    code: Flags.boolean({
      description: 'Open JSON directory with Visual Studio Code',
      required: false,
    }),
  }

  async run(): Promise<void> {
    const withExamples = await select({
      message: 'Init JSON directory with examples?',
      choices: [
        {
          name: 'Yes',
          value: true,
        },
        {
          name: 'No',
          value: false,
        },
      ],
    })

    const jsonData = constructJson(withExamples)

    const { flags } = await this.parse(Init)

    fs.writeFileSync('./form.json', jsonData, 'utf8')

    if (flags.code) {
      exec('code ./form.json')
    } else {
      this.log('Your JSON is it`s at your ./form.json.')
    }
  }
}
