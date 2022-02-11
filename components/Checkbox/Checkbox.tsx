
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { CheckboxProps } from './interface'
import { CheckboxGroupContext } from './context'

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    className,
    prefixCls,
    disabled,
    children,
    value,
    defaultChecked= false,
    ...restProps
  } = props

  const [checked, setChecked] = React.useState<Boolean>(defaultChecked)
  const checkboxGroupContext = React.useContext(CheckboxGroupContext)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    if (disabled) {
      return
    }
    setChecked(e.target.checked)
    restProps.onChange?.(e)
  }

  // 通知 CheckboxGroup 更新数据
  const prevValue = React.useRef<any>(value)
  React.useEffect(() => {
    checkboxGroupContext?.registerValue(value)
  }, [])
  React.useEffect(() => {
    if (value !== prevValue.current) {
      checkboxGroupContext?.cancelValue(prevValue.current)
      checkboxGroupContext?.registerValue(value)
    }
    return () => checkboxGroupContext?.cancelValue(value)
  }, [value])

  const checkboxProps: CheckboxProps = {
    ...restProps,
    checked: !!checked,
    value,
    disabled,
    onChange: handleChange,
  }
  if (checkboxGroupContext) {
    Object.assign(checkboxProps, {
      name: checkboxGroupContext.name,
      disabled: disabled || checkboxGroupContext.disabled,
      checked: checkboxGroupContext.value.includes(value),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e)
        checkboxGroupContext.toggleOption({ value })
      }
    })
  }

  const cls = createPrefixCls('checkbox', prefixCls)
  const classes = classnames(
    `${cls}`,
    {
      [`is-checked`]: checkboxProps.checked,
      [`is-disabled`]: checkboxProps.disabled,
    },
    className,
  )

  return (
    <label
      className={classes}>
      <span className={`${cls}-value`}>
        <input
          {...checkboxProps}
          type="checkbox"
        />
      </span>
      {children !== undefined && <span className={`${cls}-text`}>{children}</span>}
    </label>
  )
}

export default Checkbox

