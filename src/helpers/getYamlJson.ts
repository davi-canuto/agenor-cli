import * as yaml from 'js-yaml'
import * as fs from 'node:fs'

export default function getYamlJson(): any {
  const fileData = fs.readFileSync('./index.yml', 'utf8')

  const yamlData = yaml.load(fileData)
  const jsonData = JSON.stringify(yamlData)

  return jsonData
}
