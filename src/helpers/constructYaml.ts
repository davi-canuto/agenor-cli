import blankYaml from './construct/blankYaml'
import filledYaml from './construct/filledYaml'

export default function constructYaml(withExamples: string):any {
  if(withExamples == 'yes') return filledYaml()

  return blankYaml();
}