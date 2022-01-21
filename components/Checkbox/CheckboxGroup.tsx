
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

export interface CheckboxOptionType {
  value: CheckboxValueType
}

export interface CheckboxGroupContext {
  name?: string
  value?: any
  disabled?: boolean
  toggleOption: (option: CheckboxOptionType) => void
  registerValue: (val: string) => void
  cancelValue: (val: string) => void
}

export const CheckboxGroupContext = React.createContext<CheckboxGroupContext | null>(null)

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(({
  className,
  disabled,
  children,
  defaultValue,
  name,
  onChange,
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

  const cls = createPrefixCls('checkbox-group')
  const classes = classnames(
    `${cls}`,
    {
      [`is-disabled`]: disabled,
    },
    className,
  )

  // 当子元素 checkbox value 值改变的时候 需要更新下元数据
  const [registeredValues, setRegisteredValues] = React.useState<CheckboxValueType[]>([])
  const cancelValue = (val: string) => {
    setRegisteredValues(prevValues => prevValues.filter(v => v !== val))
  }
  const registerValue = (val: string) => {
    setRegisteredValues(prevValues => [...prevValues, val])
  }

  const toggleOption = (option: CheckboxOptionType) => {
    const index = value.indexOf(option.value)
    let newValue = [...value]
    if (index > -1) {
      newValue.splice(index, 1)
    } else {
      newValue.push(option.value)
    }
    if (!('value' in restProps)) {
      setValue(newValue)
    }
    onChange?.(newValue.filter(v => registeredValues.includes(v)))
  }
  const context = {
    value,
    disabled,
    name,
    toggleOption,
    cancelValue,
    registerValue,
  }

  return (
    <div
      {...restProps}
      ref={ref}
      className={classes}
    >
      <CheckboxGroupContext.Provider
        value={context}
      >
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  )
})

export default CheckboxGroup
