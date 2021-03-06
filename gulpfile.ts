import { series, parallel } from 'gulp'
import { clean } from './utils/clean'
import { copy } from './utils/copy'

export default series(

  // Cleaning 'src','svg','es','lib' before copying SVGs from 'EOS-Icons'
  clean(['es','lib', 'svg', 'src/icons']),

  // Running all the tasks of copying SVGs from 'EOS-Icons' in parallel
  parallel(

    copy({
      from: ['node_modules/eos-icons/svg/*.svg'],
      toDir: 'svg/filled'
    }),

    copy({
      from: ['node_modules/eos-icons/svg/material/*.svg'],
      toDir: 'svg/filled'
    }),

    copy({
      from: ['node_modules/eos-icons/animated-svg/*.svg'],
      toDir: 'svg/animated'
    }),

    copy({
      from: ['node_modules/eos-icons/svg-outlined/*.svg'],
      toDir: 'svg/outlined'
    }),

    copy({
      from: ['node_modules/eos-icons/svg-outlined/material/*.svg'],
      toDir: 'svg/outlined'
    })
  )
)
