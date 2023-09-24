import { Command, ux } from '@oclif/core'
import Api from '../lib/api'
import getBuffer from '../helpers/get-buffer'
import getUrl from '../helpers/get-url'
import cli from 'cli-ux'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class Push extends Command {
  static description = 'Push your current JSON to create portifolio.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./form.json', 'utf8')
      const existingBuffer = getBuffer(false)
      const havePortifolio = await ux.confirm('You have a portifolio? (yes/no)')

      if (existingBuffer || havePortifolio) {
        const portifolio = await this.getPortifolio(
          existingBuffer,
          havePortifolio,
        )

        if (portifolio.data) {
          await this.handleExistingPortifolio(portifolio, jsonData)
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

      const response = await this.createPortifolio(jsonData)
      this.handleCreatedPortifolio(response)
    } catch (error) {
      console.error(error)
      throw new Error('Error in creating/updating portifolio')
    }
  }

  private async getPortifolio(
    existingBuffer: string,
    havePortifolio: boolean,
  ): Promise<any> {
    if (existingBuffer) {
      const decryptedId = Buffer.from(existingBuffer, 'base64').toString('utf8')
      return this.getPortifolioById(decryptedId)
    }

    if (havePortifolio) {
      const inputedSecret = await ux.prompt('What is your secret?')
      return this.getPortifolioBySecret(inputedSecret)
    }
  }

  private async getPortifolioById(portifolioId: string): Promise<any> {
    return Api.get(`/api/portifolio/${portifolioId}?preview=false`)
  }

  private async getPortifolioBySecret(secret: string): Promise<any> {
    return Api.get(`/api/portifolio?preview=false&secret=${secret}`)
  }

  private async handleExistingPortifolio(
    portifolio: any,
    jsonData: string,
  ): Promise<void> {
    const inputedSecret = await ux.prompt('What is your secret?')

    if (inputedSecret.trim() !== portifolio.data.userSecret.trim()) {
      throw new Error('Inputed secret is different from portifolio secret')
    }

    const confirmUpdate = await ux.confirm(
      'Do you want to update your current portifolio? (yes/no)',
    )

    if (!confirmUpdate) {
      this.log('Update canceled.')
      return
    }

    const response = await Api.put(
      `/api/portifolio/${portifolio.data._id}?preview=false`,
      JSON.parse(jsonData),
    )

    this.handleCreatedPortifolio(response)
  }

  private async createPortifolio(jsonData: string): Promise<any> {
    const response: any = await Api.post(
      '/api/portifolio?preview=false',
      JSON.parse(jsonData),
    )
    if (!response.success) {
      throw new Error('Error in request')
    }

    return response
  }

  private handleCreatedPortifolio(response: any): void {
    const data = response.data
    const currentDirectory = process.cwd()
    const idTxtPath = path.join(currentDirectory, 'id.txt')

    fs.writeFileSync(
      idTxtPath,
      Buffer.from(data._id).toString('base64'),
      'utf8',
    )

    this.log(
      'Here is your secret, please keep guarding this. In the future, you will need the secret for changes in your portifolio.',
    )
    this.log(`SECRET: ${data.userSecret}`)
    this.log(' ')

    cli.url('Click here to see result.', getUrl(data?._id, false))
  }
}
