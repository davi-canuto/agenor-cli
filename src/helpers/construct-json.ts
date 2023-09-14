import blankJson from './construct/blank-json'
import filledJson from './construct/filled-json'

export default function constructJson(withExamples: boolean): string {
  if (withExamples) return filledJson()

  return blankJson()
}
