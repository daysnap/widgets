
import Internal from './Radio'
import RadioGroup from './RadioGroup'

import './index.scss'

export type { RadioProps } from './Radio'

type InternalType = typeof Internal

interface RadioInterface extends InternalType {
    Group: typeof RadioGroup
}

export const Radio = Internal as RadioInterface

Radio.Group = RadioGroup

export default Radio

