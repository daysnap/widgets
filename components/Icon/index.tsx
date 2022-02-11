
import Internal from './Icon'
import IconLoading from './IconLoading'

export * from './interface'

type InternalType = typeof Internal
interface IconInterface extends InternalType {
  Loading: typeof IconLoading
}

export const Icon = Internal as IconInterface
Icon.Loading = IconLoading

export default Icon


