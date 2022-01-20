
import Internal from './Checkbox'
import CheckboxGroup from './CheckboxGroup'

import './index.scss'

export type { CheckboxProps } from './Checkbox'

type InternalType = typeof Internal

interface CheckboxInterface extends InternalType {
  Group: typeof CheckboxGroup
}

export const Checkbox = Internal as CheckboxInterface

Checkbox.Group = CheckboxGroup

export default Checkbox

