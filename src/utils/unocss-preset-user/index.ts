import type { Preset } from 'unocss'

import theme from './theme'
import variants from './variants'
import shortcuts from './shortcuts'

type PresetUserOptions = Record<string, any>

const presetUser = (options: PresetUserOptions = {}): Preset => {
  return {
    name: 'preset-user',
    theme,
    variants,
    shortcuts,
    options
  }
}

export default presetUser
