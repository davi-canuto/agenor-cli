import { Hook } from '@oclif/core'
import { portifolioContext } from '../../variables/portifolio-context'

const hook: Hook<'init'> = async function (options) {
  portifolioContext.currentId = undefined
}

export default hook
