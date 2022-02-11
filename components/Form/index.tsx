
import Internal from './Form'
import FormItem from './FormItem'

export * from './interface'
type InternalType = typeof Internal
interface FormInterface extends InternalType {
  Item: typeof FormItem
}

export const Form = Internal as FormInterface
Form.Item = FormItem

export default Form

