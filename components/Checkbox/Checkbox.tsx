
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
    if (value !== prevValue.current) {
      checkboxGroup?.cancelValue(prevValue.current)
      checkboxGroup?.registerValue(value)
    }
    return () => checkboxGroup?.cancelValue(value)
  }, [value])

  const props = { ...restProps, disabled,  }

  return (
    <label
      className={classes}>
      <span className={`${cls}-value`}>
        <input
          {...restProps}
          type="checkbox"
          disabled={disabled}
          checked={!!checked}
          onChange={handleChange}
          value={value}
        />
      </span>
      {children !== undefined && <span className={`${cls}-text`}>{children}</span>}
    </label>
  )
}

export default Checkbox

