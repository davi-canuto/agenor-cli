import { Command } from '@oclif/core'
import * as yaml from 'js-yaml'
import * as fs from 'fs'


export default class Init extends Command {
  static description = 'Init YML form to create portifolio.'

  async run(): Promise<void> {
    const yamlData = {}

    const yamlString = yaml.dump(yamlData)

    fs.writeFileSync('./index.yml', yamlString, 'utf8')

    this.log('Your yml is it`s at your ./index.yml.')
  }
}


// import {Args, Command, Flags} from '@oclif/core'

// export default class Hello extends Command {
//   static description = 'Say hello'

//   static examples = [
//     `$ oex hello friend --from oclif
// hello friend from oclif! (./src/commands/hello/index.ts)
// `,
//   ]

//   static flags = {
//     from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
//   }

//   static args = {
//     person: Args.string({description: 'Person to say hello to', required: true}),
//   }

//   async run(): Promise<void> {
//     const {args, flags} = await this.parse(Hello)

//     this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
//   }
// }

