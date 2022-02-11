
import Internal from './Radio'
import RadioGroup from './RadioGroup'

export * from './interface'
type InternalType = typeof Internal
interface RadioInterface extends InternalType {
  Group: typeof RadioGroup
}

export const Radio = Internal as RadioInterface
Radio.Group = RadioGroup

export default Radio

