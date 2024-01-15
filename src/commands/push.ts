import { Command, ux } from '@oclif/core'
import Api from '../lib/api'
import getBuffer from '../helpers/get-buffer'
import getUrl from '../helpers/get-url'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class Push extends Command {
  static description = 'Push your current JSON to create portfolio.'

  async run(): Promise<void> {
    try {
      const jsonData = fs.readFileSync('./form.json', 'utf8')
      const existingBuffer = getBuffer(false)
      let response

      const havePortfolio = await ux.confirm(
        'You have a pushed portfolio? (yes/no)',
      )

      if (existingBuffer || havePortfolio) {
        let portfolio
        if (existingBuffer) {
          const decryptedId = Buffer.from(existingBuffer, 'base64').toString(
            'utf8',
          )

          portfolio = await Push.getPortfolio(decryptedId, null)
          const inputedSecret = await ux.prompt('What is your secret?')

          if (inputedSecret.trim() !== portfolio.data.userSecret.trim()) {
            throw new Error('inputed secret is differ of portfolio secret')
          }
        } else {
          const inputedSecret = await ux.prompt('What is your secret?')

          portfolio = await Push.getPortfolio(null, inputedSecret)
        }

        if (portfolio.data) {
          const confirmUpdate = await ux.confirm(
            'Do you want to update your current portfolio? (yes/no)',
          )

          if (!confirmUpdate) {
            this.log('Update canceled.')
            return
          }

          response = await Api.put(
            `/api/portfolio/${portfolio.data._id}?preview=false`,
            JSON.parse(jsonData),
          ).then((res: any) => res)

          if (!response.success) {
            throw new Error('error in request')
          }

          this.log('Your portfolio is successfullly updated')
          this.log(' ')
          const portfolioUrl = getUrl(portfolio?.data?._id, false)
          this.log(`See results in ${portfolioUrl}`)
          return
        }

        throw new Error('Portfolio not found')
      }

      const confirmCreate = await ux.confirm(
        'Do you want to push a new portfolio? (yes/no)',
      )

      if (!confirmCreate) {
        this.log('Push canceled.')
        return
      }

      response = await Api.post(
        '/api/portfolio?preview=false',
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
        'Here is your secret, please keep guardin this. In future your need the secret for changes in your portfolio.',
      )
      this.log(`SECRET: ${data.userSecret}`)
      this.log(' ')
      const portfolioUrl = getUrl(data?._id, false)
      this.log(`See results in ${portfolioUrl}`)
    } catch (error) {
      console.log(error)
      throw new Error('error in create portfolio')
    }
  }

  static async getPortfolio(portfolioId: any, secret: any) {
    const portfolio = await (secret
      ? Api.get(`/api/portfolio?preview=false&secret=${secret}`).then(
          (res: any) => res,
        )
      : Api.get(`/api/portfolio/${portfolioId}?preview=false`).then(
          (res: any) => res,
        ))

    return portfolio
  }
}
