
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'

type CheckboxValueType = string | number | boolean

export interface CheckboxGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'>{
  disabled?: boolean
  value?: Array<CheckboxValueType>
  defaultValue?: Array<CheckboxValueType>
  children?: React.ReactNode
  name?: string
  onChange?: (checkedValue: Array<CheckboxValueType>) => void
}

export interface CheckboxGroupContext {
  name?: string
  value?: any
  disabled?: boolean
  registerValue: (val: string) => void
  cancelValue: (val: string) => void
}

export const GroupContext = React.createContext<CheckboxGroupContext | null>(null)

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(({
  className,
  disabled,
  children,
  defaultValue,
  name,
  ...restProps
}, ref) => {

  const [value, setValue] = React.useState<CheckboxValueType[]>(
    restProps.value || defaultValue || []
  )

  React.useEffect(() => {
    if ('value' in restProps) {
      setValue(restProps.value || [])
    }
  }, [restProps.value])

  const cls = createPrefixCls('checkbox')
  const classes = classnames(
    `${cls}`,
    {
      [`is-disabled`]: disabled,
    },
    className,
  )

  const toggleOption = (option: { value: CheckboxValueType }) => {
    const index = value.indexOf(option.value)
    if (!('value' in restProps)) {
      setValue(newValue);
    }
  }
  const context = {
    value,
    disabled,
    name,

    toggleOption,
  }

  return (
    <div
      {...restProps}
      ref={ref}
      className={classes}
    >
      <GroupContext.Provider
        value={context}
      >
        {children}
      </GroupContext.Provider>
    </div>
  )
})

export default CheckboxGroup
