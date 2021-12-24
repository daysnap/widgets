
import React from 'react'
import Internal from './Icon'
import IconLoading from './IconLoading'

import './index.scss'

export type { IconProps } from './Icon'

type InternalType = typeof Internal

interface IconInterface extends InternalType {
  Loading: typeof IconLoading
}

export const Icon = Internal as IconInterface

Icon.Loading = IconLoading

export default Icon

