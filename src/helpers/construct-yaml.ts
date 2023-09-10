import blankYaml from './construct/blank-yaml'
import filledYaml from './construct/filled-yaml'

export default function constructYaml(withExamples: boolean): any {
  if (withExamples) return filledYaml()

  return blankYaml()
}
