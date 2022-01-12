
import Internal from './Input'
import Password from './Password'
import Textarea from './Textarea'

import './index.scss'

export type { InputProps } from './Input'

type InternalType = typeof Internal

interface InputInterface extends InternalType {
  Password: typeof Password
  Textarea: typeof Textarea
}

export const Input = Internal as InputInterface

Input.Password = Password
Input.Textarea = Textarea

export default Input

