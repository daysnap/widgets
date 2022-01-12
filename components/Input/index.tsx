
import Internal from './Input'
import Password from './Password'

import './index.scss'

export type { InputProps } from './Input'

type InternalType = typeof Internal

interface InputInterface extends InternalType {
  Password: typeof Password
}

export const Input = Internal as InputInterface

Input.Password = Password

export default Input

