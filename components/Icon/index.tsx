
import Icon from './Icon'
import IconLoading from './IconLoading'

import './index.scss'

type TypeIcon = typeof Icon

interface IconInterface extends TypeIcon{
  Loading: typeof IconLoading
}

const Internal = Icon as IconInterface
Internal.Loading = IconLoading

export default Internal
