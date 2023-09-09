import blankYaml from './construct/blankYaml'
import filledYaml from './construct/filledYaml'

export default function constructYaml(withExamples: boolean): any {
  if (withExamples) return filledYaml()

  return blankYaml()
}
