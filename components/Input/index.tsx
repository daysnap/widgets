
import Internal from './Input'
import Password from './Password'
import Textarea from './Textarea'

export * from './interface'
type InternalType = typeof Internal
interface InputInterface extends InternalType {
  Password: typeof Password
  Textarea: typeof Textarea
}

export const Input = Internal as InputInterface
Input.Password = Password
Input.Textarea = Textarea

export default Input

