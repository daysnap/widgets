
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import DropdownDivider from './DropdownDivider'

import './index.scss'

type TypeDropdown = typeof Dropdown

interface DropdownInterface extends TypeDropdown{
  Item: typeof DropdownItem
  Divider: typeof DropdownDivider
}

const Internal = Dropdown as DropdownInterface
Internal.Item = DropdownItem
Internal.Divider = DropdownDivider

export default Internal


