import { Command, ux } from '@oclif/core'
import Api from '../lib/api'
import getBuffer from '../helpers/get-buffer'
import getUrl from '../helpers/get-url'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class Push extends Command {
  static description = 'Push your current JSON to create portifolio.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./form.json', 'utf8')
      const existingBuffer = getBuffer(false)
      let response

      const havePortifolio = await ux.confirm('You have a portifolio? (yes/no)')

      if (existingBuffer || havePortifolio) {
        let portifolio
        if (existingBuffer) {
          const decryptedId = Buffer.from(existingBuffer, 'base64').toString(
            'utf8',
          )

          portifolio = await Push.getPortifolio(decryptedId, null)
          const inputedSecret = await ux.prompt('What is your secret?')

          if (inputedSecret.trim() !== portifolio.data.userSecret.trim()) {
            throw new Error('inputed secret is differ of portifolio secret')
          }
        } else {
          const inputedSecret = await ux.prompt('What is your secret?')

          portifolio = await Push.getPortifolio(null, inputedSecret)
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
            `/api/portifolio/${portifolio.data._id}?preview=false`,
            JSON.parse(jsonData),
          ).then((res: any) => res)

          if (!response.success) {
            throw new Error('error in request')
          }

          this.log('Your portifolio is successfullly updated')
          this.log(' ')
          const portifolioUrl = getUrl(portifolio?.data?._id, false)
          this.log(`See results in ${portifolioUrl}`)
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
        '/api/portifolio?preview=false',
        JSON.parse(jsonData),
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
      this.log(' ')
      const portifolioUrl = getUrl(data?._id, false)
      this.log(`See results in ${portifolioUrl}`)
    } catch (error) {
      console.log(error)
      throw new Error('error in create portifolio')
    }
  }

  static async getPortifolio(portifolioId: any, secret: any) {
    const portifolio = await (secret
      ? Api.get(`/api/portifolio?preview=false&secret=${secret}`).then(
          (res: any) => res,
        )
      : Api.get(`/api/portifolio/${portifolioId}?preview=false`).then(
          (res: any) => res,
        ))

    return portifolio
  }
}
