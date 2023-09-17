import { Command, ux } from '@oclif/core'
import Api from '../lib/api'
import getBuffer from '../helpers/get-buffer'
import * as fs from 'node:fs'

export default class Push extends Command {
  static description = 'Push your current JSON to create portifolio.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./form.json', 'utf8')
      const headers = {
        preview: 'false',
      }
      const existingBuffer = getBuffer()
      let response

      if (existingBuffer) {
        const decryptedId = Buffer.from(existingBuffer, 'base64').toString(
          'utf8',
        )

        const portifolio = await Push.getPortifolio(decryptedId, headers)

        if (portifolio.data) {
          const inputedSecret = await ux.prompt('What is your secret?')
          if (inputedSecret.trim() !== portifolio.data.userSecret.trim()) {
            throw new Error('inputed secret is differ of portifolio secret')
          }

          response = await Api.put(
            `/api/portifolio/${decryptedId}`,
            JSON.parse(jsonData),
            headers,
          ).then((res: any) => res)

          if (!response.success) {
            throw new Error('error in request')
          }

          this.log('your portifolio is successfullly updated')
          return
        }
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

      fs.writeFileSync(
        './id.txt',
        Buffer.from(data._id).toString('base64'),
        'utf8',
      )

      this.log(
        'here is your secret, please keep guardin this. In future your need the secret for changes in your portifolio.',
      )
      this.log(data.userSecret)
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }

  static async getPortifolio(portifolioId: any, headers: any) {
    const portifolio = await Api.get(
      `/api/portifolio/${portifolioId}`,
      headers,
    ).then((res: any) => res)

    return portifolio
  }
}
