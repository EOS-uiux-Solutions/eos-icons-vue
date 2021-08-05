import * as path from 'path'
import * as fs from 'fs'

import { IconGenerateScript } from '../interface/index'
import componentTemplate from '../template/iconComponent'
import iconIndexTemplate from '../template/iconIndex'
import { nameFunction } from '../utils/nameFunction'

async function generateIconComponents ({ type, from }: IconGenerateScript) {
  const iconNames = await fs.promises.readdir(from)
  for (const iconName of iconNames) {
    if(iconName === 'addchart.svg') {
      continue
    }
    const fileName = nameFunction({ iconName, type })

    // fetching Data of the required SVG file
    fs.readFile(path.resolve(__dirname, `../svg/${type}/${iconName}`), 'utf8', async function (err, data) {
      if (err) {
        console.error(err)
      }
      if(fileName === 'AddChartOulined' || fileName === 'AddChartFilled' || fileName === 'AddchartOulined' || fileName === 'AddchartFilled') {
        console.log(fileName)
      }
      if (type === 'animated') {
        data = data.replace('xml:space="preserve"', '')
        if (fileName === 'INSTALLING_ANIMATED') {
          while (data.includes('class="st0"')) {
            data = data.replace('class="st0"', '')
          }
        }
      }

      // eslint-disable-next-line no-template-curly-in-string

      var render = componentTemplate({ fileName, data })
      const indexContent = iconIndexTemplate({ fileName })

      // creates a .vue file at src/lib-components/ containing a react component
      fs.writeFile(
        path.resolve(__dirname, `../src/icons/${fileName}.tsx`),
        render,
        {
          flag: 'w+'
        },
        err => {
          if (err) {
            console.error(err)
          }
        })

      // creates a .ts index file at src/lib-components/ containing exports of all the icons
      fs.writeFile(
        path.resolve(__dirname, '../src/icons/index.tsx'),
        indexContent,
        {
          flag: 'a+'
        },
        err => {
          if (err) {
            console.error(err)
          }
        })
    })
  }
}

export default generateIconComponents
