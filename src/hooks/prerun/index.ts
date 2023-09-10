import { Hook, Config } from '@oclif/core'
import { portifolioContext } from '../../variables/portifolio-context'

const hook: Hook<'init'> = async function (options) {
  portifolioContext.currentId = options
}

export default hook
