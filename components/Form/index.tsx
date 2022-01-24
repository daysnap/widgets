
import Internal from './Form'
import FormItem from './FormItem'

import './index.scss'

export type { FormProps } from './Form'

type InternalType = typeof Internal

interface FormInterface extends InternalType {
  Item: typeof FormItem
}

export const Form = Internal as FormInterface

Form.Item = FormItem

export default Form

