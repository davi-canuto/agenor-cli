import { Command, ux } from '@oclif/core'
import Api from '../lib/api'
import getBuffer from '../helpers/get-buffer'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class Push extends Command {
  static description = 'Push your current JSON to create portifolio.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./form.json', 'utf8')
      const headers = {
        preview: 'false',
      }
      const existingBuffer = getBuffer(true)
      let response

      const havePortifolio = await ux.confirm('You have a portifolio? (yes/no)')

      if (existingBuffer || havePortifolio) {
        let portifolio
        if (existingBuffer) {
          const decryptedId = Buffer.from(existingBuffer, 'base64').toString(
            'utf8',
          )

          portifolio = await Push.getPortifolio(decryptedId, headers, null)
          const inputedSecret = await ux.prompt('What is your secret?')

          if (inputedSecret.trim() !== portifolio.data.userSecret.trim()) {
            throw new Error('inputed secret is differ of portifolio secret')
          }
        } else {
          const inputedSecret = await ux.prompt('What is your secret?')

          portifolio = await Push.getPortifolio(null, headers, inputedSecret)
        }

        if (portifolio.data) {
          const confirmUpdate = await ux.confirm(
            'Do you want to update your current portifolio? (yes/no)',
          )

          if (!confirmUpdate) {
            this.log('Update canceled.')
            return
          }

          response = await Api.put(
            `/api/portifolio/${portifolio.data._id}`,
            JSON.parse(jsonData),
            headers,
          ).then((res: any) => res)

          if (!response.success) {
            throw new Error('error in request')
          }

          this.log('Your portifolio is successfullly updated')
          return
        }

        throw new Error('Portifolio not found')
      }

      const confirmCreate = await ux.confirm(
        'Do you want to push a new portfolio? (yes/no)',
      )

      if (!confirmCreate) {
        this.log('Push canceled.')
        return
      }

      response = await Api.post(
        '/api/portifolio',
        JSON.parse(jsonData),
        headers,
      ).then((res: any) => res)

      if (!response.success) {
        throw new Error('error in request')
      }

      const data = response.data
      const currentDirectory = process.cwd()

      const idTxtPath = path.join(currentDirectory, 'id.txt')

      fs.writeFileSync(
        idTxtPath,
        Buffer.from(data._id).toString('base64'),
        'utf8',
      )

      this.log(
        'Here is your secret, please keep guardin this. In future your need the secret for changes in your portifolio.',
      )
      this.log(`SECRET: ${data.userSecret}`)
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }

  static async getPortifolio(portifolioId: any, headers: any, secret: any) {
    let portifolio
    if (secret) {
      headers.secret = secret
      portifolio = await Api.get('/api/portifolio/', headers).then(
        (res: any) => res,
      )
    } else {
      portifolio = await Api.get(
        `/api/portifolio/${portifolioId}`,
        headers,
      ).then((res: any) => res)
    }

    return portifolio
  }
}
