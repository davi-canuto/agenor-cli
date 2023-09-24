import { Command } from '@oclif/core'
import Api from '../lib/api'
import getBuffer from '../helpers/get-buffer'
import getUrl from '../helpers/get-url'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class Preview extends Command {
  static description = 'View your portfolio by current JSON.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./form.json', 'utf8')
      const existingBuffer = getBuffer(true)
      let response

      if (existingBuffer) {
        const decryptedId = Buffer.from(existingBuffer, 'base64').toString(
          'utf8',
        )
        response = await this.updatePortfolioPreview(decryptedId, jsonData)
      } else {
        response = await this.createPortfolioPreview(jsonData)
      }

      const portfolioUrl = getUrl(response.data?._id, true)
      this.log('Your preview is successfully updated/created.')
      this.log(`See results in ${portfolioUrl}`)
    } catch (error) {
      console.error(error)
      throw new Error('Error in creating/updating portfolio')
    }
  }

  private async updatePortfolioPreview(
    decryptedId: string,
    jsonData: string,
  ): Promise<any> {
    const response: any = await Api.put(
      `/api/portifolio/${decryptedId}?preview=true`,
      JSON.parse(jsonData),
    )
    if (!response.success) {
      throw new Error('Error in update request')
    }

    return response
  }

  private async createPortfolioPreview(jsonData: string): Promise<any> {
    const response: any = await Api.post(
      '/api/portifolio?preview=true',
      JSON.parse(jsonData),
    )
    if (!response.success) {
      throw new Error('Error in create request')
    }

    const data = response.data
    const currentDirectory = process.cwd()
    const idTxtPath = path.join(currentDirectory, 'preview-id.txt')
    fs.writeFileSync(
      idTxtPath,
      Buffer.from(data._id).toString('base64'),
      'utf8',
    )
    return response
  }
}
