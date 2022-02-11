
import Internal from './Checkbox'
import CheckboxGroup from './CheckboxGroup'

export * from './interface'

type InternalType = typeof Internal
interface CheckboxInterface extends InternalType {
  Group: typeof CheckboxGroup
}

export const Checkbox = Internal as CheckboxInterface
Checkbox.Group = CheckboxGroup

export default Checkbox

