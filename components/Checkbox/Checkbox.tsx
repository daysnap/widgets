
import React from 'react'
import classnames from 'classnames'
import { createPrefixCls } from '../utils/create'
import { CheckboxGroupContext } from './CheckboxGroup'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>{
  className?: string
  disabled?: boolean
  children?: React.ReactNode
  value?: any
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  disabled,
  children,
  value,
  defaultChecked= false,
  ...restProps
}) => {

  const [checked, setChecked] = React.useState<Boolean>(defaultChecked)
  const checkboxGroup = React.useContext(CheckboxGroupContext)

  const cls = createPrefixCls('checkbox')
  const classes = classnames(
    `${cls}`,
    {
      [`is-checked`]: checked,
      [`is-disabled`]: disabled,
    },
    className,
  )

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
    console.log(11, 'prevValue => ', prevValue)
    if (value !== prevValue.current) {
      checkboxGroup?.cancelValue(prevValue.current)
      checkboxGroup?.registerValue(value)
    }
    return () => checkboxGroup?.cancelValue(value)
  }, [value])

  const checkboxProps: CheckboxProps = {
    ...restProps,
    value,
    onChange: handleChange,
  }
  if (checkboxGroup) {
    Object.assign(checkboxProps, {
      name: checkboxGroup.name,
      disabled: disabled || checkboxGroup.disabled,
      checked: checkboxGroup.value.includes(value),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e)
        console.log('value => ', value)
        checkboxGroup.toggleOption({ value })
      }
    })
  }

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

