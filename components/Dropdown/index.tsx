
import Internal from './Dropdown'
import DropdownItem from './DropdownItem'
import DropdownDivider from './DropdownDivider'

export * from './interface'

type InternalType = typeof Internal
interface DropdownInterface extends InternalType {
  Item: typeof DropdownItem
  Divider: typeof DropdownDivider
}

export const Dropdown = Internal as DropdownInterface
Dropdown.Item = DropdownItem
Dropdown.Divider = DropdownDivider

export default Dropdown

