
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { CheckboxGroupProps, CheckboxValueType, CheckboxOptionType } from './interface'
import { CheckboxGroupContext } from './context'

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  const {
    className,
    prefixCls,
    disabled,
    children,
    defaultValue,
    name,
    onChange,
    ...restProps
  } = props

  const [value, setValue] = React.useState<CheckboxValueType[]>(
    restProps.value || defaultValue || []
  )

  React.useEffect(() => {
    if ('value' in restProps) {
      setValue(restProps.value || [])
    }
  }, [restProps.value])

  const cls = createPrefixCls('checkbox-group', prefixCls)
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
    setRegisteredValues(v => v.filter(v => v !== val))
  }
  const registerValue = (val: string) => {
    setRegisteredValues(v => [...v, val])
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
